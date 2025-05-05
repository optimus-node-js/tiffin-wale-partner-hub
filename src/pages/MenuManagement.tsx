
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { menuItems, mealRatings } from "@/data/dummyData";
import AuthLayout from "@/components/layouts/AuthLayout";
import { MoreVertical, Plus, Star } from "lucide-react";
import MealDetailModal from "@/components/MealDetailModal";

const MenuManagement = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [showMealDetailModal, setShowMealDetailModal] = useState(false);
  
  // Calculate average rating for each meal
  const getMealRating = (mealId) => {
    const ratings = mealRatings.filter(rating => rating.mealId === mealId);
    if (ratings.length === 0) return null;
    
    const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return (totalRating / ratings.length).toFixed(1);
  };

  const handleCardClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setShowMealDetailModal(true);
  };

  // Filter menu items by category
  const breakfastItems = menuItems.filter(item => item.category === 'Breakfast');
  const lunchItems = menuItems.filter(item => item.category === 'Lunch');
  const dinnerItems = menuItems.filter(item => item.category === 'Dinner');

  const renderMenuCards = (items) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
        {items.map((item) => {
          const rating = getMealRating(item.id);
          
          return (
            <Card 
              key={item.id} 
              className={`hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${
                item.isToday ? 'border-l-4 border-l-green-500' : ''
              }`}
              onClick={() => handleCardClick(item)}
            >
              <CardContent className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    
                    <div className="flex items-center gap-2 mt-3">
                      {rating && (
                        <div className="flex items-center text-sm bg-amber-50 px-2 py-1 rounded">
                          <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 mr-1" />
                          <span>{rating}</span>
                          <span className="text-gray-500 text-xs ml-1">
                            ({mealRatings.filter(r => r.mealId === item.id).length})
                          </span>
                        </div>
                      )}
                      
                      <Badge variant="outline" className="text-xs capitalize">
                        {item.category}
                      </Badge>
                      
                      {item.isToday && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs">
                          Today
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Item</DropdownMenuItem>
                      <DropdownMenuItem>
                        {item.isToday ? "Remove from Today" : "Add to Today"}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        Delete Item
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <AuthLayout title="Menu Management" showBackButton>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Menu Items</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Item
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {renderMenuCards(menuItems)}
          </TabsContent>

          <TabsContent value="breakfast" className="space-y-6">
            {renderMenuCards(breakfastItems)}
          </TabsContent>

          <TabsContent value="lunch" className="space-y-6">
            {renderMenuCards(lunchItems)}
          </TabsContent>

          <TabsContent value="dinner" className="space-y-6">
            {renderMenuCards(dinnerItems)}
          </TabsContent>
        </Tabs>
      </div>
      
      <MealDetailModal 
        menuItem={selectedMenuItem}
        isOpen={showMealDetailModal}
        onClose={() => setShowMealDetailModal(false)}
      />
    </AuthLayout>
  );
};

export default MenuManagement;
