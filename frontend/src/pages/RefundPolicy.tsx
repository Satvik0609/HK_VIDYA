import { RotateCcw, Clock, CheckCircle, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center">
              <RotateCcw className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Refund Policy
            </h1>
          </div>
          <p className="text-muted-foreground">Last updated: February 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-foreground mb-2">7 Days</h3>
                <p className="text-sm text-muted-foreground">Refund request window from donation date</p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Full Refund</h3>
                <p className="text-sm text-muted-foreground">100% refund for eligible requests</p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                <AlertCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-foreground mb-2">5-7 Days</h3>
                <p className="text-sm text-muted-foreground">Processing time for approved refunds</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At HK Vidya, we are grateful for every donation that helps us serve underprivileged 
                  children. We understand that circumstances may change, and we have established this 
                  refund policy to address such situations while maintaining transparency and trust.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Refund Eligibility</h2>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Eligible for Refund:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Duplicate donations made in error</li>
                  <li>Incorrect donation amounts (significantly different from intended)</li>
                  <li>Unauthorized transactions (with appropriate verification)</li>
                  <li>Technical errors during payment processing</li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Not Eligible for Refund:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Donations made more than 7 days ago</li>
                  <li>Change of mind without valid reason</li>
                  <li>Donations for which 80G certificates have already been issued and filed</li>
                  <li>Anonymous donations (as we cannot verify the donor)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-8 h-8 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Contact Us</h4>
                      <p className="text-muted-foreground text-sm">Email us at refunds@hkvidya.org with your donation details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-8 h-8 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Provide Information</h4>
                      <p className="text-muted-foreground text-sm">Include: Transaction ID, donation date, amount, reason for refund</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-8 h-8 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Review Process</h4>
                      <p className="text-muted-foreground text-sm">Our team will review your request within 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-8 h-8 gradient-saffron rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Refund Processing</h4>
                      <p className="text-muted-foreground text-sm">Approved refunds are processed within 5-7 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Refund Method</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds will be processed to the original payment method used for the donation:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Credit/Debit Cards:</strong> Credited back to the same card (5-7 business days)</li>
                  <li><strong>UPI:</strong> Refunded to the linked bank account (2-3 business days)</li>
                  <li><strong>Net Banking:</strong> Credited to the source bank account (5-7 business days)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cancellation of Recurring Donations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have set up a recurring monthly sponsorship and wish to cancel, please contact 
                  us at least 5 days before your next scheduled donation. We respect your decision and 
                  will immediately stop future deductions. Past donations are not eligible for refund 
                  once the refund window has passed.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tax Certificate Implications</h2>
                <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-xl">
                  <p className="text-foreground leading-relaxed">
                    <strong>Important:</strong> If an 80G tax certificate has been issued for your donation 
                    and you have already used it for tax filing, the refund process becomes more complex. 
                    Please contact us to discuss your options.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact for Refunds</h2>
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <p className="text-foreground font-medium">HK Vidya - Donor Services</p>
                  <p className="text-muted-foreground">Email: refunds@hkvidya.org</p>
                  <p className="text-muted-foreground">Phone: +91 12345 67890</p>
                  <p className="text-muted-foreground text-sm mt-2">Available: Monday - Saturday, 10 AM - 6 PM IST</p>
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

export default RefundPolicy;
