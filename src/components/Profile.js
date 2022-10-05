import { Avatar, Button, Card } from "@mui/material";
import React from "react";
import "./Profile.css";

const Profile = ({ user, bio, profilePic }) => {
  return (
    <div className="profile">
      <Card className="profile__card">
        <Avatar
          className="profile__image"
          alt={user}
          src={profilePic}
          sx={{ width: 200, height: 200 }}
        />
        <div className="profile__details">
          <h1>{user}</h1>
          <p>{bio}</p>
        </div>

        <div className="profile__logout">
          <Button>Log Out</Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
