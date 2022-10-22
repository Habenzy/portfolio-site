import { useState, useEffect } from "react";
import Gallery from "../gallery/gallery";

export default function Nerdery(props) {
  const [dndStuff, setDnDStuff] = useState([]);

  useEffect(() => {
    //fetch from firebase and set as DndDStuff
  }, [])

  return (
    <div className="center-wrapper">
      <p>
        Welcome to my hobby page. In addition to my many other excellent
        qualities, I'm also a huge nerd, and play Warhammer 40k, and D&D (I DM one
        group, and play in another). Enjoy some pictures of maps, minis, and
        more!
      </p>
      <p>
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
