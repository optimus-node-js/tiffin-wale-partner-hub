
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to login after a delay
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="animate-fade-in text-center">
        <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.21 13.89 7 23l2.86-2.86a37.1 37.1 0 0 0 12.28-1.73S15.2 10.78 4.5 11.5c-1.4.1-2.5 1.2-2.5 2.55V16a2 2 0 0 0 2 2h3.92a7.5 7.5 0 0 1-1.72-2.82 2 2 0 0 1 2.01-2.68"></path>
            <path d="M19.5 8.5 14 13"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tiffin Wale</h1>
        <p className="text-lg text-gray-600">Partner Hub</p>
      </div>
    </div>
  );
};

export default SplashScreen;
