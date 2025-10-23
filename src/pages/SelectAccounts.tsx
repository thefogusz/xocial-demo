import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockAccounts = [
  { id: 1, name: "Tech News Thailand", handle: "@technewsth", avatar: "TN" },
  { id: 2, name: "Digital Today", handle: "@digitaltoday", avatar: "DT" },
  { id: 3, name: "Startup Thailand", handle: "@startupth", avatar: "ST" },
  { id: 4, name: "Web Dev Tips", handle: "@webdevtips", avatar: "WD" },
  { id: 5, name: "AI Thailand", handle: "@aithailand", avatar: "AI" },
  { id: 6, name: "Business News TH", handle: "@biznewsth", avatar: "BN" },
];

const SelectAccounts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAccounts, setSelectedAccounts] = useState<typeof mockAccounts>([]);

  const filteredAccounts = mockAccounts.filter(
    (account) =>
      account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAccount = (account: typeof mockAccounts[0]) => {
    if (!selectedAccounts.find((a) => a.id === account.id)) {
      setSelectedAccounts([...selectedAccounts, account]);
    }
  };

  const handleRemoveAccount = (accountId: number) => {
    setSelectedAccounts(selectedAccounts.filter((a) => a.id !== accountId));
  };

  const handleContinue = () => {
    if (selectedAccounts.length > 0) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold">เลือกบัญชี X ที่คุณต้องการติดตาม</h1>
          <p className="text-secondary text-lg">เลือกบัญชีที่คุณสนใจเพื่อรับสรุปเนื้อหา</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary h-5 w-5" />
          <Input
            type="text"
            placeholder="ค้นหาชื่อบัญชี X..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 bg-muted border-border text-foreground text-lg rounded-lg"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Account List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredAccounts.map((account, index) => (
              <div
                key={account.id}
                className="bg-muted border border-border rounded-lg p-6 flex items-center justify-between hover-glow animate-cascade"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {account.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{account.name}</h3>
                    <p className="text-secondary">{account.handle}</p>
                  </div>
                </div>
                <Button
                  onClick={() => handleAddAccount(account)}
                  disabled={selectedAccounts.some((a) => a.id === account.id)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {selectedAccounts.some((a) => a.id === account.id) ? "เพิ่มแล้ว" : "เพิ่มติดตาม"}
                </Button>
              </div>
            ))}
          </div>

          {/* Selected Accounts Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-muted border border-border rounded-lg p-6 sticky top-8 space-y-4 animate-slide-in">
              <h2 className="text-xl font-bold">บัญชีที่เลือก ({selectedAccounts.length})</h2>
              <div className="space-y-2 min-h-[200px]">
                {selectedAccounts.map((account) => (
                  <Badge
                    key={account.id}
                    variant="secondary"
                    className="w-full justify-between py-2 px-3 bg-primary/10 hover:bg-primary/20"
                  >
                    <span className="truncate">{account.name}</span>
                    <X
                      className="h-4 w-4 cursor-pointer ml-2"
                      onClick={() => handleRemoveAccount(account.id)}
                    />
                  </Badge>
                ))}
              </div>
              <Button
                onClick={handleContinue}
                disabled={selectedAccounts.length === 0}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                ดำเนินการต่อ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccounts;
