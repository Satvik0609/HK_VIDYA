import { FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Terms of Service
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the HK Vidya website and making donations through our platform, 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">About HK Vidya</h2>
                <p className="text-muted-foreground leading-relaxed">
                  HK Vidya is a registered charitable organization under the Indian Trusts Act. We are 
                  approved under Section 80G of the Income Tax Act, allowing donors to claim tax benefits 
                  on their donations. Our registration details are available upon request.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Donation Terms</h2>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Sponsorship Programs</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Child sponsorship is a commitment to support a child's welfare through regular donations</li>
                  <li>Sponsorship amounts are used for education, nutrition, healthcare, and holistic development</li>
                  <li>Sponsors may receive updates about their sponsored child's progress (with appropriate privacy protections for the child)</li>
                </ul>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Payment Processing</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All donations are processed in Indian Rupees (INR)</li>
                  <li>We accept major credit cards, debit cards, UPI, and net banking</li>
                  <li>Payment processing is handled by secure, PCI-DSS compliant payment gateways</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Use of Donations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We commit to using your donations responsibly and transparently. While we strive to 
                  allocate funds as indicated by donors, we reserve the right to redirect funds to areas 
                  of greatest need within our programs to maximize impact. Detailed financial reports are 
                  published annually.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tax Benefits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Donations to HK Vidya are eligible for tax deduction under Section 80G of the Income 
                  Tax Act, 1961. To claim this benefit, donors must provide their PAN card number. 
                  80G certificates are issued within 7 working days of donation confirmation.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, images, logos, and design elements, is the 
                  property of HK Vidya or used with permission. You may not reproduce, distribute, or use 
                  any content without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide accurate information, HK Vidya is not liable for any errors 
                  or omissions on this website. We are not responsible for any damages arising from your 
                  use of our website or services, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be 
                  effective immediately upon posting. Your continued use of our website after changes 
                  constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of India. Any disputes shall be subject to the 
                  exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <p className="text-foreground font-medium">HK Vidya</p>
                  <p className="text-muted-foreground">Email: legal@hkvidya.org</p>
                  <p className="text-muted-foreground">Phone: +91 12345 67890</p>
                  <p className="text-muted-foreground">ISKCON Temple Road, Bangalore, Karnataka 560010</p>
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

export default TermsOfService;
