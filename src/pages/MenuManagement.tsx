
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useState } from "react";
import { menuItems } from "@/data/dummyData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Plus, ChefHat, Check } from "lucide-react";

const MenuManagement = () => {
  const [menu, setMenu] = useState(menuItems);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Lunch");

  const handleToggleToday = (itemId: string) => {
    setMenu(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, isToday: !item.isToday } 
          : item
      )
    );
  };

  const handleAddItem = () => {
    if (!newItemName.trim()) {
      toast.error("Please enter an item name");
      return;
    }

    const newItem = {
      id: `menu-${Date.now()}`,
      name: newItemName,
      description: newItemDescription,
      category: newItemCategory as "Breakfast" | "Lunch" | "Dinner",
      isToday: true,
    };

    setMenu(prev => [...prev, newItem]);
    setNewItemName("");
    setNewItemDescription("");
    toast.success("Menu item added successfully!");
  };

  const todayItems = menu.filter(item => item.isToday);
  const otherItems = menu.filter(item => !item.isToday);

  return (
    <AuthLayout title="Menu Management" showBackButton>
      <div className="space-y-6">
        <Card className="p-5 space-y-4 shadow-lg border-none bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
          <div className="flex items-center space-x-2">
            <ChefHat className="text-primary" size={22} />
            <h2 className="text-lg font-semibold text-gray-800">Add New Menu Item</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="itemName" className="text-gray-700">Item Name</Label>
              <Input
                id="itemName"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
                className="mt-1 bg-white/80 focus:ring-primary focus:border-primary"
              />
            </div>
            
            <div>
              <Label htmlFor="itemDescription" className="text-gray-700">Description</Label>
              <Textarea
                id="itemDescription"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                placeholder="Enter item description"
                rows={3}
                className="mt-1 bg-white/80 focus:ring-primary focus:border-primary"
              />
            </div>
            
            <div>
              <Label htmlFor="itemCategory" className="text-gray-700">Category</Label>
              <Select value={newItemCategory} onValueChange={setNewItemCategory}>
                <SelectTrigger id="itemCategory" className="mt-1 bg-white/80 focus:ring-primary focus:border-primary">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Breakfast">Breakfast</SelectItem>
                  <SelectItem value="Lunch">Lunch</SelectItem>
                  <SelectItem value="Dinner">Dinner</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={handleAddItem} className="w-full bg-primary hover:bg-primary/90 shadow-md flex items-center justify-center">
              <Plus size={18} className="mr-2" />
              Add Item
            </Button>
          </div>
        </Card>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Check size={20} className="mr-2 text-green-500" />
            Today's Menu
          </h2>
          {todayItems.length === 0 ? (
            <Card className="p-4 text-center text-gray-500 bg-white shadow-md">
              No items in today's menu yet
            </Card>
          ) : (
            <div className="space-y-3">
              {todayItems.map(item => (
                <Card key={item.id} className="p-4 space-y-3 bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id={`today-${item.id}`} 
                        checked={item.isToday}
                        onCheckedChange={() => handleToggleToday(item.id)}
                      />
                      <Label htmlFor={`today-${item.id}`} className="text-sm font-medium">Today</Label>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded-md">{item.description}</p>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">Other Menu Items</h2>
          {otherItems.length === 0 ? (
            <Card className="p-4 text-center text-gray-500 bg-white shadow-md">
              No additional menu items
            </Card>
          ) : (
            <div className="space-y-3">
              {otherItems.map(item => (
                <Card key={item.id} className="p-4 space-y-3 bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-300 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id={`today-${item.id}`} 
                        checked={item.isToday}
                        onCheckedChange={() => handleToggleToday(item.id)}
                      />
                      <Label htmlFor={`today-${item.id}`} className="text-sm font-medium">Today</Label>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded-md">{item.description}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default MenuManagement;
