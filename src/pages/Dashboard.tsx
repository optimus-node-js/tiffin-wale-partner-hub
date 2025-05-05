
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/layouts/AuthLayout";
import { stats } from "@/data/dummyData";
import { Link } from "react-router-dom";
import { Clock, Package, FileText, Settings, Users, Coffee } from "lucide-react";

const Dashboard = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <AuthLayout>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-5 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Hello, Spice Garden!</h1>
          <p className="text-gray-600">{formattedDate}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-none shadow-md">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full mb-2">
              <Clock size={20} />
            </div>
            <span className="text-2xl font-bold">{stats.todaysOrders}</span>
            <span className="text-xs text-gray-600 text-center">Today's Orders</span>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-none shadow-md">
            <div className="bg-green-100 text-green-500 p-3 rounded-full mb-2">
              <Package size={20} />
            </div>
            <span className="text-2xl font-bold">{stats.tiffinsDispatched}</span>
            <span className="text-xs text-gray-600 text-center">Tiffins Sent</span>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-none shadow-md">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full mb-2">
              <Clock size={20} />
            </div>
            <span className="text-2xl font-bold">{stats.pendingDeliveries}</span>
            <span className="text-xs text-gray-600 text-center">Pending</span>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Coffee size={20} className="mr-2 text-primary" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/dispatch" className="block w-full transform transition-all duration-300 hover:scale-105">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 border-none shadow-lg rounded-xl">
                <Package size={24} />
                <span>Dispatch Tiffins</span>
              </Button>
            </Link>
            <Link to="/menu" className="block w-full transform transition-all duration-300 hover:scale-105">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-none shadow-lg rounded-xl">
                <FileText size={24} />
                <span>Update Menu</span>
              </Button>
            </Link>
            <Link to="/subscriptions" className="block w-full transform transition-all duration-300 hover:scale-105">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border-none shadow-lg rounded-xl">
                <Users size={24} />
                <span>Subscriptions</span>
              </Button>
            </Link>
            <Link to="/profile" className="block w-full transform transition-all duration-300 hover:scale-105">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 border-none shadow-lg rounded-xl">
                <Settings size={24} />
                <span>Settings</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <FileText size={20} className="mr-2 text-primary" />
              Today's Menu
            </h2>
            <Link to="/menu" className="text-primary text-sm font-medium hover:underline">View All</Link>
          </div>
          
          <div className="space-y-3">
            <Card className="p-4 flex justify-between items-center hover:shadow-md transition-all duration-300 bg-white border-l-4 border-l-green-500 rounded-lg">
              <div>
                <h3 className="font-medium">Paneer Butter Masala</h3>
                <p className="text-sm text-gray-500">Lunch</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">Available</div>
            </Card>
            
            <Card className="p-4 flex justify-between items-center hover:shadow-md transition-all duration-300 bg-white border-l-4 border-l-green-500 rounded-lg">
              <div>
                <h3 className="font-medium">Dal Tadka</h3>
                <p className="text-sm text-gray-500">Lunch</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">Available</div>
            </Card>
            
            <Card className="p-4 flex justify-between items-center hover:shadow-md transition-all duration-300 bg-white border-l-4 border-l-green-500 rounded-lg">
              <div>
                <h3 className="font-medium">Aloo Gobi</h3>
                <p className="text-sm text-gray-500">Dinner</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">Available</div>
            </Card>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
