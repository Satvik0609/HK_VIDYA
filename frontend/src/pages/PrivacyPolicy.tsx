import { Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>
          </div>
          <p className="text-muted-foreground">Last updated: February 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-card rounded-2xl p-8 shadow-card space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  HK Vidya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website and make donations to support our programs.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you make a donation or register on our site, we may collect:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Full name and contact information (email, phone number, address)</li>
                  <li>PAN card number (for 80G tax benefit certificates)</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Process your donations and issue receipts</li>
                  <li>Generate 80G tax benefit certificates</li>
                  <li>Send you updates about sponsored children and program impact</li>
                  <li>Communicate about our initiatives (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information. All payment transactions are encrypted using SSL technology. We do not store 
                  your complete payment card details on our servers.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party service providers to process payments, send emails, and analyze 
                  website traffic. These providers have access to your information only to perform specific 
                  tasks on our behalf and are obligated to protect your information.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies to enhance your browsing experience. You can choose to disable 
                  cookies through your browser settings, though this may affect some website functionality.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or your personal data, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
                  <p className="text-foreground font-medium">HK Vidya - Data Protection Officer</p>
                  <p className="text-muted-foreground">Email: privacy@hkvidya.org</p>
                  <p className="text-muted-foreground">Phone: +91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
