import { Link } from "react-router-dom";
import { Shield, Sparkles, Users, GraduationCap, Search, AlertTriangle, ArrowRight, Zap, Eye, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadge from "@/components/TrustBadge";
import FeatureCard from "@/components/FeatureCard";
import FloatingElements from "@/components/FloatingElements";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const trustBadges = [
    { icon: Sparkles, label: "AI Powered" },
    { icon: Users, label: "Community Verified" },
    { icon: GraduationCap, label: "Student Safe" },
  ];

  const features = [
    { icon: Search, title: "Instant URL Analysis", description: "Paste any job URL and get instant verification. We check domain authenticity, company records, and more." },
    { icon: Eye, title: "Recruiter Verification", description: "Analyze recruiter profiles to detect fake accounts, suspicious patterns, and impersonators." },
    { icon: Zap, title: "Real-time Detection", description: "Our AI scans job descriptions for common scam tactics, unrealistic promises, and red flags." },
    { icon: Lock, title: "Privacy First", description: "Your data is never stored. We analyze only public information and encrypt all communications." },
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
        <FloatingElements />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {trustBadges.map((badge, index) => (
                <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} delay={index * 0.1} />
              ))}
            </div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight"
            >
              Check if a Job is Real or a Scam —{" "}
              <span className="text-primary relative">
                Before You Apply
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Protect yourself from fake recruiters on LinkedIn, WhatsApp, Instagram, and more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/check">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" className="w-full sm:w-auto shadow-elevated">
                    <Shield className="h-5 w-5" />
                    Check Job Authenticity
                  </Button>
                </motion.div>
              </Link>
              <Link to="/report">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    <AlertTriangle className="h-5 w-5" />
                    Report a Scam
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-20"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How JobShield Protects You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our multi-layered verification system analyzes jobs from every angle.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple 3-Step Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Get your job verified in seconds.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Paste the Job", description: "Copy and paste the job URL, recruiter profile, or job description." },
              { step: "2", title: "AI Analysis", description: "Our AI checks multiple verification signals in real-time." },
              { step: "3", title: "Get Results", description: "Receive a detailed risk score and actionable recommendations." },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.15} className="relative text-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-14 h-14 rounded-2xl gradient-trust text-primary-foreground font-bold text-xl mx-auto mb-5 shadow-card"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < 2 && <ArrowRight className="hidden md:block absolute top-7 -right-4 h-5 w-5 text-muted-foreground/50" />}
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-14">
            <Link to="/check">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="lg">Start Checking Now <ArrowRight className="h-4 w-4" /></Button>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center bg-card rounded-3xl border border-border/50 shadow-elevated p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-trust mx-auto mb-6 shadow-card"
              >
                <Shield className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Found a Suspicious Job?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Help protect the community by reporting scam jobs.</p>
              <Link to="/report">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="success" size="lg"><AlertTriangle className="h-5 w-5" />Report a Scam</Button>
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
