import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase_config";
import Gallery from "../gallery/gallery";

const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

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
      <p className="blurb">
        Welcome to my hobby page. In addition to my many other excellent
        qualities, I'm also a huge nerd, and play Warhammer 40k, and D&D (I DM one
        group, and play in another). Enjoy some pictures of maps, minis, and
        more!
      </p>
      <p className="blurb">
        If you're curious about my homebrew setting you can check out the lore{" "}
        <a
          href="https://www.worldanvil.com/w/the-fractured-hub-habenzy"
          target="_blank"
          rel="norefferer"
        >
          on World Anvil.
        </a>
      </p>
      <Gallery entries={dndStuff}/>
    </div>
  );
}
