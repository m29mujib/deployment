import { Link } from "react-router-dom"

function Navbar() {
   return (
      <div className="Navbar">
         <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky w-100">
            <div className="container">
               <a className="navbar-brand" href="#">Simple header</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/features">Features</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/pricing">Pricing</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/faqs">FaQs</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}
   export default Navbar
