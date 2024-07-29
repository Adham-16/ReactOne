import { Link } from "react-router-dom";

export function Navbar() {
    return <>
  <nav id="navbar" className="navbar z-3 position-fixed navbar-expand-lg bg-body-tertiary bg-2C3E50 py-4">
  <div className="container">
    <Link className="navbar-brand text-white fs-2" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
        </li>        
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}




//   function myFunction() {
//   // let navBar =document.getElementById("navbar");
//   // navBar.classList.add("py-2")
//   // navBar.classList.remove("py-4")
// }