import Header from "../Header";
import BookItems from "./BookItems";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <BookItems title="All Books" books="['book1', 'book2', 'book3']" />
    </div>
  );
}

export default Home;
