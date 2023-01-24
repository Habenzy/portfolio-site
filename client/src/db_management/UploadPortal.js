import { useState } from "react"
import { firestore, storage } from "../firebase/firebase_config";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Uploader(props) {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [gallery, setGallery] = useState('nerdery')

  let uploadEntry = async (evt) => {
    evt.preventDefault()

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

          setDoc(doc(firestore, gallery, entry.name), entry);

          setTitle("");
          setBlurb("");
          setImg("");
        });
      }
    );
  }
  
  return (
    <form onSubmit={uploadEntry}>
      <input type='file' name="image" value={img} onChange={(evt) => setImg(evt.target.value)}/>
      <input type="text" name="title" value={title} onChange={(evt) => setTitle(evt.target.value)}/>
      <input type="text" name="blurb" value={blurb} onChange={(evt) => setBlurb(evt.target.value)}/>
      <input type="submit" />
    </form>
  )
}