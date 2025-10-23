import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Users, Folder, Settings, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import FeedCard from "@/components/FeedCard";
import AddCategoryModal from "@/components/AddCategoryModal";

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "Accounts", active: false },
  { icon: Folder, label: "Categories", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const mockPosts = [
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
];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("วันนี้");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-20 bg-muted border-r border-border flex flex-col items-center py-8 space-y-8">
        <div className="text-2xl font-bold text-primary">X</div>
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
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
            >
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มหมวดใหม่
            </Button>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
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

          {/* Feed Cards */}
          <div className="space-y-4">
            {mockPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-cascade"
                style={{ animationDelay: `${0.1 * (index + 2)}s` }}
              >
                <FeedCard {...post} />
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
