import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import ResultList from "../components/ResultList";
import NoResult from "../components/NoResult";
import API from "../utils/API";

function Search() {
  let [resultList, setResultList] = useState([]);

  useEffect(() => {
      loadBooks()
  }, []);

  function loadBooks() {
    API.getSavedBooks()
      .then(res => {
        reformatAPIData(res.data)
        setResultList(resultList)
        }
      )
      .catch(err => console.log(err));
  };

  function reformatAPIData(data) {
    console.log(`Books from DB: `, data)
    if(data.length > 0) {
      resultList = data.map(book => {
        return {
          id: book._id,
          title: book.title,
          subtitle: book.subtitle,
          authors: book.authors,
          description: book.description,
          link: book.link,
          image: book.image
        } 
      })
    } else {
      resultList = undefined;
    }
  }

  function handleDeleteBook(id) {
    API.deleteBook(id)
      .then(res => {
        loadBooks()
        }
      )
      .catch(err => console.log(err));
  }

  return (
    <div className="container-fluid">
      <Jumbotron /> 
      {resultList ?
        <ResultList 
          resultList={resultList}
          handleBtnClick={handleDeleteBook}
          source="SavedPage"
        >
            Saved Books
        </ResultList>
        : 
        <NoResult>
          No Books Saved
        </NoResult>
      }
    </div>
  );
}

export default Search;