import React from "react";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div className="users">
      <Profile
        user="Ragnar Lothbrok"
        bio="The main man himself. Explorer extraordinaire. So amazing they got a 6 season show out of me haha"
        profilePic="https://images05.military.com/sites/default/files/styles/full/public/2020-03/vikings-ragnar1200.jpg"
      />
    </div>
  );
};

export default Profiles;
