import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   console.log("dataSource   :  ", props.dataSource)
  //     setArticles(props.dataSource.article);
  //     console.log("articles   :  ", props.dataSource.article)

  // }, [props.dataSource]);

  // useEffect(() => {
  //   setArticles(props.dataSource.article);
  // }, [props.platform]);

  if (props.dataSource.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="list-group rounded">
 {Object.keys(props.dataSource).map((key) => (
        <Link
          key={props.dataSource[key].numero}
          to={`/articles/${props.platform}/${props.dataSource[key].numero}`}
        >
          <div className="list-group-item">
            {props.dataSource[key].numero} - {props.dataSource[key].titre}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;