import React from 'react';
import Header from "../Header";
import BookItems from "./BookItems";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const books = [
    { title: "Book 1" },
    { title: "Book 2" },
    { title: "Book 3" },
    { title: "Book 4" },
    { title: "Book 5" },
    { title: "Book 6" },
    { title: "Book 7" },
    { title: "Book 8" }
  ];

  return (
    <div className="container">
      <Header />
      <BookItems
        title="Explore our book collection"
        description="Here are some of our favourite books. Exlore the most popular titles on our collection."
        books={books}
      />
    </div>
  );
}

export default Home;