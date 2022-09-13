import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import "./Header.css";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton className="header-icon">
        <PersonIcon fontSize="large" className="header-person" />
      </IconButton>
      <img
        className="header-logo"
        src="https://drive.google.com/uc?export=download&id=14STlLFSgZlD72HvkfPhvrUgvJ0ykG3Mk"
        alt="tinder-logo"
      />
      <IconButton className="header-icon">
        <ForumIcon className="header-forumIcon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
