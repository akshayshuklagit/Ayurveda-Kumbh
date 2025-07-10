import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
