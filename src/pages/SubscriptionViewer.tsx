
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/layouts/AuthLayout";
import { subscriptions } from "@/data/dummyData";

const SubscriptionViewer = () => {
  return (
    <AuthLayout title="Subscriptions" showBackButton>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{subscriptions.length}</span>
            <span className="text-xs text-gray-600">Active Subscriptions</span>
          </Card>
          
          <Card className="p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">₹{subscriptions.length * 1500}</span>
            <span className="text-xs text-gray-600">Monthly Revenue</span>
          </Card>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">Active Subscriptions</h2>
          
          <div className="space-y-3">
            {subscriptions.map(subscription => (
              <Card key={subscription.id} className="p-4 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{subscription.customerName}</h3>
                    <p className="text-sm text-gray-500">{subscription.planType}</p>
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                    {subscription.status}
                  </div>
                </div>
                
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Start Date:</span>
                    <span className="text-gray-700">{subscription.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">End Date:</span>
                    <span className="text-gray-700">{subscription.endDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Meal Types:</span>
                    <span className="text-gray-700">{subscription.mealTypes.join(", ")}</span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SubscriptionViewer;
