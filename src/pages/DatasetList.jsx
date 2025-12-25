import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import API from "../api/axios";

export default function DatasetList() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        setLoading(true);
        const res = await API.get("/datasets");
        
        // Handle paginated response: { docs: [...], total, limit, page }
        const list = res.data.docs || res.data.data || res.data || [];
        setDatasets(list);

        // Extract unique categories from actual data
        const uniqueCats = [...new Set(list.map(d => d.category).filter(Boolean))];
        setCategories(uniqueCats.sort());
      } catch (err) {
        console.error("Error fetching datasets:", err);
        setDatasets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDatasets();
  }, []);

  const filteredDatasets = categoryFilter
    ? datasets.filter(d => d.category?.toLowerCase() === categoryFilter.toLowerCase())
    : datasets;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-2xl font-semibold text-indigo-700">Loading datasets...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-4">
          All Datasets
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {categoryFilter ? `Category: ${categoryFilter}` : "Browse all available datasets"}
        </p>

        {/* Categories Pills */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              to="/datasets"
              className={`px-6 py-3 rounded-full font-medium transition ${
                !categoryFilter
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:shadow-md"
              }`}
            >
              All
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                to={`/datasets?category=${encodeURIComponent(cat)}`}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  categoryFilter === cat
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-gray-700 shadow hover:shadow-md"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        )}

        {/* Datasets Grid */}
        {filteredDatasets.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">No datasets found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDatasets.map(dataset => (
              <Link
                key={dataset._id}
                to={`/datasets/${dataset._id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {dataset.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition">
                    {dataset.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {dataset.description || "No description available"}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                      {dataset.category}
                    </span>
                    <span className="text-gray-500">
                      {new Date(dataset.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {dataset.isPremium && (
                    <span className="mt-3 inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                      Premium
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}