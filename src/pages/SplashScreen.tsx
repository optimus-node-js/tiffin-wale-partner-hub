
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 backdrop-blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-white/10 backdrop-blur-xl"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl"></div>
      </div>
      
      <div className="animate-fade-in text-center z-10 glass-effect p-10 rounded-3xl shadow-2xl">
        <div className="bg-primary text-white w-28 h-28 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg transform hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.21 13.89 7 23l2.86-2.86a37.1 37.1 0 0 0 12.28-1.73S15.2 10.78 4.5 11.5c-1.4.1-2.5 1.2-2.5 2.55V16a2 2 0 0 0 2 2h3.92a7.5 7.5 0 0 1-1.72-2.82 2 2 0 0 1 2.01-2.68"></path>
            <path d="M19.5 8.5 14 13"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3 font-heading">Tiffin Wale</h1>
        <p className="text-xl text-gray-700 font-body">Partner Hub</p>
        
        <div className="mt-8 relative">
          <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full loading-animation"></div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
          }
          
          .loading-animation {
            width: 100%;
            animation: loading 1.5s ease-in-out infinite;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(10px);
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
