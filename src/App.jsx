import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import './App.css';
import Login from './component/registration/Login';
import Signup from './component/registration/Signup';

const App = () => {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
