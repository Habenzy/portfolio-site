import { Link } from "react-router-dom";
import bgImg from '../bg_images/purp_cyan_fans.jpg';

export default function Header(props) {
  return (
    <header>
      <div id="title-container">
        <div className="header-bg-img">
          <img src={bgImg} alt="faaaaaansss" />
        <h1 className="neon">
          Bob Stauss
        </h1>
        </div>
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
          <Link to="about">About Me</Link>
          <Link to="projects">Projects</Link>
          <Link to="nerdery">Nerdy Things</Link>
        </div>
      </nav>
    </header>
  );
}
