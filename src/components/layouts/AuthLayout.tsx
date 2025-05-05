
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {title && (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4 flex items-center shadow-sm">
          {showBackButton && (
            <button 
              onClick={() => window.history.back()}
              className="mr-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-xl font-semibold font-heading">{title}</h1>
        </header>
      )}
      
      <main className="flex-1 p-4 pb-20 overflow-auto font-body">
        {children}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default AuthLayout;
