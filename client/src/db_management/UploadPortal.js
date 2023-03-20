import { useState, useEffect } from "react";
import { firestore, storage, auth } from "../firebase/firebase_config";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function EditEntry(props) {
  const [editName, setEditName] = useState("");
  const [editBlurb, setEditBlurb] = useState("");
  const [editDate, setEditDate] = useState("");
console.log("names", editName, props.name)
console.log('dates')
  function updateGalleryEntry() {
    const imageDoc = doc(db, props.gallery, props.name);
    updateDoc(imageDoc, {
      name: editName || props.name,
      blurb: editBlurb || props.blurb,
      date: editDate || props.date,
    }).then(res => {
      alert("update successful")
    }).catch(err => {
      alert(`update failed: ${err.message}`)
    });
  }

  return (
    <div>
      <img className="edit-thumb" src={props.url} alt={props.name} />
      <form
        className="edit-images"
        onSubmit={(evt) => {
          evt.preventDefault();
          updateGalleryEntry();
        }}
      >
        <label htmlFor="file-name">Image name: </label>
        <br></br>
        <input
          onChange={(evt) => {
            setEditName(evt.target.value);
          }}
          value={editName}
          name="file-name"
          type="text"
          placeholder={props.name}
        />
        <br></br>
        <label htmlFor="date-taken">Date taken: </label>
        <br></br>
        <input
          onChange={(evt) => {
            setEditDate(evt.target.value);
          }}
          value={editDate}
          name="date-taken"
          type="date"
        />
        <br></br>
        <label htmlFor="edit-blurb">
          Description that will appear under the image:
        </label>
        <br></br>
        <input
          onChange={(evt) => {
            setEditBlurb(evt.target.value);
          }}
          value={editBlurb}
          name="edit-blurb"
          type="text"
          placeholder={props.blurb}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default function Uploader(props) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");

  const [gallery, setGallery] = useState("nerdery");

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  });

  const handleSignIn = (evt) => {
    evt.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  const uploadEntry = async (evt) => {
    evt.preventDefault();

    let galleryRef = ref(storage, gallery);
    console.log(galleryRef);
    let imgRef = ref(galleryRef, img.name);
    console.log(imgRef);
    const uploadTask = uploadBytesResumable(imgRef, img);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage references the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let entry = {
            title: title,
            blurb: blurb,
            url: downloadURL,
          };

          setDoc(doc(firestore, gallery, entry.title), entry);

          setTitle("");
          setBlurb("");
          setImg("");
        });
      }
    );
  };

  return user ? (
    <form onSubmit={uploadEntry}>
      <input
        type="file"
        name="image"

        onChange={(evt) => setImg(evt.target.files[0])}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        type="text"
        name="blurb"
        placeholder="Blurb"
        value={blurb}
        onChange={(evt) => setBlurb(evt.target.value)}
      />
      <input type="submit" />
    </form>
  ) : (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          name="email"
          placeholder="Email"
        />
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
          name="password"
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
