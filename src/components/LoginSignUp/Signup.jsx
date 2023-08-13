import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import { SignupForm } from "../../Axios/Signup";
import HelpIcon from "@mui/icons-material/Help";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const Signup = () => {
  const [visiblity, setVisibilty] = useState("password");
  const [cpassword, setCPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await SignupForm(username, email, password, cpassword, question, answer)
      .then((res) => {
        console.log({ res });
        toast.success("Register successful!");
        navigate("/login");
      })
      .catch((err) => {
        console.log({ err });
        if (password !== cpassword) {
          toast.error("Password doesn't match with confirm password");
        } else {
          toast.error("Internal server error, Try again later");
        }
      });
  };

  return (
    <div className="register-page">
      <div className="box">
        <form onSubmit={handleLogin}>
          <h1>Register Here</h1>
          <div className="inputs">
            <PersonIcon />
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username here..."
            />
          </div>
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
            Show/Hide Password
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
          <div className="inputs">
            <HelpIcon />
            <input
              type="text"
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Question..."
            />
          </div>
          <div className="inputs">
            <ArticleRoundedIcon />
            <input
              type="text"
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Answer..."
            />
          </div>
          <button type="submit">Signup!</button>
          <div className="other2">
            Dont have an Account! <Link to={"/login"}>Login</Link> here...
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
