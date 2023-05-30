import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase_config";
import Gallery from "../gallery/gallery";

export default function Nerdery(props) {
  const [dndStuff, setDnDStuff] = useState([]);

  useEffect(() => {
    getDocs(collection(firestore, 'nerdery')).then((querySnapshot) => {
      let imgData = [];
      querySnapshot.forEach((doc) => {
        imgData.push(doc.data());
      });
      setDnDStuff(imgData);
    });
  }, []);

  return (
    <div className="center-wrapper">
      <p className="gal-blurb top-box">
        Welcome to my hobby page. In addition to my many other excellent
        qualities, I'm also a huge nerd, and play Warhammer 40k, and D&D (I DM one
        group, and play in another). Enjoy some pictures of maps, minis, and
        more! That all being said the true purpose of this gallery is to showcase this sweet, scratch built, React image gallery. It's modular! It's repeatable! It's got more features in the works (tag sorting, and order by... functionality are next on the docket)! It's connected to Firebase, and it's got a hidden admin portal (auth secured) that lets me easily add new images and has full CRUD functionality without having to edit any code, or directly access the database! Click on some pictures and play around with the navigation!
      </p>
      <p className="gal-blurb">
        If you're curious about my homebrew setting you can check out the lore{" "}
        <a
          href="https://www.worldanvil.com/w/the-fractured-hub-habenzy"
          target="_blank"
          rel="norefferer"
        >
          on World Anvil.
        </a>
      </p>
      <Gallery entries={dndStuff} updater={setDnDStuff}/>
    </div>
  );
}
