
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useState } from "react";
import { orders } from "@/data/dummyData";
import { Package, CheckCircle, Truck, MapPin, Clock, Calendar } from "lucide-react";
import { toast } from "sonner";

// Define the order status type for better type checking
type OrderStatus = 'Pending' | 'In Progress' | 'Dispatched' | 'Delivered';

// Define interface for order
interface Order {
  id: string;
  customerName: string;
  address: string;
  mealType: string;
  items: string[];
  status: OrderStatus;
  orderedAt?: string;
}

const TiffinDispatch = () => {
  const [orderList, setOrderList] = useState<Order[]>(orders as Order[]);

  const handleDispatch = (orderId: string) => {
    setOrderList(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: 'Dispatched' as OrderStatus } 
          : order
      )
    );
    toast.success("Tiffin dispatched successfully!");
  };

  const handleMarkDelivered = (orderId: string) => {
    setOrderList(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: 'Delivered' as OrderStatus } 
          : order
      )
    );
    toast.success("Tiffin marked as delivered!");
  };

  const pendingOrders = orderList.filter(
    order => order.status === 'Pending' || order.status === 'In Progress'
  );

  const dispatchedOrders = orderList.filter(
    order => order.status === 'Dispatched' || order.status === 'Delivered'
  );

  return (
    <AuthLayout title="Tiffin Dispatch" showBackButton>
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Package size={22} className="mr-2 text-primary" />
              Today's Pending Orders
            </h2>
            <div className="text-sm font-medium text-gray-500 flex items-center">
              <Calendar size={16} className="mr-1" />
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
          </div>
          
          {pendingOrders.length === 0 ? (
            <Card className="p-6 text-center text-gray-500 bg-gradient-to-r from-orange-50 to-orange-100 shadow-md rounded-xl border-none">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Package size={40} className="text-orange-300 mb-2" />
                <p className="font-medium">No pending orders to dispatch</p>
                <p className="text-sm text-gray-400">All caught up for now!</p>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {pendingOrders.map(order => (
                <Card 
                  key={order.id} 
                  className="p-5 space-y-4 hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-r from-white to-orange-50 rounded-xl overflow-hidden relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500 rounded-l"></div>
                  <div className="flex justify-between items-start pl-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{order.customerName}</h3>
                      <p className="text-sm text-primary font-medium">{order.mealType}</p>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      order.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="text-sm space-y-2 pl-2">
                    <div className="flex items-start">
                      <MapPin size={16} className="text-gray-500 mr-2 mt-0.5 shrink-0" />
                      <p className="text-gray-700">{order.address}</p>
                    </div>
                    <div className="flex items-start">
                      <Clock size={16} className="text-gray-500 mr-2 mt-0.5 shrink-0" />
                      <p className="text-gray-500">
                        Expected: {new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})}
                      </p>
                    </div>
                    <div className="pl-6 pr-2 mt-2">
                      <p className="text-gray-800 bg-orange-50 px-3 py-2 rounded-lg border border-orange-100">
                        {order.items.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-1">
                    {order.status !== 'Dispatched' && (
                      <Button 
                        onClick={() => handleDispatch(order.id)}
                        className="bg-primary hover:bg-primary/90 text-white shadow-md rounded-xl"
                      >
                        <Truck size={18} className="mr-2" />
                        Dispatch
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3 mt-8">
          <div className="flex items-center">
            <CheckCircle size={22} className="mr-2 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-800">Dispatched Orders</h2>
          </div>
          
          {dispatchedOrders.length === 0 ? (
            <Card className="p-6 text-center text-gray-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md rounded-xl border-none">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Truck size={40} className="text-blue-300 mb-2" />
                <p className="font-medium">No dispatched orders yet</p>
                <p className="text-sm text-gray-400">Dispatch some tiffins first!</p>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {dispatchedOrders.map(order => (
                <Card 
                  key={order.id} 
                  className="p-5 space-y-4 hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-r from-white to-green-50 rounded-xl overflow-hidden relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500 rounded-l"></div>
                  <div className="flex justify-between items-start pl-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{order.customerName}</h3>
                      <p className="text-sm text-primary font-medium">{order.mealType}</p>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="text-sm space-y-2 pl-2">
                    <div className="flex items-start">
                      <MapPin size={16} className="text-gray-500 mr-2 mt-0.5 shrink-0" />
                      <p className="text-gray-700">{order.address}</p>
                    </div>
                    <div className="pl-6 pr-2 mt-2">
                      <p className="text-gray-800 bg-green-50 px-3 py-2 rounded-lg border border-green-100">
                        {order.items.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2 pt-1">
                    {order.status === 'Dispatched' && (
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id={`delivered-${order.id}`} 
                          checked={order.status === 'Delivered'}
                          onCheckedChange={() => handleMarkDelivered(order.id)}
                          className="data-[state=checked]:bg-green-500"
                        />
                        <Label htmlFor={`delivered-${order.id}`} className="cursor-pointer">
                          Mark Delivered
                        </Label>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default TiffinDispatch;
