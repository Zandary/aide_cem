import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(props.dataSource.article);
  }, [props.dataSource]);

  useEffect(() => {
    setArticles(props.dataSource.article);
  }, [props.platform]);

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