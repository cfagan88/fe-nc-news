import { Link } from "react-router";

function Header() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        <Link to="/">
          <p>All Articles</p>
        </Link>
        <p>Topics</p>
      </nav>
    </>
  );
}

export default Header;
