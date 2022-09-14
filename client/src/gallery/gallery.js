import { useState, useEffect } from "react";

export default function Gallery(props) {
  const [digArt, setDigArt] = useState([]);
  const [physArt, setPhysArt] = useState([]);

  useEffect(() => {
    //fetch from DB and set dig and phys art arrays
  });

  return (
    <div class="page-center">
      <h3>Digital Art</h3>
      <div class="gallery">
        {digArt.map((pic) => (
          <GalleryItem source={pic.src} title={pic.title} />
        ))}
      </div>

      <h3>Paintings and Sketches</h3>
      <div class="gallery">
        {physArt.map((pic) => (
          <GalleryItem source={pic.src} title={pic.title} />
        ))}
      </div>
    </div>
  );
}

function GalleryItem(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <img
        class="thumb"
        src={props.source}
        alt={props.title}
        onClick={() => setModalOpen(true)}
      />

      <h4>{props.title}</h4>
      {modalOpen && (
        <div class="pic-modal">
          <div id="close" onClick={() => setModalOpen(false)}>
            X
          </div>
          <img src={props.source} alt={props.title} />
        </div>
      )}
    </div>
  );
}
