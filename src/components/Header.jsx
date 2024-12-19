import { Link } from "react-router";
import loginIcon from "../assets/loginIcon.png"

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        <Link to="/articles">
          <p>Home</p>
        </Link>
        <Link to="/topics">
          <p>Topics</p>
        </Link>
        <Link to="/user-login" className="login">
          <img className="login-icon" src={loginIcon} alt="login icon showing a silhouette of a user"/>
          <p>Login</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
