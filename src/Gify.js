import React, { useEffect, useState } from "react";
import nanoid from "nanoid";

export const Gify = () => {
  const [state, setState] = useState({
    query: "scrubs",
    gifs: [],
    input: ""
  });

  useEffect(() => {
    (() => {
      const url = new URL("https://api.giphy.com/v1/gifs/search");

      const params = {
        api_key: "GRTDQB888zEjwAMOjmf1QeV8Fn51IulA",
        q: state.query,
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
          setState(s => {
            return { ...s, gifs: [...images, ...s.gifs] };
          });
        });
    })();
  }, [state.query]);

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
            value={state.input}
            onChange={e => {
              const currentInput = e.target.value;
              setState(s => {
                return { ...s, input: currentInput };
              });
            }}
          />
        </label>
        <button
          className="button"
          onClick={() => {
            setState(s => {
              return { ...s, query: state.input };
            });
          }}
          type="submit"
        >
          Enter
        </button>
      </form>

      {state.gifs.map(obj => {
        return (
          <div key={nanoid()} style={{ margin: "auto" }}>
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
