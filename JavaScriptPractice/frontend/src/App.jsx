import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"; //page routing
import NavBar from "./components/NavBar"; //importing the navbar component
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
