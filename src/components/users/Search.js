import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter a value", "red");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
      <div className="flex">
        <form onSubmit={onSubmit} className="flex items-center flex-1">
          <div className="w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-white focus-within:text-gray-400">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                id="search"
                name="text"
                className="block w-full border-transparent py-3 pl-10 pr-3 text-base shadow leading-5 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:border-white focus:text-gray-900 focus:placeholder-gray-400 rounded-md"
                placeholder="Search"
                type="text"
                value={text}
                onChange={onChange}
                autoComplete="off"
              />
            </div>
          </div>
        </form>
        {githubContext.users.length > 0 && (
          <button
            onClick={githubContext.clearUsers}
            className="flex items-center ml-4 hover:opacity-60 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-gray-600">Clear</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
