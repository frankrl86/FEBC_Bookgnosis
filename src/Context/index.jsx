import { useState, useEffect, createContext } from "react";
import axios from 'axios';


export const GlobalData = createContext();

const GlobalContext = ({ children }) => {
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
        console.log(response.data.results);
        setBooks(response.data.results);
        setTotalPages(
          Math.ceil(response.data.count / response.data.results.length)
        ); // Assuming the API returns the total count
      } catch (error) {
        console.error("There was an error fetching the book data:", error);
      }
    };

    fetchBooks();
  }, [currentPage]);
  useEffect(() => {
    console.log(books);
  }, [books]);

  function handleBooks(data) {
    setBooks(data);
  }
  const data = {
    books,
    handleBooks,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  };

  return <GlobalData.Provider value={data}>{children}</GlobalData.Provider>;
};

export default GlobalContext;
