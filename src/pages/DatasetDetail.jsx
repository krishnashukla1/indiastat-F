
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../api/axios";
// import {
//   ArrowLeft,
//   Download,
//   Calendar,
//   Database,
//   FileText,
//   Tag,
//   Lock,
//   Globe,
//   Users,
//   Clock,
//   FileDown,
//   Share2,
//   Check,
//   Eye,
//   ChevronLeft,
//   ChevronRight,
//   BarChart3,
// } from "lucide-react";
// import DataPreviewTable from "../pages/DataPreviewTable";

// export default function DatasetDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [dataset, setDataset] = useState(null);
//   const [allDatasets, setAllDatasets] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [loading, setLoading] = useState(true);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [detailRes, listRes] = await Promise.all([
//           API.get(`/datasets/${id}`),
//           API.get("/datasets?limit=100"),
//         ]);

//         const currentData = detailRes.data?.data || detailRes.data;
//         let listData = [];
//         if (listRes.data?.docs) listData = listRes.data.docs;
//         else if (listRes.data?.data) listData = listRes.data.data;
//         else if (Array.isArray(listRes.data)) listData = listRes.data;

//         setDataset(currentData);
//         setAllDatasets(listData);
//         const index = listData.findIndex((d) => d._id === id);
//         setCurrentIndex(index);
//       } catch (err) {
//         console.error("Error fetching dataset:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

  
//   const goBack = () => navigate("/datasets");
//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const goToDataset = (index) => {
//     if (index >= 0 && index < allDatasets.length) {
//       navigate(`/datasets/${allDatasets[index]._id}`);
//     }
//   };

//   const hasPrev = currentIndex > 0;
//   const hasNext = currentIndex >= 0 && currentIndex < allDatasets.length - 1;

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative">
//             <div className="w-24 h-24 border-4 border-indigo-600/30 rounded-full"></div>
//             <div className="absolute top-0 left-0 w-24 h-24 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//             <Database className="w-8 h-8 text-indigo-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//           </div>
//           <p className="text-2xl font-semibold text-gray-700 mt-8">Loading dataset...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!dataset) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
//         <div className="text-center max-w-md bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
//           <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Database className="w-12 h-12 text-red-600" />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Dataset Not Found</h2>
//           <button
//             onClick={goBack}
//             className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Datasets
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-10">

//         {/* Back Button & Share */}
//         <div className="flex items-center justify-between">
//           <button
//             onClick={goBack}
//             className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all hover:-translate-x-1"
//           >
//             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//             Back to Library
//           </button>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={copyToClipboard}
//               className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
//             >
//               {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
//               {copied ? "Copied!" : "Share"}
//             </button>
//             <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
//               ID: {dataset._id?.slice(-8)}
//             </span>
//           </div>
//         </div>

//         {/* Hero Header */}
//         <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 shadow-2xl text-white">
//           <div className="absolute inset-0 bg-grid-white/10"></div>
//           <div className="relative p-8 lg:p-12">
//             <div className="flex flex-wrap items-center gap-3 mb-6">
//               <span className={`px-5 py-2 rounded-full font-bold text-sm ${dataset.isPremium ? 'bg-yellow-400 text-yellow-900' : 'bg-emerald-400 text-emerald-900'}`}>
//                 {dataset.isPremium ? "Premium" : "Free"}
//               </span>
//               <span className="px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full font-medium">
//                 {dataset.category}
//               </span>
//               {dataset.formats?.map((f, i) => (
//                 <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm">
//                   {f.toUpperCase()}
//                 </span>
//               ))}
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               {dataset.title}
//             </h1>
//             <p className="text-xl text-white/80 max-w-4xl leading-relaxed mb-8">
//               {dataset.description}
//             </p>

