import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const placeholderImage = 'https://placehold.co/150x150';

function BookItems(props) {
  const books = props.books;

  return (
    <div className="container text-center">
      <div className="section-header" style={{ padding: '40px 0' }}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="row">
        {books.slice(0, 4).map((book, index) => (
          <div key={index} className="col-md-3">
            <div className="card mb-3">
              <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                <div>
                  <h5 className="card-title" style={{ textAlign: 'left', marginBottom: '10px' }}>{book.title}</h5>
                  <img src={book.image || placeholderImage} className="card-img-top" alt={book.title} />
                </div>
                <div className="d-flex justify-content-end mt-2">
                  <button className="btn btn-primary" style={{ backgroundColor: '#bbbbbb', border: 'none', padding: '8px 16px', marginBottom: 'auto' }}>Read Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {books.slice(4, 8).map((book, index) => (
          <div key={index + 4} className="col-md-3">
            <div className="card mb-3">
              <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                <div>
                  <h5 className="card-title" style={{ textAlign: 'left', marginBottom: '10px' }}>{book.title}</h5>
                  <img src={book.image || placeholderImage} className="card-img-top" alt={book.title} />
                </div>
                <div className="d-flex justify-content-end mt-2">
                  <button className="btn btn-primary" style={{ backgroundColor: '#bbbbbb', border: 'none', padding: '8px 16px', marginBottom: 'auto' }}>Read Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookItems;

