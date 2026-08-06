import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-red-950 flex justify-center items-center">
      <div className="bg-gray-900 p-8 rounded-2xl w-96 shadow-2xl border border-red-900">

       <h1 className="text-4xl font-bold text-red-600 text-center drop-shadow-lg">
  CINESCOPE
</h1>
<p className="text-gray-300 text-center mt-2 mb-6">
  Discover a movies you love
</p>

        <h2 className="text-white text-2xl mt-6 mb-4">
          Signup
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-3 rounded bg-slate-700 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-slate-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <button className="w-full bg-red-500 text-white p-3 rounded">
          Create Account
        </button>

        <p className="text-gray-300 text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-red-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;