import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const Menu = () => {
  const [articles] = useState(data.article);

  return (
    <div className="list-group rounded">
      {articles.map((article) => (
        <Link key={article.numero} to={`/article/${article.numero}`}>
          <div className="list-group-item">
            {article.numero} - {article.titre}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
