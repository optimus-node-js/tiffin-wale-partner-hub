
import { Home, FileText, Package, User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
      <Link to="/dashboard" className={`flex flex-col items-center p-2 ${isActive('/dashboard') ? 'text-primary' : 'text-gray-500'}`}>
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link to="/dispatch" className={`flex flex-col items-center p-2 ${isActive('/dispatch') ? 'text-primary' : 'text-gray-500'}`}>
        <Package size={24} />
        <span className="text-xs mt-1">Dispatch</span>
      </Link>
      
      <Link to="/menu" className={`flex flex-col items-center p-2 ${isActive('/menu') ? 'text-primary' : 'text-gray-500'}`}>
        <Menu size={24} />
        <span className="text-xs mt-1">Menu</span>
      </Link>
      
      <Link to="/subscriptions" className={`flex flex-col items-center p-2 ${isActive('/subscriptions') ? 'text-primary' : 'text-gray-500'}`}>
        <FileText size={24} />
        <span className="text-xs mt-1">Plans</span>
      </Link>
      
      <Link to="/profile" className={`flex flex-col items-center p-2 ${isActive('/profile') ? 'text-primary' : 'text-gray-500'}`}>
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
};

export default BottomNav;
