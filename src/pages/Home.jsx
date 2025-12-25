//=====correct========
// import { Link } from "react-router-dom";

// const categories = [
//   { name: "Agriculture", color: "from-green-400 to-green-600" },
//   { name: "Health", color: "from-red-400 to-red-600" },
//   { name: "Education", color: "from-blue-400 to-blue-600" },
//   { name: "Crime", color: "from-yellow-400 to-yellow-600" },
//   { name: "Economy", color: "from-purple-400 to-purple-600" },
//   { name: "Transport", color: "from-indigo-400 to-indigo-600" },
//   { name: "Environment", color: "from-teal-400 to-teal-600" },
//   { name: "Finance", color: "from-teal-400 to-teal-600" },

// ];

// export default function Home() {
//   return (
//     <div className="container mx-auto p-4 space-y-8">

//       {/* Hero Section */}
//       <div className="bg-blue-600 rounded-lg p-8 text-center text-white shadow-md">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Explore India Data
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           Browse, visualize, and download structured datasets from IndiaStat Clone
//         </p>
//         <Link
//           to="/datasets"
//           className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition"
//         >
//           Explore Datasets
//         </Link>
//       </div>

//       {/* Categories Section */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {categories.map((cat) => (
//             <Link
//               key={cat.name}
//               to={`/datasets?category=${cat.name}`}
//               className={`bg-gradient-to-r ${cat.color} text-white font-semibold p-6 rounded-lg shadow hover:shadow-lg transition`}
//             >
//               {cat.name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Featured Datasets */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Featured Datasets</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
//             <h3 className="font-semibold text-lg mb-2">Agriculture 2022</h3>
//             <p className="text-sm text-gray-600 mb-2">Dataset covering crop production and irrigation data</p>
//             <Link
//               to="/datasets/692dddc7124a047b48d830e6"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               View Dataset
//             </Link>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
//             <h3 className="font-semibold text-lg mb-2">Health 2021</h3>
//             <p className="text-sm text-gray-600 mb-2">Hospital infrastructure and vaccination data</p>
//             <Link
//               to="/datasets/692dddc7124a047b48d830e7"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               View Dataset
//             </Link>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
//             <h3 className="font-semibold text-lg mb-2">Education 2020</h3>
//             <p className="text-sm text-gray-600 mb-2">Literacy rate and school enrollment data</p>
//             <Link
//               to="/datasets/692dddc7124a047b48d830e8"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               View Dataset
//             </Link>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

//=====stylish===correct======

// import { Link } from "react-router-dom";
// import { Database, Calendar, ChevronRight, ArrowRight } from "lucide-react";

// const categories = [
//   { name: "Agriculture", color: "from-green-400 to-green-600" },
//   { name: "Health", color: "from-red-400 to-red-600" },
//   { name: "Education", color: "from-blue-400 to-blue-600" },
//   { name: "Crime", color: "from-yellow-400 to-yellow-600" },
//   { name: "Economy", color: "from-purple-400 to-purple-600" },
//   { name: "Transport", color: "from-indigo-400 to-indigo-600" },
//   { name: "Environment", color: "from-teal-400 to-teal-600" },
//   { name: "Finance", color: "from-pink-400 to-pink-600" },
// ];

