
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import BookItems from './BookItems';


function DisplayPage() {
    const books = [
      { title: "Book 1" },
      { title: "Book 2" },
      { title: "Book 3" },
      { title: "Book 4" },
      { title: "Book 5" },
    
    ];
  
    return (
      <div className="container">
        <h1>Here are your results</h1>
        <BookItems
          title="Explore our book collection"
          description="Here are some of our favourite books. Explore the most popular titles on our collection."
          books={books}
        />
      </div>
    );
  }
  
  export default DisplayPage;