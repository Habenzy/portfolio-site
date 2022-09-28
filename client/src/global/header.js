import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <div id="title-container">
        <h1 className="neon">
          <span className="flicker">B</span>ob Stauss
        </h1>
        <div id="h-subtitle">
          <h4 className="neon">Programmer</h4>
          <div class="dot"></div>
          <h4 className="neon">Artist</h4>
          <div class="dot"></div>
          <h4 className="neon">Pretty Cool Dude</h4>
        </div>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <div id="page-nav">
          <Link to="gallery">Art Gallery</Link>
          <Link to="projects">Projects</Link>
          <Link to="nerdery">Nerdy Things</Link>
        </div>
      </nav>
    </header>
  );
}
