
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProfileSettings = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("Spice Garden");
  const [centerName, setCenterName] = useState("Spice Garden");
  const [email, setEmail] = useState("spicegarden@example.com");
  const [phoneNumber, setPhoneNumber] = useState("+91 98765 43210");
  const [address, setAddress] = useState("123 Food Street, Mumbai, India");
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handleSaveChanges = () => {
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    // In a real app, would log the user out
    navigate("/login");
  };

  return (
    <AuthLayout title="Profile Settings" showBackButton>
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center p-4">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src="https://images.unsplash.com/photo-1509482560494-4126f8225994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D" alt="Profile" />
            <AvatarFallback>SG</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">{centerName}</h2>
          <p className="text-gray-500">Food Partner</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">4.8</span>
            <span className="text-xs text-gray-600">Rating</span>
          </Card>
          
          <Card className="p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">142</span>
            <span className="text-xs text-gray-600">Reviews</span>
          </Card>
          
          <Card className="p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">3,240</span>
            <span className="text-xs text-gray-600">Orders</span>
          </Card>
        </div>

        <Card className="p-4 space-y-4">
          <h3 className="font-semibold text-gray-800">Personal Information</h3>
          
          <div className="space-y-3">
            <div>
              <Label htmlFor="fullName">Owner Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="centerName">Tiffin Center Name</Label>
              <Input
                id="centerName"
                value={centerName}
                onChange={(e) => setCenterName(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="address">Business Address</Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <h3 className="font-semibold text-gray-800">Notifications</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="pushNotifications" className="text-base">Push Notifications</Label>
                <p className="text-xs text-gray-500">Receive notifications for new orders</p>
              </div>
              <Switch 
                id="pushNotifications" 
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications" className="text-base">Email Notifications</Label>
                <p className="text-xs text-gray-500">Receive daily order summaries via email</p>
              </div>
              <Switch 
                id="emailNotifications" 
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <Button onClick={handleSaveChanges} className="w-full">
            Save Changes
          </Button>
          
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="w-full text-red-500 border-red-300 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProfileSettings;
