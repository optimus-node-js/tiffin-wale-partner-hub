
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/layouts/AuthLayout";
import { stats } from "@/data/dummyData";
import { Link } from "react-router-dom";
import { Clock, Package, FileText } from "lucide-react";

const Dashboard = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hello, Spice Garden!</h1>
          <p className="text-gray-600">{formattedDate}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 flex flex-col items-center justify-center">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full mb-2">
              <Clock size={20} />
            </div>
            <span className="text-2xl font-bold">{stats.todaysOrders}</span>
            <span className="text-xs text-gray-600 text-center">Today's Orders</span>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center">
            <div className="bg-green-100 text-green-500 p-3 rounded-full mb-2">
              <Package size={20} />
            </div>
            <span className="text-2xl font-bold">{stats.tiffinsDispatched}</span>
            <span className="text-xs text-gray-600 text-center">Tiffins Dispatched</span>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full mb-2">
              <Clock size={20} />
            </div>
            <span className="text-2xl font-bold">{stats.pendingDeliveries}</span>
            <span className="text-xs text-gray-600 text-center">Pending Deliveries</span>
          </Card>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/dispatch">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600">
                <Package size={24} />
                <span>Dispatch Tiffins</span>
              </Button>
            </Link>
            <Link to="/menu">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-green-500 hover:bg-green-600">
                <FileText size={24} />
                <span>Update Menu</span>
              </Button>
            </Link>
            <Link to="/subscriptions">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600">
                <FileText size={24} />
                <span>View Subscriptions</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600">
                <Package size={24} />
                <span>Settings</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Today's Menu</h2>
            <Link to="/menu" className="text-primary text-sm">View All</Link>
          </div>
          
          <div className="space-y-3">
            <Card className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Paneer Butter Masala</h3>
                <p className="text-sm text-gray-500">Lunch</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Available</div>
            </Card>
            
            <Card className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Dal Tadka</h3>
                <p className="text-sm text-gray-500">Lunch</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Available</div>
            </Card>
            
            <Card className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Aloo Gobi</h3>
                <p className="text-sm text-gray-500">Dinner</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Available</div>
            </Card>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
