import { Shield, AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface RiskScoreCardProps {
  score: number;
  companyName?: string;
  jobTitle?: string;
}

const RiskScoreCard = ({ score, companyName, jobTitle }: RiskScoreCardProps) => {
  const getRiskLevel = () => {
    if (score <= 30) return { level: "Low Risk", color: "text-success", bg: "bg-success/10", icon: CheckCircle, borderColor: "border-success/30", gradient: "from-success/20 to-success/5" };
    if (score <= 60) return { level: "Moderate Risk", color: "text-warning", bg: "bg-warning/10", icon: AlertTriangle, borderColor: "border-warning/30", gradient: "from-warning/20 to-warning/5" };
    return { level: "High Risk", color: "text-destructive", bg: "bg-destructive/10", icon: XCircle, borderColor: "border-destructive/30", gradient: "from-destructive/20 to-destructive/5" };
  };

  const { level, color, bg, icon: Icon, borderColor, gradient } = getRiskLevel();

  const getScoreColor = () => {
    if (score <= 30) return "text-success";
    if (score <= 60) return "text-warning";
    return "text-destructive";
  };

  const getStrokeColor = () => {
    if (score <= 30) return "stroke-success";
    if (score <= 60) return "stroke-warning";
    return "stroke-destructive";
  };

  const circumference = 2 * Math.PI * 56;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative bg-card rounded-2xl border ${borderColor} shadow-card p-6 md:p-8 overflow-hidden`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{jobTitle || "Job Analysis"}</h3>
            {companyName && (
              <p className="text-sm text-muted-foreground">{companyName}</p>
            )}
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${bg}`}
          >
            <Icon className={`h-4 w-4 ${color}`} />
            <span className={`text-sm font-medium ${color}`}>{level}</span>
          </motion.div>
        </div>

        {/* Score Display */}
        <div className="text-center mb-6">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-32 h-32 transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/30"
              />
              {/* Progress circle */}
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                className={getStrokeColor()}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                style={{
                  strokeDasharray: circumference,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className={`text-4xl font-bold ${getScoreColor()}`}
              >
                {score}%
              </motion.span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Scam Risk Score</p>
        </div>

        {/* Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className={`p-4 rounded-xl ${bg}`}
        >
          <div className="flex items-start gap-3">
            <Shield className={`h-5 w-5 ${color} flex-shrink-0 mt-0.5`} />
            <p className={`text-sm text-muted-foreground`}>
              {score <= 30 && "This job appears to be legitimate. Proceed with normal caution."}
              {score > 30 && score <= 60 && "Some warning signs detected. Verify details before proceeding."}
              {score > 60 && "Multiple red flags detected. We recommend avoiding this opportunity."}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RiskScoreCard;
