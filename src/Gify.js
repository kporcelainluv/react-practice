import React, { useEffect, useState } from "react";

const Form = ({ state, updateQuery, updateInput }) => {
  return (
    <form
      className="container--centered"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <h2 className="title">Type in a word and get a gif</h2>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder={"woohoo"}
          value={state.input}
          onChange={e => {
            updateInput(e.target.value);
          }}
        />
        <button
          className="black-button"
          onClick={() => {
            updateQuery(state.input);
          }}
          type="submit"
        >
          Enter
        </button>
      </div>
    </form>
  );
};

const getGifs = query => {
  const url = new URL("https://api.giphy.com/v1/gifs/search");

  const params = {
    api_key: "GRTDQB888zEjwAMOjmf1QeV8Fn51IulA",
    q: query,
    limit: 1,
    contentType: "application/json",
    dataType: "json"
  };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return fetch(url)
    .then(response => response.json())
    .then(response => response.data);
};

export const Gify = () => {
  const [state, setState] = useState({
    query: "woohoo",
    gifs: [],
    input: ""
  });

  const updateQuery = input => {
    return setState(s => {
      return { ...s, query: input };
    });
  };

  const updateInput = input => {
    return setState(s => {
      return { ...s, input: input };
    });
  };

  useEffect(() => {
    getGifs(state.query).then(gif => {
      setState(s => {
        return { ...s, gifs: [...gif, ...s.gifs] };
      });
    });
  }, [state.query]);

  return (
    <div className="container">
      <Form state={state} updateInput={updateInput} updateQuery={updateQuery} />
      {state.gifs.map(obj => {
        return (
          <div key={obj.id} className="container--centered">
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
