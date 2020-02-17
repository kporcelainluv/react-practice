import React, { useEffect, useState } from "react";

export const Gify = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("scrubs");
  const [query, setQuery] = useState("scrubs");
  const [gifs, setGifs] = useState([]);

  console.log({ data, gifs, inputText, query });
  useEffect(() => {
    const fetchUsers = () => {
      const url = new URL("https://api.giphy.com/v1/gifs/search");
      const params = {
        api_key: "GRTDQB888zEjwAMOjmf1QeV8Fn51IulA",
        q: query,
        limit: 1,
        contentType: "application/json",
        dataType: "json"
      };
      Object.keys(params).forEach(key =>
        url.searchParams.append(key, params[key])
      );
      fetch(url)
        .then(response => response.json())
        .then(response => {
          const images = response.data;
          setData(allImages => [...images, ...allImages]);
        });
    };
    fetchUsers();
  }, [query]);
  return (
    <div className="container">
      <form
        style={{ margin: "auto" }}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label>
          <h2 className="title">Type in a word and get a gif</h2>
          <input
            className="input"
            type="text"
            value={inputText}
            onChange={e => {
              setInputText(e.target.value);
            }}
          />
        </label>
        <button
          className="button"
          onClick={() => {
            setQuery(inputText);
            setGifs([...gifs, { key: inputText }]);
          }}
          type="submit"
        >
          Enter
        </button>
      </form>

      <p className="subheading">Check it out!</p>

      {data.map(obj => {
        return (
          <div key={obj.id} style={{ margin: "auto" }}>
            <img
              src={obj.images.fixed_height.url}
              alt={obj.title}
              height={obj.images.original.height}
              width={obj.images.original.width}
            />
          </div>
        );
      })}
    </div>
  );
};
