import { useState } from "react";

export default function GalleryItem(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div class="thumb-container">
      <img
        class="thumb"
        src={props.source}
        alt={props.title}
        onClick={() => setModalOpen(true)}
      />

      <h4>{props.title}</h4>
      {modalOpen && (
        <div class="pic-modal">
          <div class="close" onClick={() => setModalOpen(false)}>
            X
          </div>
          <img src={props.source} alt={props.title} />
        </div>
      )}
    </div>
  );
}