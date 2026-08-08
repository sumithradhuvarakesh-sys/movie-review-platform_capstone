import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />

      <Route path="/movie/:id" element={<MovieDetails />} />

    </Routes>
  );
}

export default App;