
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Coffee } from "lucide-react";

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, would validate and authenticate
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300 p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 backdrop-blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-white/10 backdrop-blur-xl"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl"></div>
      </div>
      
      <div className="w-full max-w-md space-y-8 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl animate-fade-in z-10 border border-white/50">
        <div className="text-center">
          <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg transform hover:rotate-6 transition-transform duration-300">
            <Coffee size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 font-heading">Partner Login</h2>
          <p className="text-gray-600 mt-2 font-body">Welcome back! Manage your tiffin business</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-5">
            <div className="relative">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1 font-body">
                Mobile Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-primary" />
                </div>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="pl-10 appearance-none relative block w-full border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base font-body bg-white/80"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 font-body">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-primary" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 appearance-none relative block w-full border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base font-body bg-white/80"
                  required
                />
              </div>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-primary hover:underline font-body">
              Forgot Password?
            </a>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg"
            >
              Login
            </Button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 font-body">
            New here?{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
