
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mealRatings, MenuItem } from "@/data/dummyData";
import MealReviewCard from "./MealReviewCard";

interface MealReviewsProps {
  menuItem: MenuItem;
}

const MealReviews = ({ menuItem }: MealReviewsProps) => {
  // Get ratings for this specific meal
  const mealSpecificRatings = mealRatings.filter(rating => rating.mealId === menuItem.id);
  
  // Calculate average rating
  const totalRating = mealSpecificRatings.reduce((sum, rating) => sum + rating.rating, 0);
  const averageRating = mealSpecificRatings.length > 0 
    ? (totalRating / mealSpecificRatings.length).toFixed(1) 
    : "No ratings";
  
  // Group ratings by score (5, 4, 3, 2, 1)
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => {
    const count = mealSpecificRatings.filter(r => 
      Math.floor(r.rating) === rating
    ).length;
    
    const percentage = mealSpecificRatings.length > 0 
      ? (count / mealSpecificRatings.length) * 100 
      : 0;
    
    return { rating, count, percentage };
  });

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-orange-600">{averageRating}</h3>
            <p className="text-sm text-gray-600">{mealSpecificRatings.length} ratings</p>
          </div>
          
          <div className="flex-[2]">
            {ratingCounts.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium w-2">{rating}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-400 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">All Reviews</TabsTrigger>
          <TabsTrigger value="with-photos" className="flex-1">With Photos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4 mt-4">
          {mealSpecificRatings.length > 0 ? (
            mealSpecificRatings.map(review => (
              <MealReviewCard key={review.id} review={review} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No reviews yet for this meal.
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="with-photos" className="space-y-4 mt-4">
          {mealSpecificRatings.filter(r => r.imageUrl).length > 0 ? (
            mealSpecificRatings
              .filter(review => review.imageUrl)
              .map(review => (
                <MealReviewCard key={review.id} review={review} />
              ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No reviews with photos yet.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MealReviews;
