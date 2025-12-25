import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { ArrowLeft, Upload, FileText } from "lucide-react";

export default function DatasetEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "General",
    tags: "",
    year: "",
    isPremium: false,
  });

  const [file, setFile] = useState(null);
  const [currentFileName, setCurrentFileName] = useState("");

  useEffect(() => {
    const fetchDataset = async () => {
      try {
        const res = await API.get(`/datasets/${id}`);
        const data = res.data?.data || res.data;

        setFormData({
          title: data.title || "",
          description: data.description || "",
          category: data.category || "General",
          tags: data.tags?.join(", ") || "",
          year: data.year || "",
          isPremium: data.isPremium || false,
        });
        setCurrentFileName(data.fileOriginalName || "No file");
      } catch (err) {
        console.error(err);
        alert("Failed to load dataset");
        navigate("/datasets");
      } finally {
        setLoading(false);
      }
    };

    fetchDataset();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const payload = new FormData();

      // Append text fields
      payload.append("title", formData.title);
      payload.append("description", formData.description);
      payload.append("category", formData.category);
      payload.append("year", formData.year || "");
      payload.append("tags", formData.tags);
      payload.append("isPremium", formData.isPremium);

      // Append file only if selected
      if (file) {
        payload.append("file", file);
      }

      // Use the new endpoint that supports file
      await API.post(`/datasets/${id}/update-with-file`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Dataset updated successfully!");
      navigate(`/datasets/${id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to update dataset: " + (err.response?.data?.message || err.message));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer mb-8 flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-8">Edit Dataset</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Current File Display */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-2">Current File</p>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{currentFileName}</span>
              </div>
            </div>

            {/* File Replacement */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Replace File (Optional)
              </label>
              <div className="cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 transition">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4 " />
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".csv,.xlsx,.xls,.json"
                  className="cursor-pointer block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
                {file && (
                  <p className="mt-3 text-sm text-green-600 ">
                    Selected: <strong>{file.name}</strong>
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-3">
                  Supported: CSV, Excel (.xlsx, .xls), JSON (max 50MB)
                </p>
              </div>
            </div>

            {/* Other Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="economy, india, 2023"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="isPremium"
                checked={formData.isPremium}
                onChange={handleChange}
                className="cursor-pointer w-5 h-5 text-indigo-600 rounded"
              />
              <label className="ml-3 text-sm font-medium text-gray-700">Premium Dataset</label>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={saving}
                className="cursor-pointer w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 disabled:opacity-70 transition-all"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}