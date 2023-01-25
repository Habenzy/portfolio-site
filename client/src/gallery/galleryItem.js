import { useState } from "react";

export default function GalleryItem(props) {
  return (
    <div class="thumb-container">
      <h4>{props.title}</h4>
      <img
        class="thumb"
        src={props.source}
        alt={props.title}
        onClick={() => props.setModal("model-open")}
      />
    </div>
  );
}