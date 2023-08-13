import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="search">
        <Link to={"/tag/search"}>
          <IconButton>
            <SearchRoundedIcon />
          </IconButton>
        </Link>
      </div>
      <div className="others">All Rights reserved &copy;</div>
    </div>
  );
};

export default Footer;