import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import ResultList from "../components/ResultList";
import NoResult from "../components/NoResult";
import API from "../utils/API";

function Search() {
  const [searchBook, setSearchBook] = useState("");
  let [resultList, setResultList] = useState([]);

  function handleInputChange (event) {
    let bookInput = "";
    if (event.target.value.length > 0 && event.target.value !== " ") {
      bookInput = event.target.value;
    } else {
      bookInput = event.target.value.trim();
    }
    setSearchBook(bookInput);
  }

  function handleBtnSubmit (event) {
    event.preventDefault();
    API.findBooks(searchBook)
      .then(res => {
        reformatAPIData(res.data)
        setResultList(resultList)
        }
      )
      .catch(err => console.log(err));
  }

  function reformatAPIData(data) {
    if(data) {
      resultList = data.map(book => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks.smallThumbnail
        } 
      })
    } else {
      resultList = undefined;
    }
  }

  function handleSaveBook(bookData) {
    API.saveBook(bookData)
      .then(res => {
        setResultList(resultList)
        }
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
      {resultList ?
        <ResultList 
          resultList={resultList}
          handleBtnClick={handleSaveBook}
          source="SearchPage"
        >
          Results
        </ResultList>  
        : 
        <NoResult>
          No Books Found
        </NoResult>
      }
    </div>
  );
}

export default Search;