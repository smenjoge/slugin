import React from "react";
import { Input, FormBtn } from "../Form";

function SearchBox(props) {
    const {searchBook, handleInputChange, handleBtnSubmit} = props;
    return (
      <div className="container">
          <div className="row">
            <p>Book Search</p>
            <Input 
                value={searchBook}
                onChange={handleInputChange}
            />
                {/* Book
            </Input> */}
            <FormBtn
                onClick={handleBtnSubmit}
            >
                Search
            </FormBtn>
          </div>
      </div>
    );
  }


export default SearchBox;