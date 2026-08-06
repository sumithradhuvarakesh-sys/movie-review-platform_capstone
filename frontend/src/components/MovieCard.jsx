function MovieCard({ title, rating, genre }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>⭐ {rating}</p>

      <p>{genre}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
}
export default MovieCard;