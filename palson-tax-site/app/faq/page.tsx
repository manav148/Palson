import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Palson Tax",
  description:
    "Get answers to common questions about tax preparation, filing deadlines, deductions, IRS audits, and more.",
  alternates: {
    canonical: "/faq",
  },
};

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        q: "What services does Palson Tax offer?",
        a: "We offer comprehensive tax and accounting services including individual tax preparation, small business tax returns, bookkeeping, payroll services, tax planning, and IRS representation. We serve both individuals and businesses across all 50 states.",
      },
      {
        q: "How do I get started?",
        a: "Start by booking a free consultation through our contact page or by calling us. We'll discuss your situation, answer questions, and provide a clear quote. If you decide to move forward, we'll send you a secure portal link to upload documents and get started.",
      },
      {
        q: "Do I need to visit your office in person?",
        a: "No! We offer completely virtual services. You can upload documents securely through our portal, and we'll handle everything remotely. We also conduct video calls for reviews and consultations. However, in-person meetings are available if you prefer.",
      },
      {
        q: "Which states do you serve?",
        a: "We serve clients in all 50 states. Our IRS Enrolled Agents have unlimited practice rights before the IRS, and our team is experienced with multi-state tax compliance.",
      },
    ],
  },
  {
    category: "Tax Preparation",
    questions: [
      {
        q: "When should I file my tax return?",
        a: "The IRS tax filing deadline is typically April 15th (or the next business day if it falls on a weekend). However, we recommend filing as early as possible to avoid last-minute stress and receive your refund faster. If you need more time, we can file an extension giving you until October 15th.",
      },
      {
        q: "What documents do I need to file my taxes?",
        a: "You'll need income documents (W-2s, 1099s), expense records, prior year returns, and documentation for deductions (mortgage interest, property taxes, charitable donations, business expenses, etc.). We'll provide a detailed checklist based on your specific situation after your consultation.",
      },
      {
        q: "How long does tax preparation take?",
        a: "Most individual returns are completed within 3-5 business days once we have all your documents. Business returns typically take 7-10 days. Complex returns with multiple income sources or multi-state filings may take longer. We'll give you an estimated timeline during your consultation.",
      },
      {
        q: "Can you prepare prior year returns?",
        a: "Yes! We frequently prepare and file prior year returns for clients who missed deadlines or discovered errors. We can file up to three years back to claim refunds, and we can help with older returns to resolve compliance issues.",
      },
      {
        q: "What if I made a mistake on a previous return?",
        a: "We can file an amended return to correct errors. If the mistake results in additional tax owed, it's important to file the amendment quickly to minimize penalties and interest. If you're owed a refund, you generally have three years to amend.",
      },
    ],
  },
  {
    category: "Deductions & Credits",
    questions: [
      {
        q: "Should I take the standard deduction or itemize?",
        a: "It depends on your situation. For 2024, the standard deduction is $14,600 (single) and $29,200 (married filing jointly). If your itemized deductions (mortgage interest, state taxes, charitable donations, medical expenses) exceed these amounts, itemizing makes sense. We'll calculate both and use whichever saves you more.",
      },
      {
        q: "What business expenses can I deduct?",
        a: "You can deduct ordinary and necessary business expenses including office supplies, software, travel, meals (50%), professional services, advertising, insurance, and more. Home office, vehicle use, and equipment purchases have special rules. We'll help you identify all eligible deductions while staying compliant.",
      },
      {
        q: "Can I deduct my home office?",
        a: "Yes, if you use part of your home regularly and exclusively for business. You can use the simplified method ($5 per square foot, up to 300 sq ft) or actual expense method (portion of mortgage/rent, utilities, insurance, repairs). We'll calculate which method saves you more.",
      },
      {
        q: "What tax credits am I eligible for?",
        a: "Common credits include Child Tax Credit, Earned Income Tax Credit, education credits (AOTC, Lifetime Learning), retirement contribution credits, and energy-efficient home improvement credits. Eligibility depends on income, family status, and expenses. We'll identify all credits you qualify for.",
      },
    ],
  },
  {
    category: "Small Business",
    questions: [
      {
        q: "Should I form an LLC or S-Corp?",
        a: "It depends on your revenue, expenses, and growth plans. An LLC offers flexibility and simplicity. An S-Corp can provide tax savings once you're consistently making $60k+ in profit, but requires payroll and additional compliance. We'll analyze your specific situation and recommend the best structure.",
      },
      {
        q: "Do I need to make quarterly estimated tax payments?",
        a: "Yes, if you expect to owe $1,000 or more in tax. Self-employed individuals and business owners typically need to pay quarterly. We calculate your estimates based on projected income and help you avoid underpayment penalties.",
      },
      {
        q: "What's the difference between an independent contractor and employee?",
        a: "Employees receive W-2s, have taxes withheld, and may receive benefits. Independent contractors receive 1099s, pay self-employment tax, and handle their own benefits. The IRS has strict rules about classification, and misclassification can result in penalties. We can help you classify workers correctly.",
      },
      {
        q: "Do I need bookkeeping if I'm a small business?",
        a: "Absolutely. Clean books are essential for understanding profitability, making business decisions, securing loans, and preparing accurate tax returns. Even if you're a solopreneur, organized records save time and money at tax season. Ask about our affordable monthly bookkeeping services.",
      },
    ],
  },
  {
    category: "IRS Matters",
    questions: [
      {
        q: "What should I do if I get an IRS notice?",
        a: "Don't panic, but don't ignore it. Read the notice carefully to understand what the IRS is requesting. Contact us immediately—we'll review the notice, communicate with the IRS on your behalf, and resolve the issue. Most notices are routine and easily resolved.",
      },
      {
        q: "What happens during an IRS audit?",
        a: "The IRS will request documentation to verify items on your return (income, deductions, credits). Most audits are done by mail, not in person. As your representative, we'll handle all communication, gather required documents, and argue your position. If you're a client, we represent you at no additional charge for returns we prepared.",
      },
      {
        q: "Can you help if I owe back taxes?",
        a: "Yes! We have extensive experience resolving tax debt. We can negotiate installment agreements, submit Offers in Compromise (settle for less), request penalty abatement, or explore other options. We'll analyze your situation and pursue the best resolution strategy.",
      },
      {
        q: "What is an Offer in Compromise?",
        a: "An OIC allows you to settle your tax debt for less than you owe. The IRS considers your income, expenses, asset equity, and ability to pay. It's difficult to qualify without professional help—approval rates are low for DIY submissions. We have a strong track record of successful OIC negotiations.",
      },
    ],
  },
  {
    category: "Deadlines & Dates",
    questions: [
      {
        q: "What are the key tax deadlines I should know?",
        a: "April 15: Individual & C-Corp returns due. March 15: S-Corp & Partnership returns due. January 31: W-2s and 1099s due. Quarterly estimates: April 15, June 15, Sept 15, Jan 15. State deadlines may vary. We send reminder emails to keep you on track.",
      },
      {
        q: "Can I get an extension to file?",
        a: "Yes, we can file an extension giving you until October 15th to submit your return. However, this extends the filing deadline, not the payment deadline. If you owe tax, you must estimate and pay by April 15th to avoid penalties.",
      },
      {
        q: "How long should I keep my tax records?",
        a: "Keep records for at least 3 years from the date you filed or 2 years from the date you paid tax, whichever is later. For business property, keep records at least 3 years after you dispose of the property. If you underreported income by 25%+, keep records for 6 years. No statute of limitations if you didn't file.",
      },
    ],
  },
];

