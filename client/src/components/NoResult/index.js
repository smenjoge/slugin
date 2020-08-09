import React from "react";

function NoResult(props) {
    return (
        <div className="container mt-3 text-danger">
            <h3>{props.children}</h3>
        </div>
    )
}

export default NoResult;