import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import './App.css';
import Login from './component/registration/Login';
import Signup from './component/registration/Signup';
import Cart from './page/cart/Cart';

const App = () => {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
