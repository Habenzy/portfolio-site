import Link from "react-router"

export default function Header(props) {
  return(
    <header>
      <div id="title-container">
        <h1>Bob Stauss</h1>
        <div id="h-subtitle">
          <h4>Programmer</h4>
          <div class="dot"></div>
          <h4>Artist</h4>
          <div class="dot"></div>
          <h4>Pretty Cool Dude</h4>
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