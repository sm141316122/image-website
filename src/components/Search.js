import React from "react";

const Search = ({ searchImg, setInput }) => {
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" onChange={changeInput} type="text" />
      <button onClick={searchImg}>Search</button>
    </div>
  );
};

export default Search;
