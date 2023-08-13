import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { loginForm } from "../../Axios/login";
import { IconButton } from "@mui/material";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const [visiblity, setVisibilty] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginForm(email, password, cpassword)
      .then((res) => {
        toast.success("Login successful");
        navigate("/");
      })
      .catch((err) => {
        if (password !== cpassword) {
          toast.error("Password doesn't match with confirm password");
        } else {
          toast.error("Invalid email or password");
        }
      });
  };

  return (
    <div className="login-page">
      <div className="box">
        <form onSubmit={handleLogin}>
          <h1>Login Here</h1>
          <div className="inputs">
            <AlternateEmailIcon />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email here..."
            />
          </div>
          <div className="inputs">
            <LockIcon />
            <input
              type={visiblity}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="inputs">
            <LockIcon />
            <input
              type={visiblity}
              onChange={(e) => setCPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div className="other">
            <Link to="forget-password">Forget Password?</Link>
            <IconButton
              onClick={() =>
                visiblity === "password"
                  ? setVisibilty("text")
                  : setVisibilty("password")
              }
              className="visiblity"
            >
              {visiblity === "password" ? (
                <VisibilityIcon style={{ color: "white" }} />
              ) : (
                <VisibilityOffIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </div>
          <button type="submit">Login!</button>
          <div className="other2">
            Dont have an Account! <Link to={"/sign-up"}>Signup</Link> here...
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
