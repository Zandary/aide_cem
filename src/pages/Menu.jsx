import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const Menu = () => {
  const [articles] = useState(data.article);

  return (
    <div className="list-group rounded">
      {articles.map((article) => (
        <Link
          className="list-group-item"
          key={article.numero}
          to={`/articles/${article.numero}`}
        >
          {article.numero} - {article.titre}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
