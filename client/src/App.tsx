import { Routes, BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
