import React, { useState, useEffect } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults([]);
      return;
    }

    const results = [];

    for (let i = 0; i < data.article.length; i++) {
      for (let j = 0; j < data.article[i].contenu.length; j++) {
        if (data.article[i].contenu[j].texte) {
          for (let k = 0; k < data.article[i].contenu[j].texte.length; k++) {
            const element = data.article[i].contenu[j].texte[k];

            if (
              element.toLowerCase().includes(searchQuery.toLowerCase()) &&
              searchQuery !== ""
            ) {
              results.push({
                numero: data.article[i].numero,
                title: data.article[i].titre,
                content: data.article[i].contenu[j].texte[k],
                precision: element.length,
              });
            }
          }
        }
      }
    }

    results.sort((a, b) => b.precision - a.precision);
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          className="form-control searchbar"
          placeholder="Entrez un mot clé..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="list-group rounded">
        {searchResults.map((result, index) => (
          <Link
            key={index}
            to={`/articles/${result.numero}`}
            className="list-group-item"
          >
            <p>
              <b>{result.title}</b>
            </p>
            <p>
              {result.content.length > 50
                ? result.content.substring(0, 50) + "..."
                : result.content}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
