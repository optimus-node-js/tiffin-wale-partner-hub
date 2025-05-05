
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
        <Card className="p-4 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Add New Menu Item</h2>
          
          <div className="space-y-3">
            <div>
              <Label htmlFor="itemName">Item Name</Label>
              <Input
                id="itemName"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </div>
            
            <div>
              <Label htmlFor="itemDescription">Description</Label>
              <Textarea
                id="itemDescription"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                placeholder="Enter item description"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="itemCategory">Category</Label>
              <Select value={newItemCategory} onValueChange={setNewItemCategory}>
                <SelectTrigger id="itemCategory">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Breakfast">Breakfast</SelectItem>
                  <SelectItem value="Lunch">Lunch</SelectItem>
                  <SelectItem value="Dinner">Dinner</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={handleAddItem} className="w-full">
              Add Item
            </Button>
          </div>
        </Card>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">Today's Menu</h2>
          {todayItems.length === 0 ? (
            <Card className="p-4 text-center text-gray-500">
              No items in today's menu yet
            </Card>
          ) : (
            <div className="space-y-3">
              {todayItems.map(item => (
                <Card key={item.id} className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id={`today-${item.id}`} 
                        checked={item.isToday}
                        onCheckedChange={() => handleToggleToday(item.id)}
                      />
                      <Label htmlFor={`today-${item.id}`}>Today</Label>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700">{item.description}</p>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">Other Menu Items</h2>
          {otherItems.length === 0 ? (
            <Card className="p-4 text-center text-gray-500">
              No additional menu items
            </Card>
          ) : (
            <div className="space-y-3">
              {otherItems.map(item => (
                <Card key={item.id} className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id={`today-${item.id}`} 
                        checked={item.isToday}
                        onCheckedChange={() => handleToggleToday(item.id)}
                      />
                      <Label htmlFor={`today-${item.id}`}>Today</Label>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700">{item.description}</p>
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
