import { useState, useEffect } from "react";

const ErrorPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-700 to-black text-white">
      {isLoading ? (
        <div className="text-center font-bold text-2xl">Loading...</div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            We're experiencing difficulties.
          </h2>
          <p className="text-lg">
            Sorry, we're having trouble fetching data from TMDB. Please try
            again later.
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