//             <div className="flex flex-wrap gap-6 text-white/70">
//               <div className="flex items-center gap-2">
//                 <Eye className="w-5 h-5" />
//                 <span>{(dataset.views || 0).toLocaleString()} views</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Download className="w-5 h-5" />
//                 <span>{(dataset.downloads || 0).toLocaleString()} downloads</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-5 h-5" />
//                 <span>Updated {new Date(dataset.updatedAt).toLocaleDateString()}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards - Above Table */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <StatsCard icon={<Calendar />} label="Year" value={dataset.year || "N/A"} color="blue" />
//           <StatsCard icon={<Database />} label="Records" value={dataset.recordsCount?.toLocaleString() || "N/A"} color="indigo" />
//           <StatsCard icon={<FileText />} label="File" value={dataset.fileOriginalName} color="purple" truncate />
//           <StatsCard
//             icon={dataset.isPremium ? <Lock /> : <Globe />}
//             label="Access"
//             value={dataset.isPremium ? "Premium" : "Public"}
//             color={dataset.isPremium ? "amber" : "emerald"}
//           />
//         </div>

//         {/* Metadata + Download Card Row */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Metadata */}
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//             <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
//               <Tag className="w-5 h-5 text-indigo-600" />
//               Categories & Tags
//             </h3>
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm text-gray-500 mb-2">Category</p>
//                 <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
//                   {dataset.category}
//                 </span>
//               </div>
//               {dataset.tags?.length > 0 && (
//                 <div>
//                   <p className="text-sm text-gray-500 mb-3">Tags</p>
//                   <div className="flex flex-wrap gap-2">
//                     {dataset.tags.map((tag, i) => (
//                       <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Technical Details */}
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//             <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
//               <FileText className="w-5 h-5 text-purple-600" />
//               Technical Details
//             </h3>
//             <div className="space-y-3">
//               <DetailRow label="Size" value={dataset.fileSize ? `${(dataset.fileSize / (1024*1024)).toFixed(2)} MB` : "N/A"} />
//               <DetailRow label="Formats" value={dataset.formats?.join(", ") || "N/A"} />
//               <DetailRow label="Updated" value={new Date(dataset.updatedAt).toLocaleDateString()} />
//               <DetailRow label="Source" value={dataset.source || "Not specified"} />
//             </div>
//           </div>

//           {/* Download Card - Prominent */}
//           <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
//             <div className="text-center mb-8">
//               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Download className="w-9 h-9" />
//               </div>
//               <h3 className="text-2xl font-bold mb-2">Download Dataset</h3>
//               <p className="text-white/80">Get immediate access to the complete dataset</p>
//             </div>

//             <div className="bg-white/10 rounded-xl p-5 mb-6 backdrop-blur-sm">
//               <p className="text-sm opacity-90 mb-3">Available in</p>
//               <div className="flex flex-wrap gap-2">
//                 {dataset.formats?.map((f, i) => (
//                   <span key={i} className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
//                     {f.toUpperCase()}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* <a
//               href={`/api/datasets/${dataset._id}/download`}
//               className="block w-full text-center py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl"
//             >
//               <div className="flex items-center justify-center gap-3">
//                 <FileDown className="w-6 h-6" />
//                 Download Now
//               </div> */}

//               <a
//                      href={`http://localhost:5000/api/datasets/${dataset._id}/download`}
//                      download={dataset.fileOriginalName}
//                      className="w-full block text-center py-5 px-8 bg-white text-indigo-700 font-bold text-xl rounded-2xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
//                    >
//                      <Download className="w-8 h-8 inline-block mr-3 animate-bounce" />
//                      Download Now
//                    </a>
         
//           </div>
//         </div>

//         {/* Full Width Data Preview Table */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
//           <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
//                   <BarChart3 className="w-7 h-7 text-indigo-600" />
//                   Data Preview
//                 </h3>
//                 <p className="text-gray-600 mt-1">
//                   Showing first {dataset.preview?.length || 0} rows from{" "}
//                   <strong>{dataset.recordsCount?.toLocaleString()}</strong> total records
//                 </p>
//               </div>
//               <span className="px-6 py-3 bg-indigo-100 text-indigo-700 rounded-full font-bold">
//                 {dataset.recordsCount?.toLocaleString()} Records
//               </span>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <DataPreviewTable
//               preview={dataset.preview || []}
//               recordsCount={dataset.recordsCount || 0}
//               datasetId={dataset._id}
//             />
//           </div>
//         </div>

