import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Mail, User, Calendar, CheckCircle } from "lucide-react";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-3xl font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{user?.name}</h2>
              <p className="text-gray-600">{user?.role?.toUpperCase()}</p>
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">{user?.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">Username: {user?.username || "N/A"}</span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">
                Joined: {new Date(user?.createdAt).toDateString()}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">Status: Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
