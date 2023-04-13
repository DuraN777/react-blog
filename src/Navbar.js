import {Link} from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1 className="navbar__title">The React Blog</h1>
      <div className="navbar__links">
        <Link to={"/"} className="navbar__link">Home</Link>
        <Link to={"/"} className="navbar__link">New Blog</Link>
      </div>
    </nav>
   );
}

export default Navbar;