//         {/* Previous / Next Navigation */}
//         {allDatasets.length > 1 && (
//           <div className="grid sm:grid-cols-2 gap-6">
//             <NavigationCard direction="prev" enabled={hasPrev} dataset={hasPrev ? allDatasets[currentIndex - 1] : null} onClick={() => goToDataset(currentIndex - 1)} />
//             <NavigationCard direction="next" enabled={hasNext} dataset={hasNext ? allDatasets[currentIndex + 1] : null} onClick={() => goToDataset(currentIndex + 1)} />
//           </div>
//         )}
//         {isAdmin && (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//     <button
//       onClick={handleUpdate}
//       className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3"
//     >
//       <FileText className="w-5 h-5" />
//       Update Dataset
//     </button>

//     <button
//       onClick={handleDelete}
//       className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3"
//     >
//       <Database className="w-5 h-5" />
//       Delete Dataset
//     </button>
//   </div>
// )}
//       </div>
//     </div>
//   );
// }

// // Reusable Components
// function StatsCard({ icon, label, value, color = "blue", truncate = false }) {
//   const colors = {
//     blue: "from-blue-50 to-blue-100 text-blue-700 border-blue-200",
//     indigo: "from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200",
//     purple: "from-purple-50 to-purple-100 text-purple-700 border-purple-200",
//     amber: "from-amber-50 to-amber-100 text-amber-700 border-amber-200",
//     emerald: "from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200",
//   };

//   return (
//     <div className={`bg-gradient-to-br ${colors[color]} rounded-2xl border p-6 hover:shadow-lg transition-shadow`}>
//       <div className="flex items-center justify-between mb-3">
//         <div className={`p-3 rounded-xl bg-white/60 ${colors[color].split(" ")[0]}`}>
//           {icon}
//         </div>
//       </div>
//       <p className="text-sm font-medium text-gray-600">{label}</p>
//       <p className={`text-2xl font-bold mt-1 ${truncate ? "truncate" : ""}`}>{value || "—"}</p>
//     </div>
//   );
// }

// function DetailRow({ label, value }) {
//   return (
//     <div className="flex justify-between items-center py-2">
//       <span className="text-sm text-gray-600">{label}</span>
//       <span className="font-medium text-gray-900">{value}</span>
//     </div>
//   );
// }

// function NavigationCard({ direction, enabled, dataset, onClick }) {
//   const isPrev = direction === "prev";
//   return (
//     <button
//       onClick={onClick}
//       disabled={!enabled}
//       className={`group p-6 bg-white rounded-2xl shadow-lg border ${enabled ? "hover:shadow-xl hover:border-indigo-200" : "opacity-60"} transition-all text-left`}
//     >
//       <div className={`flex items-center gap-4 ${!isPrev && "flex-row-reverse text-right"}`}>
//         <div className={`p-4 rounded-xl ${enabled ? (isPrev ? "bg-blue-50 group-hover:bg-blue-100" : "bg-purple-50 group-hover:bg-purple-100") : "bg-gray-100"}`}>
//           {isPrev ? <ChevronLeft className="w-6 h-6 text-blue-600" /> : <ChevronRight className="w-6 h-6 text-purple-600" />}
//         </div>
//         <div>
//           <p className="text-sm font-medium text-gray-500 mb-1">
//             {isPrev ? "Previous Dataset" : "Next Dataset"}
//           </p>
//           <p className={`font-bold text-lg ${enabled ? "text-gray-900" : "text-gray-400"} line-clamp-2`}>
//             {enabled ? dataset?.title : "No more"}
//           </p>
//         </div>
//       </div>
//     </button>
//   );
// }

