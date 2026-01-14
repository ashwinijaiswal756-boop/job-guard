import { useState } from "react";
import { Link2, FileText, User, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface JobInputCardProps {
  onAnalyze: (input: string, type: string) => void;
  isLoading: boolean;
}

const JobInputCard = ({ onAnalyze, isLoading }: JobInputCardProps) => {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState<"url" | "profile" | "description">("url");

  const inputTypes = [
    { id: "url" as const, label: "Job URL", icon: Link2, placeholder: "https://linkedin.com/jobs/..." },
    { id: "profile" as const, label: "Recruiter Profile", icon: User, placeholder: "https://linkedin.com/in/..." },
    { id: "description" as const, label: "Job Description", icon: FileText, placeholder: "Paste the full job description here..." },
  ];

  const currentType = inputTypes.find(t => t.id === inputType)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAnalyze(input, inputType);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-2xl border border-border/50 shadow-card p-6 md:p-8">
        {/* Input Type Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {inputTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setInputType(type.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                inputType === type.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <type.icon className="h-4 w-4" />
              {type.label}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={currentType.placeholder}
              className="min-h-[120px] resize-none text-base bg-background border-border/50 focus:border-primary/50 transition-colors"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing job authenticity...
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                Analyze Job
              </>
            )}
          </Button>
        </form>

        {/* Info Text */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Your data is encrypted and never stored. We only analyze public information.
        </p>
      </div>
    </div>
  );
};

export default JobInputCard;
