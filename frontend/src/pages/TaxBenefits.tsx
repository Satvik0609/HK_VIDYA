import { Link } from "react-router-dom";
import { FileCheck, Calculator, Download, HelpCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";

const TaxBenefits = () => {
  const faqs = [
    {
      question: "What is Section 80G?",
      answer: "Section 80G of the Income Tax Act, 1961 allows taxpayers to claim deductions on donations made to eligible charitable organizations. HK Vidya is registered under Section 80G, making your donations tax-deductible."
    },
    {
      question: "How much tax benefit can I claim?",
      answer: "You can claim a deduction of 50% of your donation amount, subject to a maximum of 10% of your gross total income. For example, if you donate ₹10,000, you can claim a deduction of ₹5,000 from your taxable income."
    },
    {
      question: "What documents do I need?",
      answer: "You need the 80G certificate issued by HK Vidya, your donation receipt, and a copy of our 80G registration certificate. All these are provided automatically after your donation."
    },
    {
      question: "Can NRIs claim this benefit?",
      answer: "Yes, NRIs can claim 80G benefits if they file taxes in India. The donation must be made from an NRE/NRO account for eligibility."
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              80G Tax Benefits
            </h1>
          </div>
          <p className="text-muted-foreground">Save on taxes while making a difference</p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Save up to <span className="text-primary">50%</span> on Your Donation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your generosity is rewarded! All donations to HK Vidya are eligible for tax deduction 
              under Section 80G of the Income Tax Act, 1961.
            </p>
            <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-card">
              <FileCheck className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">80G Registration No: AABTU1234XY20214</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            How Tax Benefits Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 gradient-saffron rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">1. Make a Donation</h3>
              <p className="text-muted-foreground">
                Donate any amount to support our child education and welfare programs.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="w-20 h-20 gradient-saffron rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">2. Receive Certificate</h3>
              <p className="text-muted-foreground">
                Get your 80G certificate via email within 7 working days of donation.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="w-20 h-20 gradient-saffron rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">3. Claim Deduction</h3>
              <p className="text-muted-foreground">
                Use the certificate to claim 50% deduction while filing your ITR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Example */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Tax Savings Calculator
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <p className="text-muted-foreground text-center mb-8">
                See how much you can save on your taxes with a sample calculation:
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Your Donation Amount</span>
                  <span className="font-bold text-foreground text-xl">₹12,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Eligible Deduction (50%)</span>
                  <span className="font-bold text-foreground text-xl">₹6,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Your Tax Bracket</span>
                  <span className="font-bold text-foreground text-xl">30%</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-primary/10 rounded-xl px-4 -mx-4">
                  <span className="font-semibold text-foreground">Your Tax Savings</span>
                  <span className="font-bold text-primary text-2xl">₹1,800</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6">
                * Actual savings depend on your income tax slab. Consult a tax advisor for precise calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Info */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Your 80G Certificate
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Certificate Includes:</h3>
                  <ul className="space-y-3">
                    {[
                      "Donor name and PAN number",
                      "Donation amount and date",
                      "Unique receipt number",
                      "HK Vidya 80G registration details",
                      "Digital signature of authorized signatory",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Important Notes:</h3>
                  <ul className="space-y-3">
                    {[
                      "PAN card is mandatory for 80G benefit",
                      "Certificate sent via email within 7 days",
                      "Keep certificate safe for ITR filing",
                      "Certificate valid for the financial year",
                      "Contact us if certificate not received",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to Make a Tax-Saving Donation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your contribution helps children while saving you taxes. It's a win-win!
            </p>
            <Link to="/#donate">
              <Button variant="saffron" size="xl">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now & Save Taxes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaxBenefits;
