import { Link } from "react-router-dom"

export default function Header(props) {
  return(
    <header>
      <div id="title-container">
        <h1 className="neon"><span className="flicker">B</span>ob Stauss</h1>
        <div id="h-subtitle" >
          <h4 className="neon">Programmer</h4>
          <div class="dot neon"></div>
          <h4 className="neon">Artist</h4>
          <div class="dot neon"></div>
          <h4 className="neon">Pretty Cool Dude</h4>
        </div>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About me</Link>
        <Link to="projects">Projects</Link>
        <Link to="gallery">Art</Link>
        <Link to="nerdery">Nerdy Things</Link>
      </nav>
    </header>
  )
}