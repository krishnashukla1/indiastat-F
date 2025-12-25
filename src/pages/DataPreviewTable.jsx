
// src/pages/DataPreviewTable.jsx
// import { useState, useMemo } from "react";
// import { Database, Search, ChevronLeft, ChevronRight } from "lucide-react";

// const ITEMS_PER_PAGE = 10;


// export default function DataPreviewTable({ preview = [], recordsCount = 0, datasetId }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Filter data based on search
//   const filteredData = useMemo(() => {
//     if (!searchTerm.trim()) return preview;

//     const lowerSearch = searchTerm.toLowerCase();
//     return preview.filter((row) =>
//       Object.values(row).some((value) =>
//         String(value).toLowerCase().includes(lowerSearch)
//       )
//     );
//   }, [preview, searchTerm]);

//   // Pagination logic
//   const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
//   const paginatedData = useMemo(() => {
//     const start = (currentPage - 1) * ITEMS_PER_PAGE;
//     return filteredData.slice(start, start + ITEMS_PER_PAGE);
//   }, [filteredData, currentPage]);

//   const goToPage = (page) => {
//     setCurrentPage(Math.max(1, Math.min(page, totalPages)));
//   };

//   if (!preview || preview.length === 0) {
//     return (
//       <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center py-16">
//         <Database className="w-20 h-20 text-gray-300 mx-auto mb-6" />
//         <p className="text-xl text-gray-500">No preview data available</p>
//       </div>
//     );
//   }

//   const columns = Object.keys(preview[0]);

//   return (
//     <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//         <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//           <Database className="w-8 h-8 text-indigo-600" />
//           Data Preview
//         </h3>

//         <div className="flex items-center gap-4">
//           <span className="px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold shadow-sm">
//             {recordsCount.toLocaleString()} total records
//           </span>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="mb-8">
//         <div className="relative max-w-md">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search in table... (Name, Category, Product, State, etc.)"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1); // Reset to first page on search
//             }}
//             className="w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-lg"
//           />
//         </div>
//         {searchTerm && (
//           <p className="mt-3 text-sm text-gray-600">
//             Found <span className="font-bold text-indigo-600">{filteredData.length}</span> matching rows
//           </p>
//         )}
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-2xl bg-white">
//         <table className="w-full text-sm">
//           <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white uppercase tracking-wider">
//             <tr>
//               {columns.map((col) => (
//                 <th
//                   key={col}
//                   className="px-6 py-5 text-left font-bold whitespace-nowrap"
//                 >
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {paginatedData.map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
//               >
//                 {columns.map((col) => (
//                   <td key={col} className="px-6 py-5 text-gray-700">
//                     <span className="font-medium">{row[col]}</span>
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <p className="text-gray-600 font-medium">
//             Showing{" "}
//             <span className="text-indigo-600 font-bold">
//               {(currentPage - 1) * ITEMS_PER_PAGE + 1}
//             </span>{" "}
//             to{" "}
//             <span className="text-indigo-600 font-bold">
//               {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)}
//             </span>{" "}
//             of{" "}
//             <span className="text-indigo-600 font-bold">{filteredData.length}</span> results
//           </p>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => goToPage(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2
//                 disabled:opacity-50 disabled:cursor-not-allowed
//                 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md"
//             >
//               <ChevronLeft className="w-5 h-5" />
//               Prev
//             </button>

//             {/* Page Numbers */}
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => goToPage(page)}
//                 className={`w-12 h-12 rounded-xl font-bold transition-all
//                   ${currentPage === page
//                     ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110"
//                     : "bg-white border border-gray-300 hover:bg-indigo-50 hover:shadow-md"
//                   }`}
//               >
//                 {page}
//               </button>
//             ))}

//             <button
//               onClick={() => goToPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2
//                 disabled:opacity-50 disabled:cursor-not-allowed
//                 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md"
//             >
//               Next
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Download CTA */}
//       <div className="mt-10 text-center">
//         <p className="text-lg text-gray-700">
//           Want all <strong>{recordsCount.toLocaleString()} records</strong>?{" "}
//           <a
//             href={`http://localhost:5000/api/datasets/${datasetId}/download`}
//             className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xl hover:underline"
//           >
//             Download Full Dataset
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

//==========correct=================



// src/pages/DataPreviewTable.jsx
import { useState, useMemo } from "react";
import { Database, Search, ChevronLeft, ChevronRight, Download } from "lucide-react";

const ITEMS_PER_PAGE = 10;

