import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface AddCategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddCategoryModal = ({ open, onOpenChange }: AddCategoryModalProps) => {
  const [categoryName, setCategoryName] = useState("");
  const [accountName, setAccountName] = useState("");

  const handleSave = () => {
    if (categoryName.trim() && accountName.trim()) {
      toast.success("บันทึกหมวดใหม่แล้ว");
      setCategoryName("");
      setAccountName("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-card-foreground">
            เพิ่มหมวดใหม่
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="category-name" className="text-card-foreground">
              ชื่อหมวดใหม่
            </Label>
            <Input
              id="category-name"
              placeholder="เช่น Tech News, Lifestyle"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="bg-input border-border text-card-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="account-name" className="text-card-foreground">
              เพิ่มบัญชี X
            </Label>
            <Input
              id="account-name"
              placeholder="@username"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="bg-input border-border text-card-foreground"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleSave}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
            >
              บันทึกหมวด
            </Button>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-secondary text-card-foreground hover:bg-secondary/10"
            >
              ยกเลิก
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
