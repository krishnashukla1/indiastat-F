// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [openDropdown, setOpenDropdown] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-blue-600">
//               IndiaStatClone
//             </Link>
//           </div>

//           {/* Links */}
//           <div className="flex items-center space-x-4">
//             <Link
//               to="/"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               Home
//             </Link>
//             <Link
//               to="/datasets"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               Datasets
//             </Link>

//             {user ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setOpenDropdown(!openDropdown)}
//                   className="flex items-center text-gray-700 hover:text-blue-600 transition focus:outline-none"
//                 >
//                   {user.name} <span className="ml-1">&#x25BC;</span>
//                 </button>

//                 {openDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
//                     {user.role === "admin" && (
//                       <Link
//                         to="/admin/upload"
//                         className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                         onClick={() => setOpenDropdown(false)}
//                       >
//                         Admin Upload
//                       </Link>
//                     )}
//                     <Link
//                       to="/profile"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       onClick={() => setOpenDropdown(false)}
//                     >
//                       Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-gray-700 hover:text-blue-600 transition"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="text-gray-700 hover:text-blue-600 transition"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

//=====================stylish===========


import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { 
  Home, 
  Database, 
  User, 
  LogOut, 
  UploadCloud, 
  Settings, 
  ChevronDown, 
  Menu, 
  X,
  Shield
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setOpenDropdown(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                    DataSphere
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Premium Data Hub</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl font-medium transition-all duration-300 group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Home
              </Link>
              
              <Link
                to="/datasets"
                className="flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl font-medium transition-all duration-300 group"
              >
                <Database className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Datasets
              </Link>

              {user ? (
                <div className="relative ml-2">
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="cursor-pointer flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-indigo-50 border border-gray-200 hover:border-blue-200 rounded-xl transition-all duration-300 group min-w-[180px]"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="relative">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                          {user.name?.charAt(0).toUpperCase() || "U"}
                        </div>
                        {user.role === "admin" && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                            <Shield className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {openDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fadeIn">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      
                      <div className="py-2">
                        {user.role === "admin" && (
                          <Link
                            to="/admin/upload"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                            onClick={() => setOpenDropdown(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
                              <UploadCloud className="w-4 h-4 text-amber-600" />
                            </div>
                            <span className="font-medium">Admin Dashboard</span>
                          </Link>
                        )}
                        
                        <Link
                          to="/profile"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                          onClick={() => setOpenDropdown(false)}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                            <User className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-medium">My Profile</span>
                        </Link>
                        
                        <Link
                          to="/settings"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                          onClick={() => setOpenDropdown(false)}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg flex items-center justify-center">
                            <Settings className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="font-medium">Settings</span>
                        </Link>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg flex items-center justify-center">
                            <LogOut className="w-4 h-4 text-red-600" />
                          </div>
                          <span className="font-medium">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3 ml-4">
                  <Link
                    to="/login"
                    className="px-6 py-2.5 text-gray-700 hover:text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-800 transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slideDown">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                Home
              </Link>
              
              <Link
                to="/datasets"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Database className="w-5 h-5" />
                Datasets
              </Link>

              {user ? (
                <>
                  {user.role === "admin" && (
                    <Link
                      to="/admin/upload"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <UploadCloud className="w-5 h-5" />
                      Admin Upload
                    </Link>
                  )}
                  
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    Profile
                  </Link>
                  
                  <Link
                    to="/settings"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="w-5 h-5" />
                    Settings
                  </Link>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    Login
                  </Link>
                  
                  <Link
                    to="/register"
                    className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-medium transition-colors text-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Create Account
                  </Link>
                </>
              )}
            </div>
            
            {user && (
              <div className="px-4 py-4 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{user.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Dropdown Overlay */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpenDropdown(false)}
        />
      )}

    
    </>
  );
}