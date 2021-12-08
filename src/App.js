//import "./App.css";
import React from "react";
import Painting from "./components/social-profile/Profile";
import user from "./components/social-profile/user.json";

const App = () => {
  return (
    <Painting
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export default App;
