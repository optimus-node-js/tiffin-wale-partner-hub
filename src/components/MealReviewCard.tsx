
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { MealRating } from "@/data/dummyData";
import { Star, StarHalf } from "lucide-react";

interface MealReviewCardProps {
  review: MealRating;
}

const MealReviewCard = ({ review }: MealReviewCardProps) => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`star-${i}`} 
          className="text-amber-400 fill-amber-400" 
          size={16} 
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half-star" 
          className="text-amber-400 fill-amber-400" 
          size={16} 
        />
      );
    }

    // Add empty stars to make it 5 stars total
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-star-${i}`} 
          className="text-gray-300" 
          size={16} 
        />
      );
    }

    return stars;
  };

  const formattedDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Card className="p-4 hover:shadow-md transition-all duration-300 animate-fade-in">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={`https://ui-avatars.com/api/?name=${review.customerName}&background=random`} alt={review.customerName} />
          <AvatarFallback>{review.customerName.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-gray-800">{review.customerName}</h4>
            <span className="text-xs text-gray-500">{formattedDate}</span>
          </div>
          
          <div className="flex items-center gap-1 mb-2">
            {renderStars(review.rating)}
            <span className="text-sm ml-1 text-gray-600">{review.rating.toFixed(1)}</span>
          </div>
          
          <p className="text-sm text-gray-700 mb-3">{review.review}</p>
          
          {review.imageUrl && (
            <div className="mt-2 rounded-lg overflow-hidden">
              <img 
                src={review.imageUrl} 
                alt="Food review" 
                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MealReviewCard;