// const featuredDatasets = [
//   {
//     id: "692dddc7124a047b48d830e6",
//     title: "All India Crop Production Statistics 2022-2023",
//     description: "Monthly crop production, area under cultivation, yield rates across all states and union territories",
//     category: "Agriculture",
//     recordCount: 28450,
//     updatedAt: "2025-03-15"
//   },
//   {
//     id: "6940656691ed9d962e268807",
//     title: "National Health Profile & Infrastructure 2021-2024",
//     description: "Hospital beds, medical colleges, vaccination coverage, disease incidence and healthcare expenditure",
//     category: "Health",
//     recordCount: 18320,
//     updatedAt: "2025-02-28"
//   },
//   {
//     id: "692e11ca07ee5bef785b9aa3",
//     title: "Education Statistics: Enrollment & Literacy Rates 2020-2024",
//     description: "School enrollment, dropout rates, teacher-student ratio and literacy trends across districts",
//     category: "Education",
//     recordCount: 42100,
//     updatedAt: "2025-01-10"
//   },
//   {
//     id: "694066a391ed9d962e26881b",
//     title: "State-wise Crime Records 2018-2024",
//     description: "IPC crimes, cyber crimes, crimes against women & children with district-level breakdown",
//     category: "Crime",
//     recordCount: 98500,
//     updatedAt: "2025-03-20"
//   },
//   {
//     id: "692df16b07ee5bef785b98c1",
//     title: "GDP & Economic Survey Data 2015-2025",
//     description: "State GDP, GSDP growth, sector-wise contribution and per capita income trends",
//     category: "Finance",
//     recordCount: 15680,
//     updatedAt: "2025-03-25"
//   },
//   {
//     id: "692e091207ee5bef785b9a2e",
//     // title: "Road Transport & Highway Statistics 2024",
//     title: "Wather data & Climate Statistics 2025",

//     description: "National highways length, vehicle registration, road accidents and freight movement data",
//     // category: "Transport",
//     category:"Weather",
//     recordCount: 32900,
//     updatedAt: "2025-02-15"
//   }
// ];
// export default function Home() {
//   return (
//     <div className="container mx-auto p-6 space-y-12">

//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-center text-white shadow-xl">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Explore India Data
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           Browse, visualize, and download structured datasets from IndiaStat Clone
//         </p>
//         <Link
//           to="/datasets"
//           className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
//         >
//           Explore Datasets
//         </Link>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
//           <h3 className="text-xl font-bold mb-2">1,245</h3>
//           <p className="text-gray-500 text-sm">Total Datasets</p>
//         </div>
//         <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
//           <h3 className="text-xl font-bold mb-2">8,320</h3>
//           <p className="text-gray-500 text-sm">Downloads</p>
//         </div>
//         <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
//           <h3 className="text-xl font-bold mb-2">2,150</h3>
//           <p className="text-gray-500 text-sm">Active Users</p>
//         </div>
//         <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
//           <h3 className="text-xl font-bold mb-2">320</h3>
//           <p className="text-gray-500 text-sm">Categories</p>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat) => (
//             <Link
//               key={cat.name}
//               to={`/datasets?category=${cat.name}`}
//               className={`bg-gradient-to-r ${cat.color} text-white font-semibold p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition`}
//             >
//               <div className="text-lg md:text-xl">{cat.name}</div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Featured Datasets */}
//       {/* <div>
//         <h2 className="text-2xl font-bold mb-4">Featured Datasets</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {[
//             { title: "Agriculture 2022", desc: "Crop production and irrigation data", link: "/datasets/692dddc7124a047b48d830e6" },
//             { title: "Health 2021", desc: "Hospital infrastructure and vaccination data", link: "/datasets/692dddc7124a047b48d830e7" },
//             { title: "Education 2020", desc: "Literacy rate and school enrollment data", link: "/datasets/692dddc7124a047b48d830e8" },
//           ].map((dataset, idx) => (
//             <div key={idx} className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl transition hover:-translate-y-1">
//               <h3 className="font-semibold text-lg mb-2">{dataset.title}</h3>
//               <p className="text-gray-600 mb-4 text-sm">{dataset.desc}</p>
//               <Link
//                 to={dataset.link}
//                 className="text-blue-600 font-semibold hover:underline"
//               >
//                 View Dataset
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div> */}


