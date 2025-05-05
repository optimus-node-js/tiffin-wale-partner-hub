
import { ReactNode } from "react";
import BottomNav from "../BottomNav";
import { ArrowLeft } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const AuthLayout = ({ children, title, showBackButton = false }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 font-body">
      {title && (
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center shadow-sm">
          {showBackButton && (
            <button 
              onClick={() => window.history.back()}
              className="mr-3 p-2 rounded-full hover:bg-orange-100 transition-colors text-gray-700"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-xl font-semibold font-heading text-gray-800">{title}</h1>
        </header>
      )}
      
      <main className="flex-1 p-5 pb-20 overflow-auto">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default AuthLayout;
