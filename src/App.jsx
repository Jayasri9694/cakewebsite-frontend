import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import CakeList from './components/CakeList';
import CakeDetails from './components/CakeDetails'; 
import About from './pages/About';
import Contact from './pages/Contact'; 
import OrderPage from "./components/OrderPage";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'; 
import AddCake from "./pages/AddCake"; 
import './App.css'; 
import CartPage from './components/CartPage';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<CakeList />} />
          <Route path="/cakes/:id" element={<CakeDetails />} />
          <Route path="/add-cake" element={<AddCake />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
