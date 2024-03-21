
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import BookItems from './BookItems';
import "../css/Displaypage.css"

var url_api = "https://gutendex.com/books";

function DisplayPage() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, [currentPage]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(url_api, {
        params: {
          page: currentPage,
        },
      });
      setBooks(response.data.results);
      setTotalPages(Math.ceil(response.data.count / response.data.results.length)); // Assuming the API returns the total count
    } catch (error) {
      console.error('There was an error fetching the book data:', error);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleClick=()=>{
    url_api = "https://gutendex.com/books?search="+search;
    fetchBooks();
  }

  const change = event => {
    setSearch(event.target.value)
  }

  return (
    <div className="Displaypage">
      <div className="search row m-0 my-2 rounded maroon">
        <div className="col-sm-12 col-lg-5 d-flex flex-column justify-content-between p-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>
            <label className="form-check-label">Search</label>
          </div>
          <input onChange={change} value={search} type="text" className="form-control w-100"></input>
        </div>

        <div className="col-sm-12 col-lg-6 p-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>
            <label className="form-check-label">Filter</label>
          </div>

          <div className="filter row">
            <div className="col-4 border-end">
              <div className="search-box">
                <label className="form-check-label">Genre</label>
                <select className="form-select">
                  <option value="">Select Genre</option>
                  <option value="filter1">Drama</option>
                  <option value="filter2">SF</option>
                  <option value="filter3">Fantasy</option>
                </select>
              </div>
              <vr />
            </div>
            <div className="col-4 border-end">
              <div className="search-box">
                <label className="form-check-label">Author</label>
                <select className="form-select">
                  <option value="">Select Author</option>
                  <option value="filter1">Author 1</option>
                  <option value="filter2">Author 2</option>
                  <option value="filter3">Author 3</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="search-box">
                <label className="form-check-label">Language</label>
                <select className="form-select">
                  <option value="">Language</option>
                  <option value="filter1">English</option>
                  <option value="filter2">Spanish</option>
                  <option value="filter3">Portuguese</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-1 p-3">
          <button onClick={handleClick} type="button" className="btn-search">
            Search
          </button>
        </div>
      </div>
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