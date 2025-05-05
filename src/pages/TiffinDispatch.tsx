
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useState } from "react";
import { orders } from "@/data/dummyData";

const TiffinDispatch = () => {
  const [orderList, setOrderList] = useState(orders);

  const handleDispatch = (orderId: string) => {
    setOrderList(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: 'Dispatched' } 
          : order
      )
    );
  };

  const handleMarkDelivered = (orderId: string) => {
    setOrderList(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: 'Delivered' } 
          : order
      )
    );
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
          <h2 className="text-lg font-semibold text-gray-800">Today's Pending Orders</h2>
          {pendingOrders.length === 0 ? (
            <Card className="p-4 text-center text-gray-500">
              No pending orders to dispatch
            </Card>
          ) : (
            <div className="space-y-3">
              {pendingOrders.map(order => (
                <Card key={order.id} className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{order.customerName}</h3>
                      <p className="text-sm text-gray-500">{order.mealType}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs ${
                      order.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <p className="text-gray-700">{order.address}</p>
                    <p className="text-gray-500 mt-1">
                      {order.items.join(', ')}
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    {order.status !== 'Dispatched' && (
                      <Button 
                        onClick={() => handleDispatch(order.id)}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        Dispatch
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">Dispatched Orders</h2>
          {dispatchedOrders.length === 0 ? (
            <Card className="p-4 text-center text-gray-500">
              No dispatched orders yet
            </Card>
          ) : (
            <div className="space-y-3">
              {dispatchedOrders.map(order => (
                <Card key={order.id} className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{order.customerName}</h3>
                      <p className="text-sm text-gray-500">{order.mealType}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <p className="text-gray-700">{order.address}</p>
                    <p className="text-gray-500 mt-1">
                      {order.items.join(', ')}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2">
                    {order.status === 'Dispatched' && (
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id={`delivered-${order.id}`} 
                          checked={order.status === 'Delivered'}
                          onCheckedChange={() => handleMarkDelivered(order.id)}
                        />
                        <Label htmlFor={`delivered-${order.id}`}>Mark Delivered</Label>
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
