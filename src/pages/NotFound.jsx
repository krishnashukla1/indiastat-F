export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <a href="/" className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Back to Home
        </a>
      </div>
    </div>
  );
}