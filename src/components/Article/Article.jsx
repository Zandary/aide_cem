import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import nyvolako from "../../data.json";
import sunupay from "../../data2.json";

const Article = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [article, setArticle] = useState();

  useEffect(() => {
    if (props.platform === "nyvolako") {
      setData(nyvolako);
    } else {
      setData(sunupay);
    }

    if (data.article) {
      console.log(data !== {});
      console.log("data  =", data);
      setArticle(data.article.find((a) => a.numero === id));
      console.log("article  =", article);
    }
  }, [data, id, props.platform, article]);

  // console.log("out of useEffect   :", article.titre);

  return (
    <></>
    // <div>
    //   {article ? (
    //     <>
    //       <h4>{article.titre}</h4>
    //       <div>
    //         {Object.keys(article.contenu).map((key) => (
    //           <div key={key}>
    //             {article.contenu[key].sousTitre &&
    //             article.contenu[key].sousTitre !== "" ? (
    //               <h5>
    //                 {article.contenu[key].numero +
    //                   "- " +
    //                   article.contenu[key].sousTitre}
    //               </h5>
    //             ) : (
    //               ""
    //             )}

    //             {/* Vérifie si une image existe */}
    //             {article.contenu[key].image !== "" ? (
    //               <div>
    //                 <img
    //                   src={`/images/${article.contenu[key].image}.png`}
    //                   alt={key}
    //                 />
    //               </div>
    //             ) : (
    //               ""
    //             )}
    //             <p>{article.contenu[key].texte}</p>
    //             <br />
    //           </div>
    //         ))}
    //       </div>
    //     </>
    //   ) : (
    //     "Nothing to display"
    //   )}
    // </div>
  );
};

export default Article;
