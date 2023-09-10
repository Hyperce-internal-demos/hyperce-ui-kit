import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Import Routes
import Hero from './Components/Hero section/Hero';
import Header from './Components/Header/Header';
import Signin from './Components/Login Page/Signin';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Signin />
    </div>
  );
}

export default App;
