import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function DisplayMainBook() {
    const book = 
      { title: "The The Lion, The Witch and the Wardrobe",
    author:"Cs Lewis",
    series: "Chronicles of Narnia",
    description: "While playing, Lucy and her siblings find a wardrobe that lands them in a mystical place called Narnia. Here they realise that it was fated and they must now unite with Aslan to defeat an evil queen.....",
    image: "/Narnia.jpg"
    }
    
  
    return (
      <div className="container">
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={book.image} className="img-fluid rounded-start" alt={book.title}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
        <p className="card-text">{book.description}</p>
        <p className="card-text"><small className="text-body-secondary">{book.series}</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  export default DisplayMainBook;
  