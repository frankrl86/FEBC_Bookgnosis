
import {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalData } from '../../Context';
import { useParams } from 'react-router-dom';



function DisplayMainBook() {
  const{books}=useContext(GlobalData)
  const [book, setBook] = useState() 
  let params=useParams()
  useEffect(() => {
let book = books.filter(element => element.title === params.title)
    setBook(...book)
  console.log(params.title);
  }, [books])
  useEffect(() => {
   console.log(book);
  }, [book])
  
  // const book = 
      
  //   { title: "The The Lion, The Witch and the Wardrobe",
  //   author:"Cs Lewis",
  //   series: "Chronicles of Narnia",
  //   description: "While playing, Lucy and her siblings find a wardrobe that lands them in a mystical place called Narnia. Here they realise that it was fated and they must now unite with Aslan to defeat an evil queen.....",
  //   image: "/Narnia.jpg"
  //   }
    
  
    return (
      <div className="container">
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      {/* <img src={book.image} class="img-fluid rounded-start" alt={book.title}/> */}
    </div>
    <div class="col-md-8">
      <div class="card-body">
        {/* <h5 class="card-title">{book?.title}</h5> */}
        <div>
            <h5 className="card-title" style={{ textAlign: 'left', marginBottom: '10px' }}>{book?.title}</h5>
            {book?.authors?.map(author=>{
              return <p key={author.name}>{author.name}</p>
            })}
            <img src={book?.formats['image/jpeg']} alt={book?.title} className="card-img-top" style={{ width: '100px', height: '150px' }} />
                </div>
        {/* <p className="card-text">{book?.author}</p>
        <p class="card-text">{book?.description}</p>
        <p class="card-text"><small class="text-body-secondary">{book?.series}</small></p> */}
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  export default DisplayMainBook;