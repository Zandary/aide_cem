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
          <Route path='/articles/:id' element={<Article />} />
          <Route path='/' element={<Platforms />} />
          <Route path='/article/nyvolako' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;