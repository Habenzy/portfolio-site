import { useState, useEffect } from "react";
import GalleryItem from "../global/galleryItem";

export default function Gallery(props) {
  const [digArt, setDigArt] = useState([{src: "", title: "test 1"}, {src: "", title: "test 2"}, {src: "", title: "test 3"}, {src: "", title: "test 4"}]);
  const [physArt, setPhysArt] = useState([{src: "", title: "test 1"}, {src: "", title: "test 2"}, {src: "", title: "test 3"}, {src: "", title: "test 4"}]);

  useEffect(() => {
    //fetch from DB and set dig and phys art arrays
  });

  return (
    digArt.length || physArt.length ?
    <div className="page-center">
      <h3>Digital Art</h3>
      <div className="gallery">
        {digArt.map((pic, index) => (
          <GalleryItem source={pic.src} title={pic.title} key={index}/>
        ))}
      </div>

      <h3>Paintings and Sketches</h3>
      <div className="gallery">
        {physArt.map((pic) => (
          <GalleryItem source={pic.src} title={pic.title} />
        ))}
      </div>
    </div> :
    <div>Coming soon...</div>

  );
}