export default function FAQPage() {
  const allQuestions = faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.category }))
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-indigo py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              FAQs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
              Your Tax Questions, Answered
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Get quick answers to common tax questions. Can't find what you're looking for?
              Contact us for personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-64">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-2xl font-bold text-navy mb-24">{category.category}</h2>
                <Accordion>
                  {category.questions.map((faq, idx) => (
                    <AccordionItem key={idx} title={faq.q}>
                      {faq.a}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-32 text-center">
              Need More Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              <Link
                href="/resources"
                className="p-24 border border-slate-200 rounded-2xl hover:border-teal hover:shadow-lg transition-all text-center group"
              >
                <h3 className="font-semibold text-navy mb-8 group-hover:text-teal transition-colors">
                  Tax Resources
                </h3>
                <p className="text-sm text-slate-600 mb-12">
                  Articles, guides, and tax tips
                </p>
                <ArrowRight className="h-16 w-16 text-teal mx-auto" />
              </Link>
              <Link
                href="/services"
                className="p-24 border border-slate-200 rounded-2xl hover:border-teal hover:shadow-lg transition-all text-center group"
              >
                <h3 className="font-semibold text-navy mb-8 group-hover:text-teal transition-colors">
                  Our Services
                </h3>
                <p className="text-sm text-slate-600 mb-12">
                  Explore all services we offer
                </p>
                <ArrowRight className="h-16 w-16 text-teal mx-auto" />
              </Link>
              <Link
                href="/contact"
                className="p-24 border border-slate-200 rounded-2xl hover:border-teal hover:shadow-lg transition-all text-center group"
              >
                <h3 className="font-semibold text-navy mb-8 group-hover:text-teal transition-colors">
                  Contact Us
                </h3>
                <p className="text-sm text-slate-600 mb-12">
                  Get personalized answers
                </p>
                <ArrowRight className="h-16 w-16 text-teal mx-auto" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-teal to-emerald text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-32 max-w-2xl mx-auto">
            Schedule a free consultation and get answers specific to your situation.
          </p>
          <Button
            size="xl"
            variant="outline"
            asChild
            className="bg-white text-teal border-white hover:bg-white/90"
          >
            <Link href="/contact">
              Book Free Consultation
              <ArrowRight className="ml-8 h-20 w-20" />
            </Link>
          </Button>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allQuestions.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
