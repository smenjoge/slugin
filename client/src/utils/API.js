import axios from "axios";

export default {
    // Find books by calling Google API
    findBooks: function(bookName) {
        return axios.get("/api/books/find/" + bookName); 
    },
    // Get all saved books from database
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    // Saved a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Delete a book from the database
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}
