import React from "react";
import BookCard from "../BookCard";

function ResultList(props) {
    const {resultList} = props;
    return (
        <div className="list-overflow-container">
          <ul className="list-group">
            {resultList.map(book => 
                <li className="list-group-item">
                  <BookCard 
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                    description={book.volumeInfo.description}
                  />
              </li>
            )
            }
          </ul>
        </div>
    );
}

export default ResultList;