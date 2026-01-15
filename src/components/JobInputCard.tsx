import { useState } from "react";
import { Link2, FileText, User, Loader2, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative bg-card rounded-2xl border border-border/50 shadow-card p-6 md:p-8 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="relative">
          {/* Input Type Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {inputTypes.map((type, index) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setInputType(type.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  inputType === type.id
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <type.icon className="h-4 w-4" />
                {type.label}
                {inputType === type.id && (
                  <motion.div
                    layoutId="activeInputType"
                    className="absolute inset-0 bg-primary rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={inputType}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={currentType.placeholder}
                    className="min-h-[140px] resize-none text-base bg-background border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl"
                    disabled={isLoading}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.01 }}
              whileTap={{ scale: isLoading ? 1 : 0.99 }}
            >
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full relative overflow-hidden"
                disabled={!input.trim() || isLoading}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="h-5 w-5" />
                      </motion.div>
                      <span>Analyzing job authenticity...</span>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Sparkles className="h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Search className="h-5 w-5" />
                      <span>Analyze Job</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </form>

          {/* Info Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-5 flex items-center justify-center gap-1"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Your data is encrypted and never stored. We only analyze public information.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default JobInputCard;
