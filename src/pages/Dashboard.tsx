import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Users, Folder, Settings, Plus, LayoutGrid, List, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import FeedCard from "@/components/FeedCard";
import AddCategoryModal from "@/components/AddCategoryModal";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "Accounts", active: false },
  { icon: Folder, label: "Categories", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const mockCategories = [
  {
    id: "all",
    name: "หมวดรวม",
    posts: [
      {
        id: 1,
        avatar: "TN",
        handle: "@technewsth",
        name: "Tech News Thailand",
        summary: "เทคโนโลยี AI กำลังเปลี่ยนแปลงวงการธุรกิจไทย ด้วยการนำมาใช้ในการวิเคราะห์ข้อมูลและปรับปรุงประสบการณ์ลูกค้า",
        hashtags: ["#AI", "#TechThailand", "#Innovation"],
      },
      {
        id: 2,
        avatar: "DT",
        handle: "@digitaltoday",
        name: "Digital Today",
        summary: "5 เทรนด์ Digital Marketing ปี 2024 ที่นักการตลาดต้องรู้ เน้นการใช้ AI และ Personalization",
        hashtags: ["#DigitalMarketing", "#Trends2024"],
      },
      {
        id: 3,
        avatar: "ST",
        handle: "@startupth",
        name: "Startup Thailand",
        summary: "Startup ไทยได้รับการลงทุนรวมกว่า 2,000 ล้านบาทในไตรมาสแรก โดยเน้นไปที่ธุรกิจ Fintech และ E-commerce",
        hashtags: ["#StartupTH", "#Investment", "#Fintech"],
      },
    ],
  },
  {
    id: "tech",
    name: "เทคโนโลยี",
    posts: [
      {
        id: 1,
        avatar: "TN",
        handle: "@technewsth",
        name: "Tech News Thailand",
        summary: "เทคโนโลยี AI กำลังเปลี่ยนแปลงวงการธุรกิจไทย ด้วยการนำมาใช้ในการวิเคราะห์ข้อมูลและปรับปรุงประสบการณ์ลูกค้า",
        hashtags: ["#AI", "#TechThailand", "#Innovation"],
      },
    ],
  },
  {
    id: "marketing",
    name: "การตลาด",
    posts: [
      {
        id: 2,
        avatar: "DT",
        handle: "@digitaltoday",
        name: "Digital Today",
        summary: "5 เทรนด์ Digital Marketing ปี 2024 ที่นักการตลาดต้องรู้ เน้นการใช้ AI และ Personalization",
        hashtags: ["#DigitalMarketing", "#Trends2024"],
      },
    ],
  },
];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("วันนี้");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [layout, setLayout] = useState<"compact" | "normal" | "large">("normal");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["all", "tech", "marketing"]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-20 bg-muted border-r border-border flex flex-col items-center py-8 space-y-8">
        <div className="text-xl font-bold text-primary tracking-tight">Xocial</div>
        <nav className="flex-1 flex flex-col space-y-4">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "p-3 rounded-lg hover-glow transition-colors",
                item.active ? "bg-primary text-primary-foreground" : "text-secondary hover:text-foreground"
              )}
            >
              <item.icon className="h-6 w-6" />
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="h-16 bg-muted border-b border-border flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold">Xocial</h1>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            U
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8 space-y-6">
          <div className="flex items-center justify-between animate-fade-in">
            <h2 className="text-3xl font-bold">แดชบอร์ดของคุณ</h2>
            <div className="flex items-center gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-border hover:bg-primary/10"
                  >
                    <LayoutGrid className="h-4 w-4 mr-2" />
                    เลือกเลย์เอาต์
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 bg-card border-border">
                  <RadioGroup value={layout} onValueChange={(value) => setLayout(value as any)}>
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold">ขนาดการ์ด</Label>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="compact" />
                        <Label htmlFor="compact" className="flex items-center gap-2 cursor-pointer">
                          <List className="h-4 w-4" />
                          กะทัดรัด
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="normal" id="normal" />
                        <Label htmlFor="normal" className="flex items-center gap-2 cursor-pointer">
                          <LayoutGrid className="h-4 w-4" />
                          ปกติ
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="large" />
                        <Label htmlFor="large" className="flex items-center gap-2 cursor-pointer">
                          <Square className="h-4 w-4" />
                          ใหญ่
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </PopoverContent>
              </Popover>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                <Plus className="h-4 w-4 mr-2" />
                เพิ่มหมวดใหม่
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-center gap-3">
              {mockCategories.map((category) => {
                const isSelected = selectedCategories.includes(category.id);
                const toggleCategory = () => {
                  setSelectedCategories(prev => 
                    prev.includes(category.id)
                      ? prev.filter(id => id !== category.id)
                      : [...prev, category.id]
                  );
                };
                
                return (
                  <Badge
                    key={category.id}
                    variant={isSelected ? "default" : "outline"}
                    className={cn(
                      "px-4 py-2 cursor-pointer hover-glow transition-all",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "border-border hover:bg-primary/10"
                    )}
                    onClick={toggleCategory}
                  >
                    {category.name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Time Filter Chips */}
          <div className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            {["วันนี้", "7 วัน", "30 วัน"].map((filter) => (
              <Badge
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={cn(
                  "px-4 py-2 cursor-pointer hover-glow",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:bg-primary/10"
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>

          {/* Feed Cards by Category */}
          <div className="space-y-8">
            {mockCategories
              .filter(category => selectedCategories.includes(category.id))
              .map((category, categoryIndex) => (
                <div
                  key={category.id}
                  className="space-y-4 animate-fade-in"
                  style={{ animationDelay: `${0.1 * categoryIndex}s` }}
                >
                  <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                  <div className="space-y-4">
                    {category.posts.map((post, postIndex) => (
                      <div
                        key={post.id}
                        className="animate-cascade"
                        style={{ animationDelay: `${0.1 * (postIndex + 1)}s` }}
                      >
                        <FeedCard {...post} layout={layout} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>

      {/* Add Category Modal */}
      <AddCategoryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Dashboard;
