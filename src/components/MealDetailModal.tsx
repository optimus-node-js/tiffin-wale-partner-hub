
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MenuItem } from "@/data/dummyData";
import { Badge } from "@/components/ui/badge";
import MealReviews from "./MealReviews";

interface MealDetailModalProps {
  menuItem: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const MealDetailModal = ({ menuItem, isOpen, onClose }: MealDetailModalProps) => {
  if (!menuItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">{menuItem.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant={menuItem.isToday ? "default" : "outline"} className="capitalize">
                {menuItem.category}
              </Badge>
              
              {menuItem.isToday ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  Available Today
                </Badge>
              ) : (
                <Badge variant="outline" className="text-gray-500">
                  Not Available Today
                </Badge>
              )}
            </div>
            
            <p className="text-gray-600 mt-2">{menuItem.description}</p>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
            <MealReviews menuItem={menuItem} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MealDetailModal;
