// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios";
// import { AuthContext } from "../context/AuthContext";

// export default function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user" // default role
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   // Handle input changes
//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Submit registration
//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError("");
//     try {
//       const res = await API.post("/auth/register", form);
//       // auto-login after register
//       login(res.data.user, res.data.token);
//       navigate("/"); // redirect to homepage
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6">Register</h2>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="border p-2 w-full mb-4 rounded"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="border p-2 w-full mb-4 rounded"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="border p-2 w-full mb-4 rounded"
//           required
//         />

//         {/* Optional: Role selection for admin/demo */}
//         <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           className="border p-2 w-full mb-4 rounded"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700"
//         >
//           Register
//         </button>

//         <p className="mt-4 text-sm text-gray-500">
//           Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// }


import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/register", form);
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    // <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 p-6">
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-600 p-6">

      {/* Glassmorphism Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 text-white animate-fadeIn">

        <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>

        {/* Error */}
        {error && (
          <p className="text-red-300 bg-red-900/40 p-3 rounded-lg text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-6">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-xl bg-white/20 border border-white/30 
              placeholder-gray-200 focus:ring-2 focus:ring-pink-300 outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-xl bg-white/20 border border-white/30 
              placeholder-gray-200 focus:ring-2 focus:ring-pink-300 outline-none transition"
              required
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
              className="w-full mt-2 p-3 rounded-xl bg-white/20 border border-white/30 
              placeholder-gray-200 focus:ring-2 focus:ring-pink-300 outline-none transition"
              required
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="text-sm font-medium">Select Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="cursor-pointer w-full mt-2 p-3 rounded-xl bg-white/20 border border-white/30 
              text-white placeholder-gray-200 focus:ring-2 focus:ring-pink-300 outline-none transition"
            >
              <option className="text-black" value="user">User</option>
              <option className="text-black" value="admin">Admin</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 mt-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg 
            hover:shadow-2xl hover:scale-[1.03] transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-200">
          Already have an account?{" "}
          <a href="/login" className="underline cursor-pointer hover:text-white">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
