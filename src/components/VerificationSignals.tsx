import { Check, X, AlertTriangle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Signal {
  id: string;
  label: string;
  status: "pass" | "fail" | "warning";
  description: string;
  icon: LucideIcon;
}

interface VerificationSignalsProps {
  signals: Signal[];
}

const VerificationSignals = ({ signals }: VerificationSignalsProps) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "pass":
        return { icon: Check, color: "text-success", bg: "bg-success/10", border: "border-success/20" };
      case "fail":
        return { icon: X, color: "text-destructive", bg: "bg-destructive/10", border: "border-destructive/20" };
      case "warning":
        return { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10", border: "border-warning/20" };
      default:
        return { icon: Check, color: "text-muted-foreground", bg: "bg-muted", border: "border-border" };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 shadow-card p-6 md:p-8"
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">Verification Signals</h3>
      
      <div className="space-y-3">
        {signals.map((signal, index) => {
          const { icon: StatusIcon, color, bg, border } = getStatusStyles(signal.status);
          const SignalIcon = signal.icon;
          
          return (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4, ease: "easeOut" }}
              whileHover={{ x: 4 }}
              className={`flex items-start gap-4 p-4 rounded-xl border ${border} ${bg} transition-all duration-300 hover:shadow-soft cursor-default`}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-card shadow-soft`}
              >
                <SignalIcon className="h-5 w-5 text-muted-foreground" />
              </motion.div>
              
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-foreground">{signal.label}</span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <StatusIcon className={`h-4 w-4 ${color}`} />
                  </motion.div>
                </div>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export { VerificationSignals };
export type { Signal };
