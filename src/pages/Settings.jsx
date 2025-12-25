import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";

export default function Settings() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const saveSettings = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put("/auth/update", { name, password });
      setMessage(res.data.message || "Settings updated successfully");
    } catch (err) {
      setMessage("Failed to update settings");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Account Settings</h1>

        {message && (
          <p className="mb-4 p-3 rounded bg-blue-50 border border-blue-200 text-blue-700">
            {message}
          </p>
        )}

        <form
          onSubmit={saveSettings}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-200 space-y-6"
        >
          {/* Update Name */}
          <div>
            <label className="font-semibold text-gray-700 block mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Update Password */}
          <div>
            <label className="font-semibold text-gray-700 block mb-1">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
            <p className="text-gray-500 text-sm mt-1">Leave empty to keep current password</p>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Danger Zone</h2>
          <p className="text-gray-700 mb-4">Delete your account permanently.</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
