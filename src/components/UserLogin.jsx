import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router";

function UserLogin() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
    setUser({ name: username });
  }

  return (
    <>
      <h2>Sign in to access your account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
            required
          ></input>
        </label>
        <label>
          Password
          <input
            name="password"
            type="text"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            required
          ></input>
        </label>
        <button>Login</button>
      </form>
    </>
  );
}

export default UserLogin;
