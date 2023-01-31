import { useState } from "react";
import GalleryItem from "./galleryItem";

export default function Gallery(props) {
  let [model, setModel] = useState("model-closed");
  let [focused, setFocused] = useState(0);

  return props.entries.length ? (
    <div id="gallery-container">
      <div className="gallery">
        {props.entries.map((pic, index) => {
          return <GalleryItem
            source={pic.url}
            title={pic.title}
            key={index}
            galleryPos={index}
            setModal={setModel}
            setFocus={setFocused}
          />
  })}
      </div>
      <div className={`model ${model}`} onClick={() => {setModel('model-closed')}}>
        
        <img
          src={props.entries[focused].url}
          alt={props.entries[focused].title}
        />
        <p>{props.entries[focused].blurb}</p>
        <div className="nav-controls">
        {focused - 1 >= 0 && (
          <button
          className="nav-button previous-button"
            onClick={(evt) => {
              evt.stopPropagation()
              setFocused(focused - 1);
            }}
          >
            Previous
          </button>
        )}
        {props.entries[focused + 1] && (
          <button
          className="nav-button next-button"
            onClick={(evt) => {
              evt.stopPropagation()
              setFocused(focused + 1);
            }}
          >
            Next
          </button>
        )}
        </div>
      </div>
    </div>
  ) : (
    <div>Images Coming Soon... Maybe...</div>
  );
}
