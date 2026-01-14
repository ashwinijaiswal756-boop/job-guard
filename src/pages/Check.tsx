import { useState } from "react";
import { Globe, Building2, Briefcase, User, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobInputCard from "@/components/JobInputCard";
import RiskScoreCard from "@/components/RiskScoreCard";
import { VerificationSignals, Signal } from "@/components/VerificationSignals";

const Check = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    companyName: string;
    jobTitle: string;
    signals: Signal[];
  } | null>(null);

  const handleAnalyze = (input: string, type: string) => {
    setIsLoading(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      // Mock result - in production this would come from an API
      const mockScore = Math.floor(Math.random() * 100);
      
      const mockSignals: Signal[] = [
        {
          id: "domain",
          label: "Domain Verification",
          status: mockScore < 40 ? "pass" : mockScore < 70 ? "warning" : "fail",
          description: mockScore < 40 
            ? "Domain is registered and matches company records" 
            : mockScore < 70 
            ? "Domain is relatively new or has limited history"
            : "Domain appears suspicious or recently registered",
          icon: Globe,
        },
        {
          id: "company",
          label: "Company Existence",
          status: mockScore < 50 ? "pass" : mockScore < 75 ? "warning" : "fail",
          description: mockScore < 50 
            ? "Company is registered and has verifiable records" 
            : mockScore < 75 
            ? "Limited company information found"
            : "Cannot verify company existence",
          icon: Building2,
        },
        {
          id: "opening",
          label: "Opening Match",
          status: mockScore < 45 ? "pass" : mockScore < 65 ? "warning" : "fail",
          description: mockScore < 45 
            ? "Job opening matches company's official listings" 
            : mockScore < 65 
            ? "Partial match with known openings"
            : "No matching job opening found on company site",
          icon: Briefcase,
        },
        {
          id: "recruiter",
          label: "Recruiter Authenticity",
          status: mockScore < 35 ? "pass" : mockScore < 60 ? "warning" : "fail",
          description: mockScore < 35 
            ? "Recruiter profile appears legitimate and well-established" 
            : mockScore < 60 
            ? "Some recruiter details could not be verified"
            : "Recruiter profile shows suspicious patterns",
          icon: User,
        },
        {
          id: "payment",
          label: "Payment Request Detection",
          status: mockScore < 80 ? "pass" : "fail",
          description: mockScore < 80 
            ? "No payment requests detected in job posting" 
            : "Warning: Job requires upfront payment or fees",
          icon: CreditCard,
        },
      ];

      setResult({
        score: mockScore,
        companyName: "Example Company Inc.",
        jobTitle: "Software Developer",
        signals: mockSignals,
      });
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Check Job Authenticity
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Paste a job URL, recruiter profile, or job description to analyze its legitimacy.
            </p>
          </div>
        </section>

        {/* Input Section */}
        <section className="py-8 md:py-12 -mt-4">
          <div className="container mx-auto px-4">
            <JobInputCard onAnalyze={handleAnalyze} isLoading={isLoading} />
          </div>
        </section>

        {/* Results Section */}
        {result && (
          <section className="py-8 md:py-12 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Analysis Results
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <RiskScoreCard
                    score={result.score}
                    companyName={result.companyName}
                    jobTitle={result.jobTitle}
                  />
                  <VerificationSignals signals={result.signals} />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => setResult(null)}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Check another job
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tips Section */}
        {!result && !isLoading && (
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="bg-card rounded-2xl border border-border/50 shadow-soft p-6">
                  <h3 className="font-semibold text-foreground mb-4">Tips for staying safe:</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Never pay money to apply for a job or for training materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Be wary of jobs that promise unrealistic salaries or benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Verify the company exists on official registries and LinkedIn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Check if the recruiter has a verified company email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Trust your instincts — if something feels off, it probably is</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Check;
