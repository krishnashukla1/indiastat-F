// import { useState, useContext } from "react";
// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/login", form);
//       login(res.data.user, res.data.token);
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="border p-2 w-full mb-4 rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="border p-2 w-full mb-4 rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState, useContext } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6">

      {/* Glassmorphism Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 text-white animate-fadeIn">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Welcome Back
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-300 bg-red-900/40 p-3 rounded-lg text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-6">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-200 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-200 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 mt-4 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all"
          >
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center mt-6 text-sm text-gray-200">
          Don’t have an account?{" "}       
          <a href="/register" className="underline cursor-pointer hover:text-white">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
