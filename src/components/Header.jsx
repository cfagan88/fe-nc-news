import { Link } from "react-router";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        <Link to="/">
          <p>All Articles</p>
        </Link>
        <p>Topics</p>
        <Link to="/user-login">
          <button>Login</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
