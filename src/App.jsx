import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DatasetList from "./pages/DatasetList.jsx";
import DatasetDetail from "./pages/DatasetDetail.jsx";
import DatasetEdit from './pages/DatasetEdit.jsx'
import AdminUpload from "./pages/AdminUpload.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import NotFound from './pages/NotFound.jsx'
import './App.css'

import Agriculture from './components/Agriculture'
import Environment from "./components/Envirment.jsx";
import Health from "./components/Health.jsx";
import Education from "./components/Education.jsx";
import Finance from "./components/Finace.jsx";
import Transport from "./components/Transport.jsx";
import Economy from "./components/Economy.jsx";
import Crime from "./components/Crime.jsx";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/datasets" element={<DatasetList />} />
        <Route path="/datasets/:id" element={<DatasetDetail />} />
        <Route path="/datasets/edit/:id" element={<DatasetEdit />} />
        <Route path="/admin/upload" element={<AdminUpload />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />





        <Route path="/admin/agriculture" element={<Agriculture />} />
        <Route path="/admin/health" element={<Health />} />
        <Route path="/admin/education" element={<Education />} />
        <Route path="/admin/crime" element={<Crime />} />
        <Route path="/admin/economy" element={<Economy />} />
        <Route path="/admin/transport" element={<Transport />} />
        <Route path="/admin/environment" element={<Environment />} />
        <Route path="/admin/finance" element={<Finance />} />
    


        {/* Optional: 404 page */}
      <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;

