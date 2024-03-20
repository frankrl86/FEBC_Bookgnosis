
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import BookItems from './BookItems';
import "../css/Displaypage.css"
import { GlobalData } from '../../Context';


function DisplayPage() {
  // const [books, setBooks] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  const{books, handleBooks, currentPage, setCurrentPage, totalPages, setTotalPages }=useContext(GlobalData)

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get(`https://gutendex.com/books/`, {
  //         params: {
  //           page: currentPage,
  //         },
  //       });
  //       handleBooks(response.data.results);
  //       setTotalPages(Math.ceil(response.data.count / response.data.results.length)); // Assuming the API returns the total count
  //     } catch (error) {
  //       console.error('There was an error fetching the book data:', error);
  //     }
  //   };

  //   fetchBooks();
  // }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="App">
      <h1>Books List Results</h1>
      <table>
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Author(s)</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>
              <img src={book.formats['image/jpeg']} alt={book.title} style={{ width: '50px', height: 'auto' }} />
            </td>
            <td><a href={book.formats['text/html']} target="_blank" rel="noopener noreferrer">{book.title}</a></td>
            <td>{book.authors.map(author => author.name).join(', ')}</td>
            <td>{book.languages.join(', ')}</td>
          </tr>
        ))}
      </tbody>

      </table>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}






  
  
  export default DisplayPage;