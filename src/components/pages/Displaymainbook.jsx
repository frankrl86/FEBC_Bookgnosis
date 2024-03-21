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
  
    return (
      <div className="container">
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <div>
            <h5 className="card-title" style={{ textAlign: 'left', marginBottom: '10px' }}>{book?.title}</h5>
            <img src={book?.formats['image/jpeg']} alt={book?.title} className="card-img-top" style={{ width: 'auto', height: '250px' }} />        
            {book?.authors?.map(author=>{
              return <p key={author.name}><b>Author:</b> {author.name}</p>
            })}
            <p><b>Book Categories:</b> {book?.bookshelves.join(', ')}</p>
            <p><b>Languages:</b> {book?.languages.join(', ')}</p>
            <p><b>Copyright:</b> {book?.copyright}</p>
            <p><b>Read:</b> <a href={book?.formats['text/html']} target="_blank" rel="noopener noreferrer">{book?.title}</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  export default DisplayMainBook;
  