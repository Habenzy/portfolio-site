import { useState } from "react";

export default function GalleryItem(props) {
  return (
    <div class="thumb-container">
      <img
        class="thumb"
        src={props.source}
        alt={props.title}
        onClick={() => props.setModal(true)}
      />

      <h4>{props.title}</h4>
    </div>
  );
}