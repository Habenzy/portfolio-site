import { useState, useEffect } from "react";
import GalleryItem from "../global/galleryItem";

export default function Gallery(props) {
  const [digArt, setDigArt] = useState([]);
  const [physArt, setPhysArt] = useState([]);

  useEffect(() => {
    //fetch from DB and set dig and phys art arrays
  });

  return (
    digArt.length || physArt.length ?
    <div class="page-center">
      <h3>Digital Art</h3>
      <div class="gallery">
        {digArt.map((pic, index) => (
          <GalleryItem source={pic.src} title={pic.title} key={index}/>
        ))}
      </div>

      <h3>Paintings and Sketches</h3>
      <div class="gallery">
        {physArt.map((pic) => (
          <GalleryItem source={pic.src} title={pic.title} />
        ))}
      </div>
    </div> :
    <div>Coming soon...</div>

  );
}

