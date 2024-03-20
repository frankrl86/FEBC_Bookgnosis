import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Header";
import BookItems from "./BookItems";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`https://gutendex.com/books/`, {
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

    fetchBooks();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="container">
      <Header />
      <BookItems
        title="Explore our book collection"
        description="Here are some of our favourite books. Explore the most popular titles on our collection."
        books={books}
      />
    </div>
  );
}

export default Home;