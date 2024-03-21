import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from './Context/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="885962381131-j8jh2j97errt98nvudk7034nhjjn0qr6.apps.googleusercontent.com">
  <React.StrictMode>
  <GlobalContext>
  <App />
  </GlobalContext>
  
  </React.StrictMode>
  </GoogleOAuthProvider>
);

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const API_KEY = "AIzaSyA7RwoPLux_y-pGPAnOFeQ1ryw91yiiwcI";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.items);
      console.log("Doing click");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.volumeInfo.title} by {book.volumeInfo.authors?.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
