import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface FeedCardProps {
  avatar: string;
  handle: string;
  name: string;
  summary: string;
  hashtags: string[];
  layout?: "compact" | "normal" | "large";
}

const FeedCard = ({ avatar, handle, name, summary, hashtags, layout = "normal" }: FeedCardProps) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://x.com${handle}/status/123456789`);
    toast.success("คัดลอกลิงก์แล้ว");
  };

  const isCompact = layout === "compact";
  const isLarge = layout === "large";

  return (
    <div className={cn("bg-muted border border-border rounded-lg hover-glow space-y-4", isCompact ? "p-4" : "p-6")}>
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0",
            isCompact && "w-8 h-8 text-sm",
            layout === "normal" && "w-12 h-12",
            isLarge && "w-16 h-16 text-lg"
          )}
        >
          {avatar}
        </div>
        <div className="flex-1 space-y-2">
          <div>
            <h3 className={cn("font-semibold", isCompact ? "text-base" : "text-lg", isLarge && "text-xl")}>{name}</h3>
            <p className={cn("text-secondary", isCompact ? "text-xs" : "text-sm")}>{handle}</p>
          </div>
          <p className={cn("text-foreground leading-relaxed", isCompact && "text-sm line-clamp-2", isLarge && "text-lg")}>
            {summary}
          </p>
          {!isCompact && (
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={cn("border-accent text-accent bg-accent/10", isLarge && "text-base px-3 py-1")}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <Button
          variant="outline"
          size={isCompact ? "sm" : "default"}
          className="flex-1 border-border hover:bg-primary/10"
        >
          <ExternalLink className={cn("h-4 w-4 mr-2", isCompact && "h-3 w-3 mr-1")} />
          {isCompact ? "ดูโพสต์" : "ดูโพสต์ต้นทาง"}
        </Button>
        <Button
          variant="outline"
          size={isCompact ? "sm" : "default"}
          className="border-border hover:bg-primary/10"
          onClick={handleCopyLink}
        >
          <Copy className={cn("h-4 w-4 mr-2", isCompact && "h-3 w-3 mr-1")} />
          {isCompact ? "คัดลอก" : "คัดลอกลิงก์"}
        </Button>
      </div>
    </div>
  );
};

export default FeedCard;
