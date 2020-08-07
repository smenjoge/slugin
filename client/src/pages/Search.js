import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import ResultList from "../components/ResultList";
import API from "../utils/API";

function Search() {
  const [searchBook, setSearchBook] = useState("");
  const [resultList, setResultList] = useState([]);

  function handleInputChange (event) {
    let bookInput = event.target.value;
    setSearchBook(bookInput);
  }

  function handleBtnSubmit (event) {
    event.preventDefault();
    API.getBooks(searchBook)
      .then(res => 
        setResultList(res.data.items)
      )
      .catch(err => console.log(err));
  }

  return (
    <div className="container-fluid">
      <Jumbotron /> 
      <SearchBox
        searchBook={searchBook}
        handleInputChange={handleInputChange}
        handleBtnSubmit={handleBtnSubmit}
      >
      </SearchBox> 
      <ResultList 
        resultList={resultList}
       />
    </div>
  );
}

export default Search;