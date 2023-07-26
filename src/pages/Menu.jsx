import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import sunupay from "../data2.json";

const Menu = (props) => {
  const [articles, setArticles] = useState(data.article);

  useEffect(() => {
    if (props.platform === "nyvolako") {
      console.log("on nyvolako");
    } else {
      console.log("on sunupay");
      setArticles(sunupay.article);
    }
    console.log("1", articles);
  }, [articles, props.platform]);

  if (props.platform === "nyvolako") {
    console.log(articles);
  } else {
    console.log(articles);
  }

  return (
    <div className="list-group rounded">
      {articles.map((article) => (
        <Link
          key={article.numero}
          to={`/articles/${props.platform}/${article.numero}`}
        >
          <div className="list-group-item">
            {article.numero} - {article.titre}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
