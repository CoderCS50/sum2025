import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom"; //page routing
import NavBar from "./components/NavBar"; //importing the navbar component

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
