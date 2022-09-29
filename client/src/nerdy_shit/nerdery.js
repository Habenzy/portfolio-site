import { useState } from "react";
import GalleryItem from "../global/galleryItem";

export default function Nerdery(props) {
  const [dndStuff, setDnDStuff] = useState([]);
  const [wh40kStuff, setWH40kStuff] = useState([]);

  return (
    <div>
      <p>
        Welcome to my hobby page. I'm a huge nerd, and play Warhammer 40k, and
        D&D (I DM one group, and play in another). Enjoy some pictures of maps,
        minis, and some of my own homebrew lore!
      </p>
      <div id="dandd">
        <div class="gallery">
          {dndStuff.map((pic, index) => (
            <GalleryItem source={pic.src} title={pic.title} key={index} />
          ))}
        </div>
      </div>

      <div id="warhammer">
        <div class="gallery">
          {wh40kStuff.map((pic, index) => (
            <GalleryItem source={pic.src} title={pic.title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
