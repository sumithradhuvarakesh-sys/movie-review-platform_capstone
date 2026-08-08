import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">

      <h1>CINE SCOPE</h1>

      <p>Discover Movies & Share Reviews</p>

      <input
        type="text"
        placeholder="Search Movies..."
      />

      <div className="movies">

        <div className="movie">
          <h2>Spider-Man: Brand New Day</h2>
          <p>⭐ 4.5</p>

          <button onClick={() => navigate("/movie/1")}>
            View Details
          </button>
        </div>

        <div className="movie">
          <h2>The Odyssey</h2>
          <p>⭐ 4.8</p>

          <button onClick={() => navigate("/movie/2")}>
            View Details
          </button>
        </div>

        <div className="movie">
          <h2>Jana Nayagan</h2>
          <p>⭐ 4.3</p>

          <button onClick={() => navigate("/movie/3")}>
            View Details
          </button>
        </div>

      </div>

    </div>
  );
}

export default Home;