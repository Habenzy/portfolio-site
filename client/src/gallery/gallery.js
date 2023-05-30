import { useState, useEffect } from "react";
import GalleryItem from "./galleryItem";

export default function Gallery(props) {
  let [model, setModel] = useState("model-closed");
  let [focused, setFocused] = useState(0);
  let [filterTag, setFilterTag] = useState(false);
  let [ascending, setAscending] = useState(true);
  let [sortBy, setSortBy] = useState()

  useEffect(() => {
    //ascending/descending order

  }, [ascending])

  useEffect(() => {
    //filter out images without the chosen tag

    //multi tag select will be a future feature
  }, [filterTag])

  useEffect(() => {
    //sort image array from props "props.entries" then update through prop setState "props.updater"
  }, [sortBy])

  return props.entries.length ? (
    <div id="gallery-shell">
      <button className="toggle" onClick={(evt) => {
        setAscending(!ascending)
      }}>Ascending/Descending</button>
      {props.tags ? }
      <div id="gallery-container">
        <div className="gallery">
          {props.entries.map((pic, index) => {
            return (
              <GalleryItem
                source={pic.url}
                title={pic.title}
                key={index}
                galleryPos={index}
                setModal={setModel}
                setFocus={setFocused}
              />
            );
          })}
        </div>
        <div
          className={`model ${model}`}
          onClick={() => {
            setModel("model-closed");
          }}
        >
          <img
            src={props.entries[focused].url}
            alt={props.entries[focused].title}
          />
          <p>{props.entries[focused].blurb}</p>
          <div className="nav-controls">
            {focused - 1 >= 0 ? (
              <button
                className="nav-button previous-button"
                onClick={(evt) => {
                  evt.stopPropagation();
                  setFocused(focused - 1);
                }}
              >
                Previous
              </button>
            ) : (
              <button className="nav-button no-nav">X</button>
            )}
            {props.entries[focused + 1] ? (
              <button
                className="nav-button next-button"
                onClick={(evt) => {
                  evt.stopPropagation();
                  setFocused(focused + 1);
                }}
              >
                Next
              </button>
            ) : (
              <button className="nav-button no-nav">X</button>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Images Coming Soon... Maybe...</div>
  );
}
