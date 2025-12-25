// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api", 
// });

// // Add token automatically
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default API;




import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  

});
console.log("BASE URL:", import.meta.env.VITE_BASE_URL);

// Add token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
