import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Searchbar from "../components/Searchbar/Searchbar";
import axios from "axios";

const Home = (props) => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (props.platform === "nyvolako") {
      axios
        .get("https://aide-cem-server.onrender.com/nyvolako")
        .then((response) => {
          setDataSource(response.data);
          console.log(dataSource[0], typeof response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("https://aide-cem-server.onrender.com/sunupay")
        .then((response) => {
          setDataSource(response.data);
          console.log(dataSource[0], typeof response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  if (dataSource.length === 0) {
    return <div><div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div></div>;
  }

  return (
    <div>
      <Searchbar platform={props.platform} dataSource={dataSource} />
      <Menu platform={props.platform} dataSource={dataSource} />
    </div>
  );
};

export default Home;
