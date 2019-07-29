import React, { useEffect, useState } from "react";

export const Gify = () => {
  const [data, setData] = useState([]);

  const [inputText, setInputText] = useState("scrubs");
  const [query, setQuery] = useState("scrubs");

  useEffect(() => {
    const fetchUsers = () => {
      const url = new URL("https://api.giphy.com/v1/gifs/search");
      const params = {
        api_key: "GRTDQB888zEjwAMOjmf1QeV8Fn51IulA",
        q: query,
        limit: 10,
        contentType: "application/json",
        dataType: "json"
      };
      Object.keys(params).forEach(key =>
        url.searchParams.append(key, params[key])
      );
      fetch(url)
        .then(response => response.json())
        .then(response => setData(response.data));
    };
    fetchUsers();
  }, [query]);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label>
          <h1>Just type the word in!</h1>
          <input
            type="text"
            value={inputText}
            onChange={e => {
              setInputText(e.target.value);
            }}
          />
        </label>
        <button
          onClick={() => {
            console.log("before", query);
            setQuery(inputText);
            console.log("after", query);
          }}
          type="submit"
        >
          Enter
        </button>
      </form>

      <h1>Check it out!</h1>

      {data.map(obj => {
        return (
          <div key={obj.id}>
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
