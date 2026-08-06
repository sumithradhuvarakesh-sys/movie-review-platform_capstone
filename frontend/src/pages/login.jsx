import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-500">
            CINESCOPE
          </h1>

          <p className="text-gray-300 mt-2">
            discover movies you love
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-6">
          Login
        </h2>
        <form>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-red-500"
            />
          </div>

          <button
            className="w-full bg-red-500 hover:bg-red-600 transition p-3 rounded-lg text-white font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-400 hover:underline"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}
export default Login;