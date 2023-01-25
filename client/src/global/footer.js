import { Link } from "react-router-dom"

export default function Footer(props) {
  return(
    <footer id="footer">
      <Link to="/admin">Log In</Link>
      <div id="foot-contact"></div>
    </footer>
  )
}