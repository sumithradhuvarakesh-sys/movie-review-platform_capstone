import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const movies = {
    1: {
      title: "Spider-Man: Brand New Day",
      rating: "4.5",
      genre: "Action",
      year: "2026",
      description:
        "Spider-Man returns for a brand new adventure filled with action and challenges."
    },

    2: {
      title: "The Odyssey",
      rating: "4.8",
      genre: "Adventure",
      year: "2026",
      description:
        "An epic adventure inspired by the legendary journey of Odysseus."
    },

    3: {
      title: "Jana Nayagan",
      rating: "4.3",
      genre: "Action Thriller",
      year: "2026",
      description:
        "An action thriller filled with emotion, suspense and powerful moments."
    }
  };

  const movie = movies[id];

  return (
    <div className="details">

      <h1>{movie.title}</h1>

      <p>⭐ Rating: {movie.rating}</p>

      <p>Genre: {movie.genre}</p>

      <p>Year: {movie.year}</p>

      <h2>About the Movie</h2>

      <p>{movie.description}</p>

      <button onClick={() => navigate("/home")}>
        Back to Home
      </button>

      <button onClick={() => navigate("/review")}>
        Write Review
      </button>

    </div>
  );
}

export default MovieDetails;