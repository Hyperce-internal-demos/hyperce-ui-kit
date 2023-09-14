import './App.css';
import Hero from './Components/Hero section/Hero';
import Header from './Components/Header/Header';
import Signin from './Components/Login Page/Signin';
import Signup from './Components/Signup Page/Signup';
import { Route, Routes } from 'react-router-dom';

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
      </Routes>
    </>
  );
}

export default App;
