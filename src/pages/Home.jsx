import React from "react";
import Menu from "./Menu";
import Searchbar from "../components/Searchbar/Searchbar";

const Home = (props) => {
  console.log(props.platform);
  return (
    <div>
      <Searchbar />
      <Menu platform={props.platform} />
    </div>
  );
};

export default Home;
