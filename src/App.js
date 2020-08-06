import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar'
import Products from './Components/Products'
import LoginForm from './Components/LoginForm'

function App() {
  const isloggedin = false

  return (
    <div className="App">
      {/* <LoginForm /> */}
      <NavBar />
      <Products />
    </div>
    
  );
}

export default App;
