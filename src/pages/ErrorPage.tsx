export const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <h1 className="text-9xl font-extrabold text-white mb-4 animate-bounce">
        404
      </h1>
      <p className="text-2xl text-white mb-2">Page Not Found</p>
      <p className="text-lg text-white mb-8">
        We couldn’t find the page you’re looking for.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all"
      >
        Go Home
      </a>
    </div>
  );
};
