import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Searchbar from "../components/Searchbar/Searchbar";
import data from "../data.json";
import data2 from "../data2.json";

const Home = (props) => {
  const [dataSource, setDataSource] = useState(data);

  useEffect(() => {
    if (props.platform === "nyvolako") {
      setDataSource(data);
    } else if (props.platform === "sunupay") {
      setDataSource(data2);
    } else {
      setDataSource(data);
    }
  }, [props.platform]);

  console.log(props.platform, dataSource);
  return (
    <div>
      <Searchbar dataSource={dataSource} platform={props.platform} />
      <Menu platform={props.platform} dataSource={dataSource} />
    </div>
  );
};

export default Home;
