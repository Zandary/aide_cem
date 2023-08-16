import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import data2 from "../../data2.json";

const Article = (props) => {
  const { id } = useParams();
  const [dataSource, setDataSource] = useState(data);

  useEffect(() => {
    if (props.platform === "nyvolako") {
      console.log("set platform to:    ", props.platform);
      setDataSource(data);
    } else if (props.platform === "sunupay") {
      console.log("set platform to:    ", props.platform);
      setDataSource(data2);
    } else {
      setDataSource(data);
    }
  }, [props.platform]);

  const article = dataSource.article.find((a) => a.numero === id);

  if (article) {
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
                    src={
                      props.platform === "sunupay"
                        ? `/sunopay image/${article.contenu[key].image}.png`
                        : `/images/${article.contenu[key].image.nom}.png`
                    }
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
  } else {
    return <>Nothing found!</>;
  }
};

export default Article;