//       {/* Featured Datasets - Now Fully Dynamic */}
//       <div>
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">Featured Datasets</h2>
//           <Link
//             to="/datasets"
//             className="text-indigo-600 font-medium hover:underline flex items-center gap-2"
//           >
//             View all datasets
//             <ChevronRight className="w-5 h-5" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredDatasets.map((dataset) => (
//             <Link
//               key={dataset.id}
//               to={`/datasets/${dataset.id}`}  // Dynamic link to actual dataset            
//               className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
//             >
//               <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
//                 <h3 className="text-xl font-bold line-clamp-2 group-hover:text-indigo-100 transition">
//                   {dataset.title}
//                 </h3>
//                 {dataset.category && (
//                   <span className="inline-block mt-2 px-4 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur">
//                     {dataset.category}
//                   </span>
//                 )}
//               </div>

//               <div className="p-6 space-y-4">
//                 <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
//                   {dataset.description || "Comprehensive dataset with detailed records and statistics."}
//                 </p>

//                 <div className="flex items-center justify-between text-sm">
//                   <div className="flex items-center gap-4 text-gray-500">
//                     <span className="flex items-center gap-1">
//                       <Database className="w-4 h-4" />
//                       {dataset.recordCount?.toLocaleString() || "10K+"} records
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       {new Date(dataset.updatedAt || Date.now()).toLocaleDateString("en-IN", {
//                         month: "short",
//                         year: "numeric"
//                       })}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-gray-100">
//                   <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
//                     View Dataset
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>


//     </div>
//   );
// }



//=============dynamic===========

import { useState, useEffect } from 'react'; // Add these imports
import { Link } from "react-router-dom";
import { Database, Calendar, ChevronRight, ArrowRight } from "lucide-react";
import axios from 'axios'; // Import Axios

// Keep your categories array as-is (it's already dynamic-friendly)
const categories = [
  { name: "Agriculture", color: "from-green-400 to-green-600" },
  { name: "Health", color: "from-red-400 to-red-600" },
  { name: "Education", color: "from-blue-400 to-blue-600" },
  { name: "Crime", color: "from-yellow-400 to-yellow-600" },
  { name: "Economy", color: "from-purple-400 to-purple-600" },
  { name: "Transport", color: "from-indigo-400 to-indigo-600" },
  { name: "Environment", color: "from-teal-400 to-teal-600" },
  { name: "Finance", color: "from-pink-400 to-pink-600" },
];

export default function Home() {
  const [featuredDatasets, setFeaturedDatasets] = useState([]); // State for dynamic data
  const [loading, setLoading] = useState(true); // Optional: For loading spinner
  const [error, setError] = useState(null); // Optional: For error handling

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/datasets/featured');
        setFeaturedDatasets(response.data); // Set the fetched data
      } catch (err) {
        setError('Failed to load featured datasets. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []); // Empty array: Runs only once on mount

  return (
    <div className="container mx-auto p-6 space-y-12">
     
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-center text-white shadow-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Explore India Data
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Browse, visualize, and download structured datasets from IndiaStat Clone
        </p>
        <Link
          to="/datasets"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Explore Datasets
        </Link>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">1,245</h3>
          <p className="text-gray-500 text-sm">Total Datasets</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">8,320</h3>
          <p className="text-gray-500 text-sm">Downloads</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">2,150</h3>
          <p className="text-gray-500 text-sm">Active Users</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">320</h3>
          <p className="text-gray-500 text-sm">Categories</p>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/datasets?category=${cat.name}`}
              className={`bg-gradient-to-r ${cat.color} text-white font-semibold p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition`}
            >
              <div className="text-lg md:text-xl">{cat.name}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Datasets - Now Dynamic */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Datasets</h2>
          <Link
            to="/datasets"
            className="text-indigo-600 font-medium hover:underline flex items-center gap-2"
          >
            View all datasets
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading featured datasets...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : featuredDatasets.length === 0 ? (
          <p className="text-center text-gray-500">No featured datasets available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDatasets.map((dataset) => (
  <Link
    key={dataset._id} // ✅ use _id for unique key
    to={`/datasets/${dataset._id}`} // ✅ pass _id in URL
    className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
  >
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
      <h3 className="text-xl font-bold line-clamp-2 group-hover:text-indigo-100 transition">
        {dataset.title}
      </h3>
      {dataset.category && (
        <span className="inline-block mt-2 px-4 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur">
          {dataset.category}
        </span>
      )}
    </div>

    <div className="p-6 space-y-4">
      <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
        {dataset.description || "Comprehensive dataset with detailed records and statistics."}
      </p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4 text-gray-500">
          <span className="flex items-center gap-1">
            <Database className="w-4 h-4" />
            {dataset.recordsCount?.toLocaleString() || "10K+"} records
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(dataset.updatedAt || Date.now()).toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric"
            })}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
          View Dataset
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </span>
      </div>
    </div>
  </Link>
))}

          </div>
        )}
      </div>
    </div>
  );
}











//==================15 dec===========

// import { Link } from "react-router-dom";
// import { Database, Calendar, ChevronRight, ArrowRight } from "lucide-react";

// /* -------------------- Categories -------------------- */
// // const categories = [
// //   { name: "Agriculture", color: "from-green-400 to-green-600", link: "/admin/agriculture" },
// //   { name: "Health", color: "from-red-400 to-red-600" },
// //   { name: "Education", color: "from-blue-400 to-blue-600" },
// //   { name: "Crime", color: "from-yellow-400 to-yellow-600" },
// //   { name: "Economy", color: "from-purple-400 to-purple-600" },
// //   { name: "Transport", color: "from-indigo-400 to-indigo-600" },
// //   { name: "Environment", color: "from-teal-400 to-teal-600" },
// //   { name: "Finance", color: "from-pink-400 to-pink-600" },
// // ];

// const categories = [
//   {
//     name: "Agriculture",
//     color: "from-green-400 to-green-600",
//     link: "/admin/agriculture",
//   },
//   {
//     name: "Health",
//     color: "from-red-400 to-red-600",
//     link: "/admin/health",
//   },
//   {
//     name: "Education",
//     color: "from-blue-400 to-blue-600",
//     link: "/admin/education",
//   },
//   {
//     name: "Crime",
//     color: "from-yellow-400 to-yellow-600",
//     link: "/admin/crime",
//   },
//   {
//     name: "Economy",
//     color: "from-purple-400 to-purple-600",
//     link: "/admin/economy",
//   },
//   {
//     name: "Transport",
//     color: "from-indigo-400 to-indigo-600",
//     link: "/admin/transport",
//   },
//   {
//     name: "Environment",
//     color: "from-teal-400 to-teal-600",
//     link: "/admin/environment",
//   },
//   {
//     name: "Finance",
//     color: "from-pink-400 to-pink-600",
//     link: "/admin/finance",
//   },
// ];

// /* -------------------- Featured Datasets -------------------- */
// const featuredDatasets = [
//   {
//     id: "692dddc7124a047b48d830e6",
//     title: "All India Crop Production Statistics 2022–2023",
//     description:
//       "Monthly crop production, area under cultivation, and yield rates across all states and UTs.",
//     category: "Agriculture",
//     recordCount: 28450,
//     updatedAt: "2025-03-15",
//   },
//   {
//     id: "692dddc7124a047b48d830e7",
//     title: "National Health Profile & Infrastructure 2021–2024",
//     description:
//       "Hospital beds, medical colleges, vaccination coverage, disease incidence, and healthcare expenditure.",
//     category: "Health",
//     recordCount: 18320,
//     updatedAt: "2025-02-28",
//   },
//   {
//     id: "692e11ca07ee5bef785b9aa3",
//     title: "Education Statistics: Enrollment & Literacy Rates 2020–2024",
//     description:
//       "School enrollment, dropout rates, teacher-student ratios, and literacy trends across districts.",
//     category: "Education",
//     recordCount: 42100,
//     updatedAt: "2025-01-10",
//   },
//   {
//     id: "692dddc7124a047b48d830e9",
//     title: "State-wise Crime Records 2018–2024",
//     description:
//       "IPC crimes, cyber crimes, and crimes against women & children with district-level data.",
//     category: "Crime",
//     recordCount: 98500,
//     updatedAt: "2025-03-20",
//   },
//   {
//     id: "692df16b07ee5bef785b98c1",
//     title: "GDP & Economic Survey Data 2015–2025",
//     description:
//       "State GDP, GSDP growth, sector-wise contribution, and per-capita income trends.",
//     category: "Finance",
//     recordCount: 15680,
//     updatedAt: "2025-03-25",
//   },
//   {
//     id: "692e091207ee5bef785b9a2e",
//     title: "Weather & Climate Statistics 2025",
//     description:
//       "Rainfall patterns, temperature trends, climate indicators, and seasonal variability.",
//     category: "Weather",
//     recordCount: 32900,
//     updatedAt: "2025-02-15",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="container mx-auto px-6 py-8 space-y-14">

//       {/* ---------------- Hero Section ---------------- */}
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-center text-white shadow-xl">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//           Explore India Data
//         </h1>
//         <p className="text-lg md:text-xl mb-6 opacity-90">
//           Browse, visualize, and download structured datasets from IndiaStat
//         </p>
//         <Link
//           to="/datasets"
//           className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
//         >
//           Explore Datasets
//         </Link>
//       </section>

//       {/* ---------------- Stats Section ---------------- */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {[
//           { value: "1,245", label: "Total Datasets" },
//           { value: "8,320", label: "Downloads" },
//           { value: "2,150", label: "Active Users" },
//           { value: "320", label: "Categories" },
//         ].map((stat) => (
//           <div
//             key={stat.label}
//             className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition"
//           >
//             <h3 className="text-2xl font-extrabold mb-2">{stat.value}</h3>
//             <p className="text-gray-500 text-sm">{stat.label}</p>
//           </div>
//         ))}
//       </section>

//       {/* ---------------- Categories ---------------- */}
//       <section>
//         <h2 className="text-2xl font-bold mb-6">Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat) => (
//             <Link
//               key={cat.name}
//               to={cat.link}
//               className={`bg-gradient-to-r ${cat.color} text-white font-semibold p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition`}
//             >
//               <div className="text-xl">{cat.name}</div>
//             </Link>
//           ))}

//         </div>
//       </section>

//       {/* ---------------- Featured Datasets ---------------- */}
//       <section>
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">Featured Datasets</h2>
//           <Link
//             to="/datasets"
//             className="text-indigo-600 font-medium hover:underline flex items-center gap-2"
//           >
//             View all datasets
//             <ChevronRight className="w-5 h-5" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredDatasets.map((dataset) => (
//             <Link
//               key={dataset.id}
//               to={`/datasets/${dataset.id}`}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 overflow-hidden"
//             >
//               <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
//                 <h3 className="text-xl font-bold line-clamp-2">
//                   {dataset.title}
//                 </h3>
//                 <span className="inline-block mt-2 px-4 py-1 bg-white/20 rounded-full text-sm">
//                   {dataset.category}
//                 </span>
//               </div>

//               <div className="p-6 space-y-4">
//                 <p className="text-gray-600 line-clamp-3 text-sm">
//                   {dataset.description}
//                 </p>

//                 <div className="flex items-center gap-4 text-sm text-gray-500">
//                   <span className="flex items-center gap-1">
//                     <Database className="w-4 h-4" />
//                     {dataset.recordCount.toLocaleString()} records
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     {new Date(dataset.updatedAt).toLocaleDateString("en-IN", {
//                       month: "short",
//                       year: "numeric",
//                     })}
//                   </span>
//                 </div>

//                 <div className="pt-4 border-t">
//                   <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition">
//                     View Dataset
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