// Correct Excel serial date to JavaScript Date
// Excel: 1900-01-01 = 1 (with leap year bug: Feb 29, 1900 doesn't exist)
// We adjust by subtracting 1 day for dates >= March 1, 1900
function excelSerialToDate(serial) {
    if (typeof serial !== "number" || serial < 1 || serial > 2958465) return null; // ~9999-12-31

    // Base offset: days from 1900-01-01 to 1970-01-01 = 25569
    // But Excel wrongly includes Feb 29, 1900 → subtract 1 day for dates after Feb 28, 1900
    let utcDays = Math.floor(serial) - 25569;
    if (serial >= 60) utcDays -= 1; // Adjust for fictitious leap day

    const date = new Date(Date.UTC(1970, 0, 1) + utcDays * 86400000);

    // Fractional part = time of day
    const fraction = serial - Math.floor(serial);
    if (fraction > 0) {
        date.setUTCMilliseconds(fraction * 86400000);
    }

    return date;
}

function formatValue(value) {
    if (value === null || value === undefined) return <em className="text-gray-400">null</em>;
    if (value === "") return <span className="text-gray-400">—</span>;

    // Detect Excel serial dates (roughly 1900–2100 range)
    if (typeof value === "number" && value >= 1 && value < 2958466) {
        // Heuristic: dates are usually between ~35000 (1995) and ~90000 (2140)
        if (value > 35000 && value < 100000) {
            const date = excelSerialToDate(value);
            if (date && !isNaN(date)) {
                return date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                });
            }
        }
    }

    // Format large numbers nicely
    if (typeof value === "number" && !Number.isInteger(value)) {
        return value.toLocaleString(undefined, { maximumFractionDigits: 6 });
    }

    return String(value);
}

