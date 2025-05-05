
import { ReactNode } from "react";
import BottomNav from "../BottomNav";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const AuthLayout = ({ children, title, showBackButton = false }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {title && (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4 flex items-center">
          {showBackButton && (
            <button 
              onClick={() => window.history.back()}
              className="mr-3"
            >
              ←
            </button>
          )}
          <h1 className="text-xl font-semibold">{title}</h1>
        </header>
      )}
      
      <main className="flex-1 p-4 pb-20 overflow-auto">
        {children}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default AuthLayout;
