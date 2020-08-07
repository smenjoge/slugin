import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1">Book</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}