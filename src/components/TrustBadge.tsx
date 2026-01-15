import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const TrustBadge = ({ icon: Icon, label, delay = 0 }: TrustBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay, 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="flex items-center gap-2.5 px-5 py-2.5 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 shadow-soft hover:shadow-card hover:border-primary/20 transition-all duration-300 cursor-default"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      >
        <Icon className="h-4 w-4 text-accent" />
      </motion.div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </motion.div>
  );
};

export default TrustBadge;
