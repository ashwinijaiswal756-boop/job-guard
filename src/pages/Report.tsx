import { useState } from "react";
import { AlertTriangle, Send, CheckCircle, Upload, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Report = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    platform: "",
    jobLink: "",
    recruiterName: "",
    description: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const platforms = [
    { value: "linkedin", label: "LinkedIn" },
    { value: "whatsapp", label: "WhatsApp" },
    { value: "telegram", label: "Telegram" },
    { value: "instagram", label: "Instagram" },
    { value: "email", label: "Email" },
    { value: "other", label: "Other" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleNewReport = () => {
    setIsSubmitted(false);
    setFormData({
      platform: "",
      jobLink: "",
      recruiterName: "",
      description: "",
    });
    setUploadedFiles([]);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full gradient-safe mx-auto mb-6 shadow-card animate-fade-in">
                <CheckCircle className="h-10 w-10 text-success-foreground" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Report Submitted Successfully
              </h1>
              <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Thank you for helping protect the community. Our team will review your report and take appropriate action.
              </p>
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" onClick={handleNewReport}>
                  Submit Another Report
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-destructive mb-4">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wide">Report Center</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Report a Scam Job
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Help us protect others by reporting fraudulent job postings and suspicious recruiters.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 md:py-12 -mt-4">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 shadow-card p-6 md:p-8 space-y-6">
                {/* Platform */}
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform *</Label>
                  <Select
                    value={formData.platform}
                    onValueChange={(value) => setFormData({ ...formData, platform: value })}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Where did you find this scam?" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map((platform) => (
                        <SelectItem key={platform.value} value={platform.value}>
                          {platform.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Job Link */}
                <div className="space-y-2">
                  <Label htmlFor="jobLink">Job Link *</Label>
                  <Input
                    id="jobLink"
                    type="url"
                    placeholder="https://..."
                    value={formData.jobLink}
                    onChange={(e) => setFormData({ ...formData, jobLink: e.target.value })}
                    className="bg-background"
                    required
                  />
                </div>

                {/* Recruiter Name */}
                <div className="space-y-2">
                  <Label htmlFor="recruiterName">Recruiter Name (optional)</Label>
                  <Input
                    id="recruiterName"
                    type="text"
                    placeholder="Name of the person who contacted you"
                    value={formData.recruiterName}
                    onChange={(e) => setFormData({ ...formData, recruiterName: e.target.value })}
                    className="bg-background"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description of Scam *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what happened, what red flags you noticed, and any other relevant details..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="min-h-[120px] bg-background"
                    required
                  />
                </div>

                {/* Proof Upload */}
                <div className="space-y-2">
                  <Label>Proof (optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload screenshots or documents
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG, or PDF up to 10MB
                      </p>
                    </label>
                  </div>
                  
                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2 mt-3">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-secondary rounded-lg p-3"
                        >
                          <span className="text-sm text-foreground truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={!formData.platform || !formData.jobLink || !formData.description || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting Report...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Report
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Your report is anonymous. We never share your personal information.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Report;
