import { useState, useContext ,useRef} from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function AdminUpload() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    year: "",
    isPremium: false
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
    const fileInputRef = useRef(null); 

  if (!user || user.role !== "admin") {
    return <p className="p-8 text-red-500">Access Denied. Admins only.</p>;
  }

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

const handleSubmit = async e => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("tags", form.tags);
      formData.append("year", form.year);
      formData.append("isPremium", form.isPremium);

      const res = await API.post("/datasets/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setMessage(res.data.message || "Dataset uploaded successfully");
      setError("");

      // Reset form fields
      setFile(null);
      setForm({
        title: "",
        description: "",
        category: "",
        tags: "",
        year: "",
        isPremium: false
      });

      // Clear the file input visually
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Clear success message after 5 seconds
      setTimeout(() => setMessage(""), 5000);

    } catch (err) {
      setError(err.response?.data?.message || "Upload failed");
      setMessage("");
    }
  };


  return (
 

  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Admin Dataset Upload
      </h1>

      {message && (
        <p className="bg-green-100 border border-green-300 text-green-700 p-3 rounded mb-4 text-center">
          {message}
        </p>
      )}

      {error && (
        <p className="bg-red-100 border border-red-300 text-red-700 p-3 rounded mb-4 text-center">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-gray-200"
      >
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter dataset title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write a short description"
            required
            rows={3}
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Agriculture, Finance, Weather"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. crops, rainfall, wheat"
          />
        </div>

        {/* Year */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Year</label>
          <input
            type="number"
            name="year"
            value={form.year}
            onChange={handleChange}
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="2025"
            required
          />
        </div>

        {/* Premium Switch */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="isPremium"
            checked={form.isPremium}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700 font-medium">Paid / Premium Dataset</span>
        </div>

        {/* File Upload */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">File (CSV / XLSX / JSON)</label>
          <input
            type="file"
            accept=".csv,.xlsx,.json"
            onChange={handleFileChange}
            className="border-2 border-gray-300 p-3 w-full rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer bg-blue-600 text-white font-semibold p-3 rounded-lg w-full hover:bg-blue-700 transition-all duration-200 shadow-md"
        >
          Upload Dataset
        </button>
      </form>
    </div>
  </div>

  );
}
