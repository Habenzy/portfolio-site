import { useState, useEffect } from "react";
import { firestore, storage, auth } from "../firebase/firebase_config";
import {
  setDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  collection,
  deleteDoc
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function EditEntry(props) {
  const [editTitle, setEditTitle] = useState("");
  const [editBlurb, setEditBlurb] = useState("");

  console.log("names", editTitle, props.title);
  console.log("dates");
  function updateGalleryEntry() {
    const imageDoc = doc(firestore, props.gallery, props.title);
    updateDoc(imageDoc, {
      title: editTitle || props.title,
      blurb: editBlurb || props.blurb,
    })
      .then((res) => {
        alert("update successful");
      })
      .catch((err) => {
        alert(`update failed: ${err.message}`);
      });
  }

  function deleteEntry() {
    const imageDoc = doc(firestore, props.gallery, props.title);
    deleteDoc(imageDoc)
      .then((res) => {
        alert("delete successful");
      })
      .catch((err) => {
        alert(`delete failed: ${err.message}`);
      });
  }

  return (
    <div>
      <img className="edit-thumb" src={props.url} alt={props.title} />
      <form
        className="edit-images"
        onSubmit={(evt) => {
          evt.preventDefault();
          updateGalleryEntry();
        }}
      >
        <label htmlFor="file-name">Image Title: </label>
        <br></br>
        <input
          onChange={(evt) => {
            setEditTitle(evt.target.value);
          }}
          value={editTitle}
          name="file-name"
          type="text"
          placeholder={props.title}
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
      <button onClick={deleteDoc}>Delete</button>
    </div>
  );
}

export default function Uploader(props) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");

  const [gallery, setGallery] = useState("nerdery");
  const [editImages, setEditImages] = useState([]);

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

  useEffect(() => {
    getDocs(query(collection(firestore, gallery)))
      .then((querySnapshot) => {
        let imgData = [];
        querySnapshot.forEach((doc) => {
          imgData.push(doc.data());
        });
        setEditImages(imgData);
      })
      .catch((err) => console.log(err.message));
  }, [gallery]);

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
    <div>
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
      <ul>
        {editImages.map((image, index) => {
          return (
            <li key={index}>
              <EditEntry
                url={image.url}
                title={image.title}
                blurb={image.blurb}
                gallery={gallery}
              />
            </li>
          );
        })}
      </ul>
    </div>
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
