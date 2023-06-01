import { useState, useEffect } from "react";
import GalleryItem from "./galleryItem";

export default function Gallery(props) {
  let [model, setModel] = useState("model-closed");
  let [focused, setFocused] = useState(0);
  let [filterTag, setFilterTag] = useState(false);
  let [ascending, setAscending] = useState(true);
  let [sortBy, setSortBy] = useState("");

  useEffect(() => {
    //ascending/descending order
    return !ascending ? props.updater(props.entries.toReversed()) : null;
  }, [ascending]);

  useEffect(() => {
    //filter out images without the chosen tag
    let filtered = props.entries.filter(entry => {
      return entry.tags.includes(filterTag)
    })
    props.updater(filtered)
    //multi tag select will be a future feature
  }, [filterTag]);

  useEffect(() => {
    //sort image array from props "props.entries" then update through prop setState "props.updater"
    let sorted;
    switch (sortBy) {
      case "name":
        sorted = props.entries.toSorted((current, next) => {
          return current.name > next.name;
        });
        break;
      case "date":
        sorted = props.entries.toSorted((current, next) => {
          return current.date > next.date;
        });
        break;
      default:
        break;
    }

    props.updater(sorted)
  }, [sortBy]);

  return props.entries && props.entries.length ? (
    <div id="gallery-shell">
      <select
          name="sort-by"
          id="select-sort"
          onChange={(evt) => setSortBy(evt.target.value)}
        >
          <option value="">-----------</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
      <button
        className="toggle"
        onClick={(evt) => {
          setAscending(!ascending);
        }}
      >
        Ascending/Descending
      </button>
      {props.tags && (
        <select name="tag-list" onChange={(evt) => setFilterTag(evt.target.value)}>
          {props.tags.map(tag => <option name={tag} value="tag">tag</option>)}
        </select>
      )}
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
