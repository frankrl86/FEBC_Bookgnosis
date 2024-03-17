import 'bootstrap/dist/css/bootstrap.min.css';

function BookItems(props) {
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <h3>{props.books}</h3>
    </div>
  );
}

export default BookItems;