export default function DataPreviewTable({ preview = [], recordsCount = 0, datasetId }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Global search across all cells
    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) return preview;

        const term = searchTerm.toLowerCase();
        return preview.filter((row) =>
            Object.values(row).some((val) => {
                if (val === null || val === undefined) return false;
                return String(val).toLowerCase().includes(term);
            })
        );
    }, [preview, searchTerm]);

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredData.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredData, currentPage]);

    const goToPage = (page) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages || 1)));
    };

    // Reset page on search
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    if (!preview || preview.length === 0) {
        return (
            <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center py-20">
                <Database className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <p className="text-2xl text-gray-500 font-medium">No preview data available</p>
                <p className="text-gray-400 mt-2">Upload a dataset to see a preview here.</p>
            </div>
        );
    }

    const columns = Object.keys(preview[0] || {});




    return (
        <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
            {/* Header */}
            {/* Top Bar Section */}
            <div className="w-full bg-white p-5 mb-8 rounded-2xl shadow-md border border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-6">

                {/* LEFT — SEARCH BOX */}
                {/* <div className="relative w-full max-w-md"> */}
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search across all columns..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full pl-12 pr-6 py-3 bg-gray-50 border border-gray-300 rounded-xl 
                       focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all 
                       outline-none text-base placeholder-gray-400"
                    />
                    {searchTerm && (
                        <p className="text-sm mt-2 text-gray-500">
                            Found <span className="font-semibold text-indigo-600">{filteredData.length}</span> matching record(s)
                        </p>
                    )}
                {/* </div> */}

                {/* RIGHT — RECORDS COUNT + PAGINATION */}
                {/* <div className="flex flex-col md:flex-row items-center gap-4">

              //RECORD COUNT BADGE
                    <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 
                         rounded-full text-sm font-semibold shadow">
                        {recordsCount.toLocaleString()} total records
                    </span>

                // PAGINATION
                    <div className="flex items-center gap-2">

                       //Prev Button 
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-2 rounded-lg text-sm font-medium border transition 
                    ${currentPage === 1
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700"}
                `}
                        >
                            Prev
                        </button>

                     // Page Numbers 
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => goToPage(page)}
                                    className={`w-10 h-10 rounded-lg text-sm font-semibold border transition 
                            ${currentPage === page
                                            ? "bg-indigo-600 text-white border-indigo-600"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                        `}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                    //Next Button 
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-2 rounded-lg text-sm font-medium border transition 
                    ${currentPage === totalPages
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700"}
                `}
                        >
                            Next
                        </button>
                    </div>
                </div> */}



            </div>


            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xl bg-white">
                <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white uppercase tracking-wider">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col}
                                    className="px-6 py-5 text-left font-semibold whitespace-nowrap"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {paginatedData.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
                            >
                                {columns.map((col) => (
                                    <td key={col} className="px-6 py-5 text-gray-700">
                                        <span className="font-medium">{formatValue(row[col])}</span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-gray-600 font-medium">
                        Showing{" "}
                        <span className="text-indigo-600 font-bold">
                            {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                        </span>{" "}
                        –{" "}
                        <span className="text-indigo-600 font-bold">
                            {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)}
                        </span>{" "}
                        of{" "}
                        <span className="text-indigo-600 font-bold">{filteredData.length}</span> results
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2
                disabled:opacity-50 disabled:cursor-not-allowed
                bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md disabled:hover:bg-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Previous
                        </button>

                        {/* Page numbers – limit to reasonable amount */}
                        {(() => {
                            const pages = [];
                            const maxButtons = 7;
                            let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
                            let endPage = Math.min(totalPages, startPage + maxButtons - 1);

                            if (endPage - startPage + 1 < maxButtons) {
                                startPage = Math.max(1, endPage - maxButtons + 1);
                            }

                            for (let i = startPage; i <= endPage; i++) {
                                pages.push(
                                    <button
                                        key={i}
                                        onClick={() => goToPage(i)}
                                        className={`w-12 h-12 rounded-xl font-bold transition-all
                      ${currentPage === i
                                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                                                : "bg-white border border-gray-300 hover:bg-indigo-50 hover:shadow-md"
                                            }`}
                                    >
                                        {i}
                                    </button>
                                );
                            }
                            return pages;
                        })()}

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2
                disabled:opacity-50 disabled:cursor-not-allowed
                bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md disabled:hover:bg-white"
                        >
                            Next
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

            {/* Download CTA */}
            {datasetId && (
                <div className="mt-12 text-center py-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                    <p className="text-xl text-gray-700 mb-4">
                        Want the full dataset with{" "}
                        <strong className="text-indigo-700">{recordsCount.toLocaleString()} records</strong>?
                    </p>
                    {/* <a
            href={`/api/datasets/${datasetId}/download`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl transition-all hover:scale-105"
          >
            <Download className="w-6 h-6" />
            Download Full Dataset
          </a> */}


                    <a
                        href={`http://localhost:5000/api/datasets/${datasetId}/download`}
                        download={datasetId.fileOriginalName}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl transition-all hover:scale-105"
                    >
                        <Download className="w-6 h-6" />
                        Download Full Dataset
                    </a>

                </div>
            )}
        </div>
    );
}

//============with pagination===========

// // src/pages/DataPreviewTable.jsx
// import { useState, useMemo } from "react";
// import { Database, Search, ChevronLeft, ChevronRight, Download } from "lucide-react";

// const ITEMS_PER_PAGE = 10;

// // Accurate Excel serial → JS Date conversion (handles 1900 leap year bug)
// function excelSerialToDate(serial) {
//   if (typeof serial !== "number" || serial < 1 || serial > 2958465) return null;

//   let days = Math.floor(serial) - 25569;
//   if (serial >= 60) days -= 1; // Excel wrongly thinks 1900 was a leap year

//   const date = new Date(Date.UTC(1970, 0, 1) + days * 86400000);

//   // Handle time fraction
//   const fraction = serial - Math.floor(serial);
//   if (fraction > 0) {
//     date.setUTCMilliseconds(fraction * 86400000);
//   }

//   return date;
// }

// function formatValue(value) {
//   if (value === null || value === undefined) return <em className="text-gray-400">null</em>;
//   if (value === "") return <span className="text-gray-400">—</span>;

//   // Excel date detection
//   if (typeof value === "number" && value >= 35000 && value < 200000) {
//     const date = excelSerialToDate(value);
//     if (date && !isNaN(date)) {
//       return date.toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       });
//     }
//   }

//   if (typeof value === "number") {
//     return value.toLocaleString();
//   }

//   return String(value);
// }

// export default function DataPreviewTable({ preview = [], recordsCount = 0, datasetId }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Search filtering
//   const filteredData = useMemo(() => {
//     if (!searchTerm.trim()) return preview;
//     const term = searchTerm.toLowerCase();
//     return preview.filter((row) =>
//       Object.values(row).some((val) =>
//         val != null && String(val).toLowerCase().includes(term)
//       )
//     );
//   }, [preview, searchTerm]);

//   // Pagination
//   const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));
//   const paginatedData = useMemo(() => {
//     const start = (currentPage - 1) * ITEMS_PER_PAGE;
//     return filteredData.slice(start, start + ITEMS_PER_PAGE);
//   }, [filteredData, currentPage]);

//   const goToPage = (page) => {
//     setCurrentPage(Math.max(1, Math.min(page, totalPages)));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1); // Reset to first page
//   };

//   if (!preview || preview.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <Database className="w-20 h-20 text-gray-300 mx-auto mb-6" />
//         <p className="text-2xl font-medium text-gray-500">No preview data available</p>
//         <p className="text-gray-400 mt-2">The dataset may be empty or still processing.</p>
//       </div>
//     );
//   }

//   const columns = Object.keys(preview[0]);

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
//         <div>
//           <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//             <Database className="w-9 h-9 text-indigo-600" />
//             Data Preview
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Showing first {preview.length} of{" "}
//             <strong className="text-indigo-600">{recordsCount.toLocaleString()}</strong> total records
//           </p>
//         </div>

//         {/* Search */}
//         <div className="relative w-full sm:w-96">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search in table..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-base"
//           />
//         </div>
//       </div>

//       {searchTerm && (
//         <p className="text-sm text-gray-600">
//           Found <span className="font-bold text-indigo-600">{filteredData.length}</span> matching result{filteredData.length !== 1 ? "s" : ""}
//         </p>
//       )}

//       {/* Table + Pagination */}
//       <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white uppercase tracking-wider">
//               <tr>
//                 {columns.map((col) => (
//                   <th key={col} className="px-6 py-5 text-left font-semibold whitespace-nowrap">
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {paginatedData.map((row, i) => (
//                 <tr
//                   key={i}
//                   className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
//                 >
//                   {columns.map((col) => (
//                     <td key={col} className="px-6 py-5 text-gray-700">
//                       <span className="font-medium">{formatValue(row[col])}</span>
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="border-t border-gray-200 bg-gray-50 px-6 py-5">
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//               <p className="text-sm text-gray-600 font-medium">
//                 Showing{" "}
//                 <span className="font-bold text-indigo-600">
//                   {(currentPage - 1) * ITEMS_PER_PAGE + 1}
//                 </span>{" "}
//                 to{" "}
//                 <span className="font-bold text-indigo-600">
//                   {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)}
//                 </span>{" "}
//                 of <span className="font-bold text-indigo-600">{filteredData.length}</span> results
//               </p>

//               <div className="flex items-center gap-2">
//                 {/* Prev */}
//                 <button
//                   onClick={() => goToPage(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white border border-gray-300 hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-md"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                   Previous
//                 </button>

//                 {/* Smart Page Numbers */}
//                 <div className="flex items-center gap-1">
//                   {(() => {
//                     const pages = [];
//                     const max = 7;
//                     let start = Math.max(1, currentPage - 3);
//                     let end = Math.min(totalPages, currentPage + 3);

//                     if (currentPage <= 4) end = Math.min(totalPages, max);
//                     if (currentPage > totalPages - 4) start = Math.max(1, totalPages - max + 1);

//                     if (start > 1) {
//                       pages.push(
//                         <button key={1} onClick={() => goToPage(1)} className="w-11 h-11 rounded-xl font-semibold border border-gray-300 bg-white hover:bg-indigo-50">
//                           1
//                         </button>
//                       );
//                       if (start > 2)
//                         pages.push(<span key="s" className="px-2 text-gray-500">...</span>);
//                     }

//                     for (let i = start; i <= end; i++) {
//                       pages.push(
//                         <button
//                           key={i}
//                           onClick={() => goToPage(i)}
//                           className={`w-11 h-11 rounded-xl font-bold transition-all ${
//                             currentPage === i
//                               ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
//                               : "bg-white border border-gray-300 hover:bg-indigo-50 hover:shadow-md"
//                           }`}
//                         >
//                           {i}
//                         </button>
//                       );
//                     }

//                     if (end < totalPages) {
//                       if (end < totalPages - 1)
//                         pages.push(<span key="e" className="px-2 text-gray-500">...</span>);
//                       pages.push(
//                         <button key={totalPages} onClick={() => goToPage(totalPages)} className="w-11 h-11 rounded-xl font-semibold border border-gray-300 bg-white hover:bg-indigo-50">
//                           {totalPages}
//                         </button>
//                       );
//                     }

//                     return pages;
//                   })()}
//                 </div>

//                 {/* Next */}
//                 <button
//                   onClick={() => goToPage(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white border border-gray-300 hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-md"
//                 >
//                   Next
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Download CTA */}
//       {datasetId && (
//         <div className="text-center py-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
//           <p className="text-xl text-gray-700 mb-6">
//             Want the full dataset with{" "}
//             <strong className="text-indigo-700 font-bold">{recordsCount.toLocaleString()} records</strong>?
//           </p>
//           <a
//             href={`/api/datasets/${datasetId}/download`}
//             className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
//           >
//             <Download className="w-7 h-7" />
//             Download Full Dataset
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }