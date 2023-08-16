import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import KeyIcon from "@mui/icons-material/Key";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StyleIcon from "@mui/icons-material/Style";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [myMenuDisplay, setMyMenuDisplay] = useState("none");
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">
          <IconButton>
            <HomeRoundedIcon className="icon" />
          </IconButton>
        </Link>
        <Link to="/ask-question">
          <IconButton>
            <QuestionMarkRoundedIcon className="icon" />
          </IconButton>
        </Link>
        <Link to="/users">
          <IconButton>
            <PeopleAltRoundedIcon className="icon" />
          </IconButton>
        </Link>
        <Link to="/tags">
          <IconButton>
            <StyleIcon className="icon" />
          </IconButton>
        </Link>
      </div>
      <div className="login">
        <Link to="/login">
          <IconButton>
            <LoginRoundedIcon className="icon" />
          </IconButton>
        </Link>
        <Link to="/sign-up">
          <IconButton>
            <KeyIcon className="icon" />
          </IconButton>
        </Link>
        <div className="menu">
          <IconButton
            onClick={() =>
              myMenuDisplay === "none"
                ? setMyMenuDisplay("block")
                : setMyMenuDisplay("none")
            }
          >
            {myMenuDisplay === "none" ? (
              <MenuRoundedIcon className="icon" />
            ) : (
              <CloseRoundedIcon className="icon" />
            )}
          </IconButton>
          <div style={{ display: myMenuDisplay }} className="options">
            <Link to={"/profile"}>View Profile</Link>
            <Link to={"/my-questions"}>Your Questions</Link>
            <Link to={"/my-answers"}>Your Answers</Link>
            <Link to={"/settings"}>Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
