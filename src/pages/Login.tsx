import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Twitter } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - navigate to select accounts
    navigate("/select-accounts");
  };

  return (
    <div className="min-h-screen gradient-navy flex items-center justify-center p-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Headline */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            สรุปโพสต์จาก X<br />แบบอ่านง่าย
          </h1>
          <p className="text-lg text-secondary">
            ติดตามและรับสรุปเนื้อหาจากบัญชี X ที่คุณสนใจ
          </p>
        </div>

        {/* Right side - Login Form */}
        <div 
          className="bg-card p-8 rounded-lg shadow-2xl animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-card-foreground">เข้าสู่ระบบ</h2>
              <p className="text-muted-foreground text-sm">เข้าสู่ระบบเพื่อเริ่มใช้งาน Xocial</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-card-foreground">อีเมล</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-border text-card-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-card-foreground">รหัสผ่าน</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-input border-border text-card-foreground"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                เข้าสู่ระบบ
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">หรือ</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full border-foreground/20 text-card-foreground hover:bg-primary/10"
              onClick={() => navigate("/select-accounts")}
            >
              <Twitter className="mr-2 h-4 w-4" />
              เข้าสู่ระบบด้วย X
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
