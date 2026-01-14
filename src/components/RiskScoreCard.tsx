import { Shield, AlertTriangle, XCircle, CheckCircle } from "lucide-react";

interface RiskScoreCardProps {
  score: number;
  companyName?: string;
  jobTitle?: string;
}

const RiskScoreCard = ({ score, companyName, jobTitle }: RiskScoreCardProps) => {
  const getRiskLevel = () => {
    if (score <= 30) return { level: "Low Risk", color: "text-success", bg: "bg-success/10", icon: CheckCircle, borderColor: "border-success/30" };
    if (score <= 60) return { level: "Moderate Risk", color: "text-warning", bg: "bg-warning/10", icon: AlertTriangle, borderColor: "border-warning/30" };
    return { level: "High Risk", color: "text-destructive", bg: "bg-destructive/10", icon: XCircle, borderColor: "border-destructive/30" };
  };

  const { level, color, bg, icon: Icon, borderColor } = getRiskLevel();

  const getScoreColor = () => {
    if (score <= 30) return "text-success";
    if (score <= 60) return "text-warning";
    return "text-destructive";
  };

  const getProgressColor = () => {
    if (score <= 30) return "bg-success";
    if (score <= 60) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className={`bg-card rounded-2xl border ${borderColor} shadow-card p-6 md:p-8`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{jobTitle || "Job Analysis"}</h3>
          {companyName && (
            <p className="text-sm text-muted-foreground">{companyName}</p>
          )}
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${bg}`}>
          <Icon className={`h-4 w-4 ${color}`} />
          <span className={`text-sm font-medium ${color}`}>{level}</span>
        </div>
      </div>

      {/* Score Display */}
      <div className="text-center mb-6">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-8 border-muted flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                strokeWidth="8"
                stroke="currentColor"
                className={getProgressColor()}
                strokeDasharray={`${(score / 100) * 352} 352`}
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center z-10">
              <span className={`text-4xl font-bold ${getScoreColor()}`}>{score}</span>
              <span className={`text-lg ${getScoreColor()}`}>%</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3">Scam Risk Score</p>
      </div>

      {/* Summary */}
      <div className={`p-4 rounded-xl ${bg}`}>
        <p className={`text-sm ${color} font-medium text-center`}>
          {score <= 30 && "This job appears to be legitimate. Proceed with normal caution."}
          {score > 30 && score <= 60 && "Some warning signs detected. Verify details before proceeding."}
          {score > 60 && "Multiple red flags detected. We recommend avoiding this opportunity."}
        </p>
      </div>
    </div>
  );
};

export default RiskScoreCard;
