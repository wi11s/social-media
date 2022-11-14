import '../App.css';
import Login from './Login';
import Home from './Home';
import Header from './Header';
import NotFound from './NotFound';
import { Routes, Route, useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
