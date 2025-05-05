
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="animate-fade-in text-center">
        <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.21 13.89 7 23l2.86-2.86a37.1 37.1 0 0 0 12.28-1.73S15.2 10.78 4.5 11.5c-1.4.1-2.5 1.2-2.5 2.55V16a2 2 0 0 0 2 2h3.92a7.5 7.5 0 0 1-1.72-2.82 2 2 0 0 1 2.01-2.68"></path>
            <path d="M19.5 8.5 14 13"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3 font-heading">Tiffin Wale</h1>
        <p className="text-xl text-gray-600 font-body">Partner Hub</p>
        
        <div className="mt-8 relative">
          <div className="inline-block w-16 h-2 bg-orange-200 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
