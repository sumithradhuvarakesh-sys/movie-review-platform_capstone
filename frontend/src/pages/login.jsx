import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <h1>CINE SCOPE</h1>
      <p>Discover Movies & Share Reviews</p>

      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />

      <button onClick={() => navigate("/home")}>
        Login
      </button>
    </div>
  );
}

export default Login;