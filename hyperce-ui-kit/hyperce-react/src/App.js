import './App.css';
import Hero from './Components/Hero section/Hero';
import Header from './Components/Header/Header';
import Signin from './Components/Login Page/Signin';
import Signup from './Components/Signup Page/Signup';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
