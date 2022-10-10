import { useState } from "react";
import GalleryItem from "./galleryItem";

export default function Gallery(props) {
  let [modelOpen, setModelOpen] = useState(false);
  let [focused, setFocused] = useState(0);

  return props.entries.length ? (
    <div>
      <div className="gallery">
        {props.entries.map((pic, index) => (
          <GalleryItem
            source={pic.src}
            title={pic.title}
            key={index}
            setModal={setModelOpen}
          />
        ))}
      </div>
      <div className="modal">
        {focused - 1 >= 0 && (
          <button
            onClick={() => {
              setFocused(focused - 1);
            }}
          >
            Previous
          </button>
        )}
        <img
          src={props.entries[focused].src}
          alt={props.entries[focused].title}
        />
        <p>{props.entries[focused].blurb}</p>
        {props.entries[focused + 1] && (
          <button
            onClick={() => {
              setFocused(focused + 1);
            }}
          >
            Next
          </button>
        )}
        <button onClick={() => {setModelOpen(false)}}>X</button>
      </div>
    </div>
  ) : (
    <div>Images Coming Soon... Maybe...</div>
  );
}
