import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface FeedCardProps {
  avatar: string;
  handle: string;
  name: string;
  summary: string;
  hashtags: string[];
}

const FeedCard = ({ avatar, handle, name, summary, hashtags }: FeedCardProps) => {
  const handleCopyLink = () => {
    // Mock copy functionality
    navigator.clipboard.writeText(`https://x.com${handle}/status/123456789`);
    toast.success("คัดลอกลิงก์แล้ว");
  };

  return (
    <div className="bg-muted border border-border rounded-lg p-6 hover-glow space-y-4">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
          {avatar}
        </div>
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-secondary text-sm">{handle}</p>
          </div>
          <p className="text-foreground leading-relaxed">{summary}</p>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-accent text-accent bg-accent/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <Button
          variant="outline"
          className="flex-1 border-border hover:bg-primary/10"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          ดูโพสต์ต้นทาง
        </Button>
        <Button
          variant="outline"
          className="border-border hover:bg-primary/10"
          onClick={handleCopyLink}
        >
          <Copy className="h-4 w-4 mr-2" />
          คัดลอกลิงก์
        </Button>
      </div>
    </div>
  );
};

export default FeedCard;
