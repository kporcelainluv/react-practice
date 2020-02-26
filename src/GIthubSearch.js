import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
import "./css/loader.css";
import { Error } from "./Error";

export const GithubSearch = () => {
  const [state, setState] = useState({
    input: "preact",
    query: undefined,
    list: [],
    isLoading: false,
    error: false
  });

  const updateInput = input => {
    return setState(s => {
      return { ...s, input: input };
    });
  };

  const updateQuery = input => {
    return setState(s => {
      return { ...s, query: input };
    });
  };

  const getReposList = state => {
    const url = `https://api.github.com/search/repositories?q=${state.query}&sort=stars&order=desc`;
    setState(s => ({ ...s, isLoading: true }));
    return fetch(url).then(res => res.json());
  };

  useEffect(() => {
    if (state.query) {
      getReposList(state)
        .then(repos =>
          setState(s => ({ ...s, list: repos.items, isLoading: false }))
        )
        .catch(e => setState(s => ({ ...s, error: true, isLoading: false })));
    }
  }, [state.query]);

  return (
    <div className="container">
      <form
        className="container--centered"
        onSubmit={e => {
          e.preventDefault();
          updateQuery(state.input);
        }}
      >
        <h2 className="title">Type in repo name and get a list of repos</h2>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder={"preact"}
            onChange={e => {
              updateInput(e.target.value);
            }}
          />
          <button className="black-button" onClick={() => {}} type="submit">
            Enter
          </button>
        </div>
        {state.error && <Error />}
        {state.isLoading && <Loader size={"small"} />}
        {state.list.map((elm, index) => {
          return (
            <a key={elm.id} className="results__container" href={elm.html_url}>
              <p className="results__paragraph">{index}.</p>
              <p className="results__paragraph ">{elm.owner.login}:</p>
              <p className="results__paragraph results__paragraph--underlined">
                {elm.name}
              </p>
            </a>
          );
        })}
      </form>
    </div>
  );
};
