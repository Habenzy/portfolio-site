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
            setModal={setModel}
          />
  })}
      </div>
      <div className={model}>
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
          src={props.entries[focused].url}
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
        <button onClick={() => {setModel('model-closed')}}>X</button>
      </div>
    </div>
  ) : (
    <div>Images Coming Soon... Maybe...</div>
  );
}
