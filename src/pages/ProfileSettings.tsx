
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Bell, CreditCard, Edit, Globe, Shield, Star, Upload, User } from "lucide-react";

const ProfileSettings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  
  // Personal Information
  const [fullName, setFullName] = useState("Spice Garden");
  const [centerName, setCenterName] = useState("Spice Garden");
  const [email, setEmail] = useState("spicegarden@example.com");
  const [phoneNumber, setPhoneNumber] = useState("+91 98765 43210");
  const [address, setAddress] = useState("123 Food Street, Mumbai, India");
  const [bio, setBio] = useState("We provide authentic homemade Indian meals with the finest ingredients and traditional recipes passed down through generations.");
  
  // Notification settings
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [orderAlerts, setOrderAlerts] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [reviewAlerts, setReviewAlerts] = useState(true);
  
  // Business settings
  const [businessHours, setBusinessHours] = useState({
    monday: { open: "08:00", close: "20:00", isOpen: true },
    tuesday: { open: "08:00", close: "20:00", isOpen: true },
    wednesday: { open: "08:00", close: "20:00", isOpen: true },
    thursday: { open: "08:00", close: "20:00", isOpen: true },
    friday: { open: "08:00", close: "22:00", isOpen: true },
    saturday: { open: "09:00", close: "22:00", isOpen: true },
    sunday: { open: "09:00", close: "20:00", isOpen: true },
  });
  
  // Security settings
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [passwordLastChanged, setPasswordLastChanged] = useState("2025-04-01");
  
  const handleSaveChanges = () => {
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    // In a real app, would log the user out
    navigate("/login");
  };
  
  const handleImageUpload = (e) => {
    // This would handle image upload in a real app
    toast.success("Profile image uploaded successfully!");
  };

  return (
    <AuthLayout title="Profile Settings" showBackButton>
      <div className="grid grid-cols-12 gap-6">
        {/* Profile Summary Card */}
        <Card className="col-span-12 md:col-span-4 p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative group">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="https://images.unsplash.com/photo-1509482560494-4126f8225994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D" alt="Profile" />
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <label htmlFor="avatar-upload" className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
                  <Edit className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                  <input 
                    id="avatar-upload" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
            
            <h2 className="text-xl font-bold">{centerName}</h2>
            <p className="text-gray-500 mb-2">Food Partner</p>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Verified</Badge>
            
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>{email}</p>
              <p>{phoneNumber}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 w-full mt-6">
              <Card className="p-3 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">4.8</span>
                <span className="text-xs text-gray-600">Rating</span>
              </Card>
              
              <Card className="p-3 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">142</span>
                <span className="text-xs text-gray-600">Reviews</span>
              </Card>
              
              <Card className="p-3 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">3,240</span>
                <span className="text-xs text-gray-600">Orders</span>
              </Card>
            </div>
          </div>
        </Card>
        
        {/* Settings Tabs */}
        <div className="col-span-12 md:col-span-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="profile" className="flex items-center gap-1">
                <User size={16} />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-1">
                <Bell size={16} />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center gap-1">
                <Globe size={16} />
                <span className="hidden sm:inline">Business</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-1">
                <Shield size={16} />
                <span className="hidden sm:inline">Security</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your account details and public profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Owner Name</Label>
                      <Input
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="centerName">Tiffin Center Name</Label>
                      <Input
                        id="centerName"
                        value={centerName}
                        onChange={(e) => setCenterName(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Business Description</Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Profile Media</CardTitle>
                  <CardDescription>Add photos to showcase your tiffin center</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-gray-100 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                      <Upload className="h-6 w-6 text-gray-500 mb-1" />
                      <span className="text-xs text-gray-500">Add Photo</span>
                    </div>
                    
                    {[1, 2, 3].map((idx) => (
                      <div key={idx} className="aspect-square bg-gray-100 rounded-md overflow-hidden relative group">
                        <img 
                          src={`https://images.unsplash.com/photo-${1550547660 + idx * 10000}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`} 
                          alt="Food" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                          <Button variant="ghost" size="icon" className="text-white opacity-0 group-hover:opacity-100">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushNotifications" className="text-base">Push Notifications</Label>
                      <p className="text-sm text-gray-500">Receive notifications on your device</p>
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
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <Switch 
                      id="emailNotifications" 
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-3">Notification Types</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="orderAlerts" className="text-sm">Order Alerts</Label>
                          <p className="text-xs text-gray-500">Notifications about new orders and updates</p>
                        </div>
                        <Switch 
                          id="orderAlerts" 
                          checked={orderAlerts}
                          onCheckedChange={setOrderAlerts}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="reviewAlerts" className="text-sm">Review Alerts</Label>
                          <p className="text-xs text-gray-500">Notifications when you receive new reviews</p>
                        </div>
                        <Switch 
                          id="reviewAlerts" 
                          checked={reviewAlerts}
                          onCheckedChange={setReviewAlerts}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="marketingEmails" className="text-sm">Marketing Emails</Label>
                          <p className="text-xs text-gray-500">Receive promotions and news updates</p>
                        </div>
                        <Switch 
                          id="marketingEmails" 
                          checked={marketingEmails}
                          onCheckedChange={setMarketingEmails}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Business Tab */}
            <TabsContent value="business" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>Set your operating hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(businessHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between">
                        <div className="w-1/4">
                          <Label className="capitalize">{day}</Label>
                        </div>
                        
                        <div className="flex items-center gap-2 w-2/4">
                          <Input 
                            type="time" 
                            value={hours.open} 
                            onChange={(e) => 
                              setBusinessHours({...businessHours, [day]: {...hours, open: e.target.value}})
                            }
                            disabled={!hours.isOpen}
                          />
                          <span className="text-gray-500">to</span>
                          <Input 
                            type="time" 
                            value={hours.close} 
                            onChange={(e) => 
                              setBusinessHours({...businessHours, [day]: {...hours, close: e.target.value}})
                            }
                            disabled={!hours.isOpen}
                          />
                        </div>
                        
                        <div className="flex items-center justify-end w-1/4">
                          <Switch 
                            checked={hours.isOpen}
                            onCheckedChange={(checked) => 
                              setBusinessHours({...businessHours, [day]: {...hours, isOpen: checked}})
                            }
                          />
                          <span className="ml-2 text-sm">
                            {hours.isOpen ? 'Open' : 'Closed'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Payment Settings</CardTitle>
                  <CardDescription>Manage your payment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center p-4 border rounded-md mb-4">
                    <CreditCard className="h-6 w-6 text-gray-500 mr-4" />
                    <div>
                      <p className="font-medium">HDFC Bank ****1234</p>
                      <p className="text-sm text-gray-500">Expires 04/28</p>
                    </div>
                    <Badge className="ml-auto">Default</Badge>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Security Tab */}
            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="twoFactor" className="text-base">Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <Switch 
                      id="twoFactor" 
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                    />
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-base">Password</Label>
                      <span className="text-xs text-gray-500">
                        Last changed: {new Date(passwordLastChanged).toLocaleDateString()}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full">Change Password</Button>
                  </div>
                  
                  <div className="pt-2">
                    <Label className="text-base mb-2 block">Login Sessions</Label>
                    <div className="border p-3 rounded-md mb-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-xs text-gray-500">Mumbai, India • Chrome on Windows</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full text-red-500 hover:text-red-600">Log Out All Other Devices</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-100">
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-red-300 text-red-500 hover:bg-red-100 hover:text-red-600"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-300 text-red-500 hover:bg-red-100 hover:text-red-600"
                  >
                    Deactivate Account
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 flex gap-3 justify-end">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSaveChanges}>Save Changes</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProfileSettings;
