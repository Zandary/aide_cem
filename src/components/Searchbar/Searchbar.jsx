import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Searchbar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults([]);
      return;
    }

    const results = [];

    for (let i = 0; i < props.dataSource.article.length; i++) {
      for (let j = 0; j < props.dataSource.article[i].contenu.length; j++) {
        if (props.dataSource.article[i].contenu[j].texte) {
          for (
            let k = 0;
            k < props.dataSource.article[i].contenu[j].texte.length;
            k++
          ) {
            const element = props.dataSource.article[i].contenu[j].texte[k];

            if (
              element.toLowerCase().includes(searchQuery.toLowerCase()) &&
              searchQuery !== ""
            ) {
              results.push({
                numero: props.dataSource.article[i].numero,
                title: props.dataSource.article[i].titre,
                content: props.dataSource.article[i].contenu[j].texte[k],
                precision: element.length,
              });
            }
          }
        }
      }
    }

    results.sort((a, b) => b.precision - a.precision);
    setSearchResults(results);
  }, [searchQuery, props.dataSource]);

  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          className="form-control searchbar"
          placeholder="Enter a keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="list-group rounded">
        {searchResults.map((result, index) => (
          <Link
            key={index}
            to={`/articles/${props.platform}/${result.numero}/`}
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
