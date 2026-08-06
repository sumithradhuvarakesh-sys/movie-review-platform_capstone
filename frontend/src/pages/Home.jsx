import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
function Home() {
  return (
    <div>
      <Navbar />
      <h2>Home Page</h2>
      <input type="text" placeholder="Search Movies" />
      <br /><br />
      <MovieCard
        title="spider man brand new day"
        rating="4.5"
        genre="Action/Superhero"
      />
      <MovieCard
        title="odyssey"
        rating="4.8"
        genre="periodic"
      />
      <MovieCard
        title="jana nayagan"
        rating="4.3"
        genre="Action Thriller"
      />
    </div>
  );
}
export default Home;