import UserContext from './services/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Sign1 from "./components/auth/Sign_form";
import Login1 from "./components/auth/Login_form";
import { Home } from './components/user/Home';
import Header from './components/header/Header';
import Cart from "./components/user/cart";
import PaymentPage from "./components/user/Payment";
import AdminPage from './components/admin/Adminpage';
import CoursePage from './components/user/CoursePage';
import Footer from './components/footer/Footer';


function App() {

  const [User, setUser] = useState(null);
  const [cart, setCart] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <UserContext.Provider value={{
        User, setUser,
        cart, setCart,
        isLoggedIn, setIsLoggedIn
      }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Sign1 />} />
            <Route exact path="/login" element={<Login1 />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/payment" element={<PaymentPage />} />
            <Route exact path="/admin" element={<AdminPage />} />
            <Route exact path="/course" element={<CoursePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
