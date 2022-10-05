import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import "./Header.css";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/profile">
        <IconButton className="header-icon">
          <PersonIcon fontSize="large" className="header-person" />
        </IconButton>
      </Link>
      <Link to="/">
        <img
          className="header-logo"
          src="https://drive.google.com/uc?export=download&id=14STlLFSgZlD72HvkfPhvrUgvJ0ykG3Mk"
          alt="tinder-logo"
        />
      </Link>
      <Link to="/chats">
        <IconButton className="header-icon">
          <ForumIcon className="header-forumIcon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
