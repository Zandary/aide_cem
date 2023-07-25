import React, { useState, useEffect } from "react";
import data from "../../data.json";

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
            element.toLowerCase().includes(searchQuery) &&
            searchQuery !== ""
          ) {
            results.push({
              title: data.article[i].titre,
              content: data.article[i].contenu[j].texte[k],
              precision: element.length
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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchResults.map((result, index) => (
        <div key={index} className="list-group rounded">
          <div className="list-group-item">
            <h6>{result.title}</h6>
            <p>
              {result.content.length > 50
                ? result.content.substring(0, 50) + "..."
                : result.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Searchbar;
