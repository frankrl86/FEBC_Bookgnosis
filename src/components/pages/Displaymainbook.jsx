
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
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={book.image} class="img-fluid rounded-start" alt={book.title}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
        <p class="card-text">{book.description}</p>
        <p class="card-text"><small class="text-body-secondary">{book.series}</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  export default DisplayMainBook;