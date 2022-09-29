import { useState } from "react";
import GalleryItem from "../global/galleryItem";

export default function Nerdery(props) {
  const [dndStuff, setDnDStuff] = useState([]);
  const [wh40kStuff, setWH40kStuff] = useState([]);

  return (
    <div>
      <p>
        Welcome to my hobby page. In addition to my many other excellent
        qualities, I'm a huge nerd, and play Warhammer 40k, and D&D (I DM one
        group, and play in another). Enjoy some pictures of maps, minis, and
        more!
      </p>
      <p>
        If you're curious about my homebrew setting you can check out the lore{" "}
        <a
          href="https://www.worldanvil.com/w/the-fractured-hub-habenzy"
          target="_blank"
        >
          here
        </a>
      </p>
      <div id="dandd">
        <div class="gallery">
          {dndStuff.length ? (
            dndStuff.map((pic, index) => (
              <GalleryItem source={pic.src} title={pic.title} key={index} />
            ))
          ) : (
            <p className="construction">Pictures coming soon!</p>
          )}
        </div>
      </div>

      <div id="warhammer">
        <div class="gallery">
          {wh40kStuff.length ? (
            wh40kStuff.map((pic, index) => (
              <GalleryItem source={pic.src} title={pic.title} key={index} />
            ))
          ) : (
            <p className="construction">Pictures coming soon!</p>
          )}
        </div>
      </div>
    </div>
  );
}
