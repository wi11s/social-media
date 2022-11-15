import '../App.css';
import Login from './Login';
import Home from './Home';
import Header from './Header';
import Profile from './Profile';
import Search from './Search';
import NotFound from './NotFound';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    })
    .then((r) => {
      console.log(r)
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [localStorage.getItem("jwt")]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Header setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
