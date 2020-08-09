import React from "react";
import ResultRow from "../ResultRow";
import BookCard from "../BookCard";

function ResultList(props) {
    const {resultList, handleBtnClick, source} = props;
    return (
        <div className={resultList.length > 0 ? "container border border-dark my-4" : "container border border-dark mt-4 invisible"}>
          <h3>{props.children}</h3>
          <ul className="list-group mt-2">
            {resultList.map(book => 
                <li className="list-group-item border border-dark my-1" key={book.id}>
                  <div className="container">
                    <ResultRow 
                      book={book}
                      handleBtnClick={handleBtnClick}
                      source={source}
                    >
                      {source === "SearchPage" ? "Save" : "Delete"}
                    </ResultRow>
                    <BookCard 
                      title={book.title}
                      image={book.image}
                      description={book.description}
                    />
                  </div>
              </li>
            )
            }
          </ul>
        </div>
    );
}

export default ResultList;