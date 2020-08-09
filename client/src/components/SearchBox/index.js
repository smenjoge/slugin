import React from "react";
import { Input, FormBtn } from "../Form";

function SearchBox(props) {
    const {searchBook, handleInputChange, handleBtnSubmit} = props;
    return (
      <div className="container border border-dark" >
        <div className="row m-1">
          <div className="col-sm-12">
            <h4>Book Search</h4>
          </div>
          <div className="col-sm-12 mt-3">
            <Input 
                value={searchBook}
                onChange={handleInputChange}
            />
                {/* Book
            </Input> */}
          </div>
          <div className="col-sm-12">
            <FormBtn
                onClick={handleBtnSubmit}
                disabled={searchBook.length > 0 ? false : true}
            >
                Search
            </FormBtn>
          </div>
        </div>
      </div>
    );
  }


export default SearchBox;