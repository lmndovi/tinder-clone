import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Adriana"
        message="Hey! How are you?"
        timestamps="35 mintes ago"
        profilePic="https://media1.popsugar-assets.com/files/thumbor/mtjPJWDy4_QXNt9pFqvSpJhv-G8/0x219:3651x3870/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/29/774/n/1922398/d368ebcb5ed147ed133494.41915736_/i/Adriana-Lima.jpg"
      />
      <Chat
        name="Dua"
        message="What's up?"
        timestamps="55 mintes ago"
        profilePic="https://media.glamourmagazine.co.uk/photos/63189f2344527f0650926ba0/1:1/w_354%2Cc_limit/DUA%2520LIPA%2520INTERVIEW%2520070922%2520default-sq-GettyImages-1342881883.jpg"
      />
      <Chat
        name="Gal"
        message="Hey! Busy this weekend?"
        timestamps="3 days ago"
        profilePic="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2020_42/3419312/201012-gal-gadot-mc-1221.JPG"
      />
      <Chat
        name="Bella"
        message="Great, let's grab coffee!"
        timestamps="1 week ago"
        profilePic="https://media.vanityfair.com/photos/61f81ae4d25c05ade4095a79/1:1/w_2761,h_2761,c_limit/1200014422"
      />
    </div>
  );
};

export default Chats;
