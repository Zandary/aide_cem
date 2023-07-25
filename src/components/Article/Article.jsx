import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";

const Article = () => {
  const { id } = useParams();

  const article = data.article.find((a) => a.numero === id);

  return (
    <div>
      <h4>{article.titre}</h4>
      <div>
        {Object.keys(article.contenu).map((key) => (
          <div key={key}>
            {article.contenu[key].sousTitre &&
            article.contenu[key].sousTitre !== "" ? (
              <h5>
                {article.contenu[key].numero +
                  "- " +
                  article.contenu[key].sousTitre}
              </h5>
            ) : (
              ""
            )}

            {/* Vérifie si une image existe */}
            {article.contenu[key].image !== "" ? (
              <div>
                <img
                  src={`/images/${article.contenu[key].image}.png`}
                  alt={key}
                />
              </div>
            ) : (
              ""
            )}
            <p>{article.contenu[key].texte}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
