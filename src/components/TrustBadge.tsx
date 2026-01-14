import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
}

const TrustBadge = ({ icon: Icon, label }: TrustBadgeProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 shadow-soft">
      <Icon className="h-4 w-4 text-accent" />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
};

export default TrustBadge;
