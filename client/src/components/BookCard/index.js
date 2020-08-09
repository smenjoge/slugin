import React from "react";

function BookCard(props) {
    const {title, image, description} = props;
    return (
        <div className="card mb-3 border-0">
            <div className="row">
                <div className="col-md-2 my-auto">
                    <img src={image} className="card-img" alt={title}></img>
                </div>
                <div className="col-md-10">
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;