import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React, { useState } from 'react';
import axios from 'axios';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.volumeInfo.title} by {book.volumeInfo.authors?.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
