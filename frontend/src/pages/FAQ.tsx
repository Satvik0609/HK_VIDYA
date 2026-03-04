import { HelpCircle, Heart, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";

const faqCategories = [
  {
    category: "Donations & Payments",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe. All payments are processed securely through our PCI-DSS compliant payment gateway."
      },
      {
        question: "Is my donation secure?",
        answer: "Absolutely. We use industry-standard SSL encryption for all transactions. Your payment information is never stored on our servers and is processed through secure, trusted payment partners."
      },
      {
        question: "Can I make a one-time donation instead of monthly?",
        answer: "Yes! While our sponsorship programs are designed as monthly commitments for sustained support, we also welcome one-time donations. Simply select 'One-time' option on the donation form."
      },
      {
        question: "What is the minimum donation amount?",
        answer: "There is no minimum amount for general donations. For child sponsorship programs, the minimum is ₹800/month for the Education tier. Every contribution, regardless of size, makes a difference."
      },
      {
        question: "Can I donate in a currency other than INR?",
        answer: "Currently, our online platform processes donations in Indian Rupees (INR). International donors can contribute, and the conversion will be handled automatically by your bank or payment provider."
      },
    ]
  },
  {
    category: "Child Sponsorship",
    questions: [
      {
        question: "How does child sponsorship work?",
        answer: "When you sponsor a child, your monthly contribution goes directly toward their education, nutrition, healthcare, and holistic development. You'll receive regular updates about your sponsored child's progress, including photos and reports."
      },
      {
        question: "Can I choose which child to sponsor?",
        answer: "We match sponsors with children based on the greatest need to ensure equitable distribution of resources. However, if you have specific preferences (age, location, gender), please contact us and we'll do our best to accommodate."
      },
      {
        question: "Will I be able to communicate with my sponsored child?",
        answer: "Yes! Sponsors can send letters and messages to their sponsored children through our platform. We also facilitate virtual meet-and-greets during special occasions, subject to child protection guidelines."
      },
      {
        question: "What happens if I need to stop my sponsorship?",
        answer: "We understand circumstances change. You can cancel your sponsorship at any time by contacting us at least 5 days before your next payment date. The child will be matched with a new sponsor to ensure continuity of support."
      },
      {
        question: "How long does a sponsorship last?",
        answer: "Sponsorships typically continue until the child completes their education or reaches 18 years of age. Many sponsors continue their relationship even after the formal program ends."
      },
    ]
  },
  {
    category: "Tax Benefits (80G)",
    questions: [
      {
        question: "Are donations to HK Vidya tax-deductible?",
        answer: "Yes! HK Vidya is registered under Section 80G of the Income Tax Act, 1961. You can claim a deduction of 50% of your donation amount, subject to 10% of your gross total income."
      },
      {
        question: "How do I get my 80G certificate?",
        answer: "Your 80G certificate is automatically generated and sent to your registered email within 7 working days of your donation. Ensure you provide your PAN card number during donation for the certificate to be valid."
      },
      {
        question: "What if I don't receive my 80G certificate?",
        answer: "Please check your spam folder first. If you still can't find it, contact us at tax@hkvidya.org with your donation details, and we'll resend it within 24 hours."
      },
      {
        question: "Can NRIs claim 80G benefits?",
        answer: "Yes, NRIs can claim 80G benefits if they file taxes in India. The donation must be made from an NRE/NRO account. Please consult your tax advisor for specific guidance."
      },
    ]
  },
  {
    category: "Transparency & Impact",
    questions: [
      {
        question: "How is my donation used?",
        answer: "We maintain complete transparency. Approximately 85% of donations go directly to program delivery (education, food, healthcare). The remaining 15% covers essential administrative and fundraising costs. Detailed breakdowns are available in our annual reports."
      },
      {
        question: "Can I visit the programs I'm supporting?",
        answer: "Yes! We welcome donor visits to our centers. Please contact us at least 2 weeks in advance to arrange a visit. We'll coordinate a tour and introduce you to the children and staff."
      },
      {
        question: "How do I know my donation is making an impact?",
        answer: "Sponsors receive quarterly impact reports with photos, academic progress, and stories. We also publish annual impact reports showing overall program outcomes, available on our website."
      },
      {
        question: "Are your financial statements audited?",
        answer: "Yes, our accounts are audited annually by an independent chartered accountant. Audited financial statements and annual reports are published on our website and available upon request."
      },
    ]
  },
  {
    category: "Account & Technical",
    questions: [
      {
        question: "How do I update my payment information?",
        answer: "Log into your donor account and navigate to 'Payment Settings' to update your card or bank details. Alternatively, contact our support team at support@hkvidya.org for assistance."
      },
      {
        question: "Can I change my sponsorship tier?",
        answer: "Yes! You can upgrade or modify your sponsorship tier at any time. Contact us or log into your account to make changes. Upgrades take effect from the next billing cycle."
      },
      {
        question: "I forgot my account password. How do I reset it?",
        answer: "Click 'Forgot Password' on the login page and enter your registered email. You'll receive a password reset link within a few minutes. Check your spam folder if you don't see it."
      },
      {
        question: "How do I unsubscribe from emails?",
        answer: "Every email includes an 'Unsubscribe' link at the bottom. Alternatively, log into your account and adjust your communication preferences. Note: You'll still receive essential transaction and tax-related emails."
      },
    ]
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const totalQuestions = faqCategories.reduce((acc, cat) => acc + cat.questions.length, 0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Find answers to common questions about donations, sponsorship, tax benefits, and more. 
            Can't find what you're looking for? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="container px-4">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            {searchQuery 
              ? `Found ${filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} results`
              : `${totalQuestions} questions across ${faqCategories.length} categories`
            }
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 flex-1">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  No results found
                </h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any questions matching "{searchQuery}"
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            ) : (
              filteredCategories.map((category, categoryIndex) => (
                <div key={category.category} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 gradient-saffron rounded-lg flex items-center justify-center text-sm text-primary-foreground font-bold">
                      {categoryIndex + 1}
                    </span>
                    {category.category}
                  </h2>
                  <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${category.category}-${index}`}
                          className="border-b border-border last:border-0"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/30 transition-colors">
                            <span className="font-medium text-foreground pr-4">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="saffron" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/#donate">
                <Button variant="outline" size="lg">
                  <Heart className="w-4 h-4 mr-2" />
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
