import React from "react";

function BookCard(props) {
    const {title, authors, image, link, description} = props;
    return (
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
            <div className="row">
                <div className="col-md-4">
                <img src={image} className="card-img" alt={title}></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-text">{authors}</h6>
                    <p className="card-text">{description}</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;