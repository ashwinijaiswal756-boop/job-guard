import { Link } from "react-router-dom";
import { Shield, Sparkles, Users, GraduationCap, Search, AlertTriangle, CheckCircle, ArrowRight, Zap, Eye, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadge from "@/components/TrustBadge";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const trustBadges = [
    { icon: Sparkles, label: "AI Powered" },
    { icon: Users, label: "Community Verified" },
    { icon: GraduationCap, label: "Student Safe" },
  ];

  const features = [
    {
      icon: Search,
      title: "Instant URL Analysis",
      description: "Paste any job URL and get instant verification. We check domain authenticity, company records, and more.",
    },
    {
      icon: Eye,
      title: "Recruiter Verification",
      description: "Analyze recruiter profiles to detect fake accounts, suspicious patterns, and impersonators.",
    },
    {
      icon: Zap,
      title: "Real-time Detection",
      description: "Our AI scans job descriptions for common scam tactics, unrealistic promises, and red flags.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data is never stored. We analyze only public information and encrypt all communications.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Jobs Analyzed" },
    { value: "12K+", label: "Scams Detected" },
    { value: "98%", label: "Accuracy Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
              {trustBadges.map((badge) => (
                <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} />
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in text-balance" style={{ animationDelay: "0.1s" }}>
              Check if a Job is Real or a Scam —{" "}
              <span className="text-primary">Before You Apply</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Protect yourself from fake recruiters on LinkedIn, WhatsApp, Instagram, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/check">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Shield className="h-5 w-5" />
                  Check Job Authenticity
                </Button>
              </Link>
              <Link to="/report">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  <AlertTriangle className="h-5 w-5" />
                  Report a Scam
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How JobShield Protects You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our multi-layered verification system analyzes jobs from every angle to keep you safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your job verified in seconds with our easy-to-use platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Paste the Job", description: "Copy and paste the job URL, recruiter profile, or job description." },
              { step: "2", title: "AI Analysis", description: "Our AI checks multiple verification signals in real-time." },
              { step: "3", title: "Get Results", description: "Receive a detailed risk score and actionable recommendations." },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-trust text-primary-foreground font-bold text-lg mx-auto mb-4 shadow-card">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 h-5 w-5 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/check">
              <Button variant="hero" size="lg">
                Start Checking Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl border border-border/50 shadow-elevated p-8 md:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-trust mx-auto mb-6 shadow-card">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Found a Suspicious Job?
            </h2>
            <p className="text-muted-foreground mb-8">
              Help protect the community by reporting scam jobs. Your report could save someone from losing money or personal information.
            </p>
            <Link to="/report">
              <Button variant="success" size="lg">
                <AlertTriangle className="h-5 w-5" />
                Report a Scam
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
