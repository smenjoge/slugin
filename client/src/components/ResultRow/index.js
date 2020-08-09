import React from "react";

function ResultRow(props) {
    const {id, title, subtitle, authors, description, link, image } = props.book;
    const { handleBtnClick, source } = props;

    function saveOrDelBook(page) {
        if (page === "SearchPage") {
            let bookData = {
                bookId: id,
                title: title,
                subtitle: subtitle,
                authors: authors,
                description: description,
                image: image,
                link: link
            }
            handleBtnClick(bookData);
        } else if (page === "SavedPage") {
            handleBtnClick(id);
        }
    }

    return (
        <div className="row">
            <div className="col-sm-10">
                <h5>{title}</h5>
                <p>{subtitle}</p>
                <p>Written By: {authors.toString()}</p>
            </div>
            <div className="col-sm-2">
                <a 
                    href={link} 
                    type="button" 
                    className="btn btn-secondary btn-sm m-1"
                    target="_blank" rel="noopener noreferrer"
                >
                    View
                </a>
                <a                     
                    type="button" 
                    className="btn btn-secondary btn-sm m-1"
                    onClick={() => saveOrDelBook(source)}
                >
                    {props.children}
                </a>
            </div>
        </div>
    )
}

export default ResultRow;