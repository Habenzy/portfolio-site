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
      <div className={model}>
        
        <img
          src={props.entries[focused].url}
          alt={props.entries[focused].title}
        />
        <p>{props.entries[focused].blurb}</p>
        <div className="nav-controls">
        {focused - 1 >= 0 && (
          <button
            onClick={() => {
              setFocused(focused - 1);
            }}
          >
            Previous
          </button>
        )}
        {props.entries[focused + 1] && (
          <button
            onClick={() => {
              setFocused(focused + 1);
            }}
          >
            Next
          </button>
        )}
        <button onClick={() => {setModel('model-closed')}}>X</button>
        </div>
      </div>
    </div>
  ) : (
    <div>Images Coming Soon... Maybe...</div>
  );
}
