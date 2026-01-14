import { Check, X, AlertTriangle, Globe, Building2, Briefcase, User, CreditCard } from "lucide-react";
import { LucideIcon } from "lucide-react";

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
    <div className="bg-card rounded-2xl border border-border/50 shadow-card p-6 md:p-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">Verification Signals</h3>
      
      <div className="space-y-3">
        {signals.map((signal) => {
          const { icon: StatusIcon, color, bg, border } = getStatusStyles(signal.status);
          const SignalIcon = signal.icon;
          
          return (
            <div
              key={signal.id}
              className={`flex items-start gap-4 p-4 rounded-xl border ${border} ${bg}`}
            >
              <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-card`}>
                <SignalIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-foreground">{signal.label}</span>
                  <StatusIcon className={`h-4 w-4 ${color}`} />
                </div>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { VerificationSignals };
export type { Signal };
