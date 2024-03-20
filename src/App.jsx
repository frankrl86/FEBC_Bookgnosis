import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Author from "./components/pages/Author";
import Genre from "./components/pages/Genre";
import SignUp from "./components/pages/SignUp";
import Navigation from "./components/Navigation";
import SearchBar from './components/SearchBarfooter'
import Footer from './components/footer'
import DisplayMainBook from './components/pages/Displaymainbook';
import DisplayPage from './components/pages/Displaypage';

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/mainbook/:title" element={<DisplayMainBook/>} />
          <Route path="/resultbooks" element={<DisplayPage/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
