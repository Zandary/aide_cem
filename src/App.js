import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Article from './components/Article/Article';
import Platforms from "./pages/Platforms";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes> 
          <Route path='/articles/nyvolako/:id' element={<Article platform="nyvolako"/>} />
          <Route path='/articles/sunupay/:id' element={<Article platform="sunupay"/>} />
          <Route path='/' element={<Platforms />} />
          <Route path='/menu/nyvolako' element={<Home platform="nyvolako"/>} />
          <Route path='/menu/sunupay' element={<Home platform="sunupay"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;