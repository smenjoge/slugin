import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyBFfo9dzzHIdpwyOW8SjujW_seg2RWrhWI";

export default {
    getBooks: function(bookName) {
        return axios.get(BASEURL + bookName + "&key=" + APIKEY + "&maxResults=10")
    }
}