//================

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext"; // ← Adjust path if needed
import {
  ArrowLeft,
  Download,
  Calendar,
  Database,
  FileText,
  Tag,
  Lock,
  Globe,
  Clock,
  FileDown,
  Share2,
  Check,
  Eye,
  ChevronLeft,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import DataPreviewTable from "../pages/DataPreviewTable";

export default function DatasetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); // Get current user from auth context
  const isAdmin = user?.role === "admin";

  const [dataset, setDataset] = useState(null);
  const [allDatasets, setAllDatasets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [detailRes, listRes] = await Promise.all([
          API.get(`/datasets/${id}`),
          API.get("/datasets?limit=100"),
        ]);

        const currentData = detailRes.data?.data || detailRes.data;
        let listData = [];
        if (listRes.data?.docs) listData = listRes.data.docs;
        else if (listRes.data?.data) listData = listRes.data.data;
        else if (Array.isArray(listRes.data)) listData = listRes.data;

        setDataset(currentData);
        setAllDatasets(listData);
        const index = listData.findIndex((d) => d._id === id);
        setCurrentIndex(index);
      } catch (err) {
        console.error("Error fetching dataset:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this dataset? This action cannot be undone.")) {
      return;
    }

    try {
      await API.delete(`/datasets/${id}`);
      alert("Dataset deleted successfully");
      navigate("/datasets");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete dataset");
    }
  };

  const handleUpdate = () => {
    // Navigate to edit page (create this route separately)
    navigate(`/datasets/edit/${id}`);
  };

  const goBack = () => navigate("/datasets");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const goToDataset = (index) => {
    if (index >= 0 && index < allDatasets.length) {
      navigate(`/datasets/${allDatasets[index]._id}`);
    }
  };

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < allDatasets.length - 1;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-indigo-600/30 rounded-full"></div>
            <div className="absolute top-0 left-0 w-24 h-24 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <Database className="w-8 h-8 text-indigo-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-2xl font-semibold text-gray-700 mt-8">Loading dataset...</p>
        </div>
      </div>
    );
  }

  if (!dataset) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
        <div className="text-center max-w-md bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Database className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dataset Not Found</h2>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Datasets
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-10">
        {/* Back Button & Share */}
        <div className="flex items-center justify-between">
          <button
            onClick={goBack}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="cursor-pointer w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Library
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
              {copied ? "Copied!" : "Share"}
            </button>
            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              ID: {dataset._id?.slice(-8)}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 shadow-2xl text-white">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative p-8 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`px-5 py-2 rounded-full font-bold text-sm ${
                  dataset.isPremium ? "bg-yellow-400 text-yellow-900" : "bg-emerald-400 text-emerald-900"
                }`}
              >
                {dataset.isPremium ? "Premium" : "Free"}
              </span>
              <span className="px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                {dataset.category}
              </span>
              {dataset.formats?.map((f, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {f.toUpperCase()}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {dataset.title}
            </h1>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed mb-8">
              {dataset.description || "No description available."}
            </p>

            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>{(dataset.views || 0).toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>{(dataset.downloads || 0).toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Updated {new Date(dataset.updatedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatsCard icon={<Calendar />} label="Year" value={dataset.year || "N/A"} color="blue" />
          <StatsCard icon={<Database />} label="Records" value={dataset.recordsCount?.toLocaleString() || "N/A"} color="indigo" />
          <StatsCard icon={<FileText />} label="File" value={dataset.fileOriginalName} color="purple" truncate />
          <StatsCard
            icon={dataset.isPremium ? <Lock /> : <Globe />}
            label="Access"
            value={dataset.isPremium ? "Premium" : "Public"}
            color={dataset.isPremium ? "amber" : "emerald"}
          />
        </div>

        {/* Metadata + Technical + Download */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Metadata */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
              <Tag className="w-5 h-5 text-indigo-600" />
              Categories & Tags
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Category</p>
                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                  {dataset.category}
                </span>
              </div>
              {dataset.tags?.length > 0 && (
                <div>
                  <p className="text-sm text-gray-500 mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {dataset.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
              <FileText className="w-5 h-5 text-purple-600" />
              Technical Details
            </h3>
            <div className="space-y-3">
              <DetailRow label="Size" value={dataset.fileSize ? `${(dataset.fileSize / (1024 * 1024)).toFixed(2)} MB` : "N/A"} />
              <DetailRow label="Formats" value={dataset.formats?.join(", ") || "N/A"} />
              <DetailRow label="Updated" value={new Date(dataset.updatedAt).toLocaleDateString()} />
              <DetailRow label="Source" value={dataset.source || "Not specified"} />
            </div>
          </div>

          {/* Download Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Download Dataset</h3>
              <p className="text-white/80">Get immediate access to the complete dataset</p>
            </div>

            <div className="bg-white/10 rounded-xl p-5 mb-6 backdrop-blur-sm">
              <p className="text-sm opacity-90 mb-3">Available in</p>
              <div className="flex flex-wrap gap-2">
                {dataset.formats?.map((f, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                    {f.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`http://localhost:5000/api/datasets/${dataset._id}/download`}
              download={dataset.fileOriginalName}
              className="w-full block text-center py-5 px-8 bg-white text-indigo-700 font-bold text-xl rounded-2xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Download className="w-8 h-8 inline-block mr-3 animate-bounce" />
              Download Now
            </a>
          </div>
        </div>

        {/* Data Preview Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <BarChart3 className="w-7 h-7 text-indigo-600" />
                  Data Preview
                </h3>
                <p className="text-gray-600 mt-1">
                  Showing first {dataset.preview?.length || 0} rows from{" "}
                  <strong>{dataset.recordsCount?.toLocaleString()}</strong> total records
                </p>
              </div>
              <span className="px-6 py-3 bg-indigo-100 text-indigo-700 rounded-full font-bold">
                {dataset.recordsCount?.toLocaleString()} Records
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <DataPreviewTable
              preview={dataset.preview || []}
              recordsCount={dataset.recordsCount || 0}
              datasetId={dataset._id}
            />
          </div>
        </div>

        {/* Admin Actions - Only for admins */}
        {isAdmin && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={handleUpdate}
              className="cursor-pointer px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3"
            >
              <FileText className="w-5 h-5" />
              Update Dataset
            </button>

            <button
              onClick={handleDelete}
              className="cursor-pointer px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3"
            >
              <Database className="w-5 h-5" />
              Delete Dataset
            </button>
          </div>
        )}

        {/* Previous / Next Navigation */}
        {allDatasets.length > 1 && (
          <div className="grid sm:grid-cols-2 gap-6">
            <NavigationCard
              direction="prev"
              enabled={hasPrev}
              dataset={hasPrev ? allDatasets[currentIndex - 1] : null}
              onClick={() => goToDataset(currentIndex - 1)}
            />
            <NavigationCard
              direction="next"
              enabled={hasNext}
              dataset={hasNext ? allDatasets[currentIndex + 1] : null}
              onClick={() => goToDataset(currentIndex + 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Reusable Components
function StatsCard({ icon, label, value, color = "blue", truncate = false }) {
  const colors = {
    blue: "from-blue-50 to-blue-100 text-blue-700 border-blue-200",
    indigo: "from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200",
    purple: "from-purple-50 to-purple-100 text-purple-700 border-purple-200",
    amber: "from-amber-50 to-amber-100 text-amber-700 border-amber-200",
    emerald: "from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} rounded-2xl border p-6 hover:shadow-lg transition-shadow`}>
      <div className="flex items-center justify-between mb-3">
        <div className={`p-3 rounded-xl bg-white/60 ${colors[color].split(" ")[0]}`}>
          {icon}
        </div>
      </div>
      <p className="text-sm font-medium text-gray-600">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${truncate ? "truncate" : ""}`}>{value || "—"}</p>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}

function NavigationCard({ direction, enabled, dataset, onClick }) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={`cursor-pointer group p-6 bg-white rounded-2xl shadow-lg border ${
        enabled ? "hover:shadow-xl hover:border-indigo-200" : "opacity-60"
      } transition-all text-left`}
    >
      <div className={`flex items-center gap-4 ${!isPrev && "flex-row-reverse text-right"}`}>
        <div
          className={`p-4 rounded-xl ${
            enabled
              ? isPrev
                ? "bg-blue-50 group-hover:bg-blue-100"
                : "bg-purple-50 group-hover:bg-purple-100"
              : "bg-gray-100"
          }`}
        >
          {isPrev ? <ChevronLeft className="w-6 h-6 text-blue-600" /> : <ChevronRight className="w-6 h-6 text-purple-600" />}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            {isPrev ? "Previous Dataset" : "Next Dataset"}
          </p>
          <p className={`font-bold text-lg ${enabled ? "text-gray-900" : "text-gray-400"} line-clamp-2`}>
            {enabled ? dataset?.title : "No more"}
          </p>
        </div>
      </div>
    </button>
  );
}

