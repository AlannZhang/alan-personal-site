import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import Home from './components/home';
import About from './components/about';
import NavBar from './components/navbar';

const App = () => (
  <Router>
    <div className='App'>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  </Router>
);

export default App;
