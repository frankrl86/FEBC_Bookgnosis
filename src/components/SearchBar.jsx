import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const API_KEY = 'AIzaSyA7RwoPLux_y-pGPAnOFeQ1ryw91yiiwcI'; 
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
