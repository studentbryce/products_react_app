import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavMenu from './NavMenu';
import ProductPage from './ProductPage';
import './styles.css';


function App() {
    return(
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/:id' element={<ProductPage/>} />
        </Routes>
      </Router>
    );
}

export default App
