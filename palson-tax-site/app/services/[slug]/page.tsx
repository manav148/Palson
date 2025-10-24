import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  TrendingUp,
  Calendar,
  Users,
  Shield,
  Calculator,
} from "lucide-react";

// Service data
const servicesData: Record<string, any> = {
  "individual-tax-prep": {
    title: "Individual Tax Preparation",
    icon: FileText,
    description:
      "Comprehensive tax preparation for individuals, families, and investors. We maximize your deductions and ensure accurate, timely filing.",
    problem:
      "Tax season is stressful. Between understanding complex forms, tracking deductions, and meeting deadlines, it's easy to make costly mistakes or miss opportunities for savings.",
    solution:
      "Our experienced team handles everything from data collection to e-filing. We review your entire financial picture to identify every deduction you're entitled to, ensuring you get the maximum refund or minimum liability.",
    deliverables: [
      "Complete federal and state tax return preparation",
      "Investment income and capital gains reporting",
      "Rental property and passive income schedules",
      "Itemized deduction analysis and optimization",
      "E-filing with direct deposit setup",
      "Prior year amendment support",
    ],
    process: [
      {
        step: "Document Collection",
        description:
          "Secure upload portal for W-2s, 1099s, receipts, and other tax documents.",
      },
      {
        step: "Initial Review",
        description:
          "We review your documents and reach out with any questions within 24 hours.",
      },
      {
        step: "Preparation & Optimization",
        description:
          "Our team prepares your return, identifying all deductions and credits available.",
      },
      {
        step: "Review Call",
        description:
          "We walk through your completed return, explaining key items and answering questions.",
      },
      {
        step: "E-Filing",
        description:
          "Once approved, we e-file your return and provide confirmation.",
      },
    ],
    pricing: {
      base: "$299",
      note: "Additional fees may apply for complex returns (rentals, businesses, investments)",
    },
    faqs: [
      {
        q: "What documents do I need to provide?",
        a: "Typically you'll need W-2s, 1099s, mortgage interest statements, property tax records, charitable donation receipts, and any business or investment income documentation. We'll provide a complete checklist after your initial consultation.",
      },
      {
        q: "How long does the process take?",
        a: "Most individual returns are completed within 3-5 business days of receiving all documents. Complex returns with multiple income sources or investments may take 7-10 days.",
      },
      {
        q: "What if I get audited?",
        a: "If you're audited, we'll represent you before the IRS at no additional charge for the return we prepared. We'll handle all correspondence and negotiations on your behalf.",
      },
      {
        q: "Can you help with prior year returns?",
        a: "Yes! We can prepare and amend prior year returns. This is common for clients who missed deductions or need to file late returns.",
      },
    ],
  },
  "small-business-tax": {
    title: "Small Business Tax Services",
    icon: TrendingUp,
    description:
      "Strategic tax services for LLCs, S-Corps, partnerships, and sole proprietors. We help you minimize liability and maximize growth.",
    problem:
      "Small business taxes are complex. Between quarterly estimates, entity requirements, and changing regulations, it's hard to stay compliant while optimizing your tax strategy.",
    solution:
      "We provide year-round tax support for your business, from entity formation advice to annual returns. Our proactive approach identifies tax-saving strategies throughout the year.",
    deliverables: [
      "Business entity tax returns (1120S, 1065, Schedule C)",
      "Quarterly estimated tax calculations",
      "Multi-state tax compliance",
      "Business expense optimization",
      "Depreciation schedules and asset tracking",
      "Owner compensation strategies",
    ],
    process: [
      {
        step: "Business Assessment",
        description:
          "We review your business structure, operations, and financial records.",
      },
      {
        step: "Quarterly Planning",
        description:
          "Proactive tax projections and estimated payment calculations.",
      },
      {
        step: "Year-End Optimization",
        description:
          "Strategic moves before year-end to minimize your tax liability.",
      },
      {
        step: "Return Preparation",
        description:
          "Complete business returns with all required schedules and forms.",
      },
      {
        step: "Ongoing Support",
        description:
          "Year-round access for questions and strategic planning.",
      },
    ],
    pricing: {
      base: "$699",
      note: "Pricing varies by entity type and complexity. Includes quarterly consultations.",
    },
    faqs: [
      {
        q: "Do I need an LLC or S-Corp?",
        a: "It depends on your revenue, growth plans, and personal situation. Generally, S-Corps can provide tax savings once you're consistently making $60k+ in profit. We'll analyze your specific situation and recommend the best structure.",
      },
      {
        q: "What bookkeeping do I need?",
        a: "You'll need organized records of all income and expenses. We recommend using accounting software like QuickBooks Online. If you don't have this in place, ask about our bookkeeping services.",
      },
      {
        q: "Can you help with multiple states?",
        a: "Yes, we handle multi-state tax compliance, including nexus analysis and state return preparation.",
      },
    ],
  },
  bookkeeping: {
    title: "Bookkeeping Services",
    icon: Calendar,
    description:
      "Monthly bookkeeping services to keep your finances organized and your business running smoothly.",
    problem:
      "Without clean books, you're flying blind. You can't make informed decisions, secure financing, or prepare for tax season efficiently.",
    solution:
      "Our monthly bookkeeping service keeps your financials up-to-date and accurate. You'll always know where you stand financially.",
    deliverables: [
      "Monthly transaction categorization",
      "Bank and credit card reconciliation",
      "Financial statements (P&L, Balance Sheet, Cash Flow)",
      "Accounts payable/receivable tracking",
      "QuickBooks Online setup and training",
      "Monthly financial review calls",
    ],
    process: [
      {
        step: "Initial Setup",
        description:
          "We set up your accounting system and connect your financial accounts.",
      },
      {
        step: "Monthly Processing",
        description:
          "We categorize transactions, reconcile accounts, and generate reports.",
      },
      {
        step: "Review & Insights",
        description:
          "Monthly call to review financials and discuss any anomalies or opportunities.",
      },
      {
        step: "Tax Readiness",
        description:
          "Clean books make tax preparation faster and less expensive.",
      },
    ],
    pricing: {
      base: "$299/month",
      note: "Pricing based on monthly transaction volume. Free setup included.",
    },
    faqs: [
      {
        q: "What software do you use?",
        a: "We primarily use QuickBooks Online, which provides real-time access to your financial data. We can also work with Xero or other platforms.",
      },
      {
        q: "How often will you update my books?",
        a: "We update your books monthly, typically within the first week of the following month. More frequent updates available for an additional fee.",
      },
      {
        q: "Do I still need an accountant?",
        a: "Bookkeeping keeps your daily finances organized. You'll still want a CPA for tax planning, returns, and strategic advice. We offer bundled services that include both.",
      },
    ],
  },
  payroll: {
    title: "Payroll Services",
    icon: Users,
    description:
      "Full-service payroll processing and compliance. We handle the complexity so you can focus on your team.",
    problem:
      "Payroll is time-consuming and high-stakes. Mistakes can result in penalties, unhappy employees, and compliance issues.",
    solution:
      "We handle all aspects of payroll: calculations, tax deposits, filings, and year-end forms. Your team gets paid accurately and on time, every time.",
    deliverables: [
      "Payroll processing and direct deposit",
      "Payroll tax calculations and deposits",
      "Quarterly and annual tax filings",
      "W-2 and 1099 preparation and filing",
      "State and federal compliance",
      "Employee portal access",
    ],
    process: [
      {
        step: "Setup",
        description:
          "We gather employee information and set up your payroll system.",
      },
      {
        step: "Pay Period Processing",
        description:
          "You submit hours/changes, we process payroll and handle direct deposits.",
      },
      {
        step: "Tax Compliance",
        description:
          "We calculate, deposit, and file all payroll taxes automatically.",
      },
      {
        step: "Year-End",
        description:
          "We prepare and distribute W-2s and 1099s for all workers.",
      },
    ],
    pricing: {
      base: "$99/month + $5/employee",
      note: "Includes all tax filings and year-end forms. No setup fees.",
    },
    faqs: [
      {
        q: "How do I submit payroll?",
        a: "You can submit hours through our online portal, via email, or phone. We offer same-day processing if submitted before noon.",
      },
      {
        q: "What about contractor payments?",
        a: "We can process 1099 contractor payments as well. We'll track all payments and prepare year-end 1099s.",
      },
      {
        q: "Do you handle multi-state payroll?",
        a: "Yes, we handle payroll for employees in multiple states, including all required state tax filings.",
      },
    ],
  },
  "tax-planning": {
    title: "Tax Planning & Advisory",
    icon: Calculator,
    description:
      "Year-round tax planning strategies to minimize your liability and maximize wealth building opportunities.",
    problem:
      "Most people only think about taxes in April. But the best tax strategies happen throughout the year, not after December 31st.",
    solution:
      "Our proactive planning service provides quarterly consultations, projections, and strategic recommendations to keep you on track and minimize your tax bill.",
    deliverables: [
      "Quarterly tax projections and estimates",
      "Entity structure optimization",
      "Retirement and benefit planning",
      "Multi-year tax strategies",
      "Investment tax planning",
      "Estate and succession planning",
    ],
    process: [
      {
        step: "Q1: Annual Review",
        description:
          "Review prior year results and set goals for the current year.",
      },
      {
        step: "Q2: Mid-Year Check",
        description:
          "Update projections based on first-half performance and make adjustments.",
      },
      {
        step: "Q3: Strategic Planning",
        description:
          "Identify opportunities for tax-saving moves before year-end.",
      },
      {
        step: "Q4: Year-End Execution",
        description:
          "Implement strategies and prepare for tax season.",
      },
    ],
    pricing: {
      base: "$499/quarter",
      note: "Includes four quarterly consultations and unlimited email support.",
    },
    faqs: [
      {
        q: "Who benefits from tax planning?",
        a: "Anyone with income over $100k, business owners, investors, and those with complex financial situations. If you paid more than $10k in taxes last year, planning can likely save you money.",
      },
      {
        q: "How much can I save?",
        a: "It varies by situation, but clients typically save 2-5x the cost of planning services. Some save significantly more through entity restructuring or strategic timing of income/expenses.",
      },
      {
        q: "Is this included with tax prep?",
        a: "Tax prep and planning are separate services. Prep looks backward; planning looks forward. We offer bundled pricing if you use both services.",
      },
    ],
  },
  "irs-resolution": {
    title: "IRS Resolution & Representation",
    icon: Shield,
    description:
      "Expert representation for IRS audits, collections, and disputes. We protect your rights and negotiate the best outcome.",
    problem:
      "Dealing with the IRS is intimidating. Without proper representation, you may pay more than necessary or agree to unfavorable terms.",
    solution:
      "As IRS Enrolled Agents, we have unlimited practice rights before the IRS. We handle all correspondence, negotiate on your behalf, and fight for the best possible resolution.",
    deliverables: [
      "Full audit representation",
      "Offer in Compromise (OIC) negotiation",
      "Installment agreement setup",
      "Penalty abatement requests",
      "Innocent spouse relief",
      "Back tax resolution and filing",
    ],
    process: [
      {
        step: "Case Assessment",
        description:
          "We review your situation, IRS notices, and relevant documents.",
      },
      {
        step: "Power of Attorney",
        description:
          "You authorize us to represent you before the IRS.",
      },
      {
        step: "IRS Communication",
        description:
          "We handle all correspondence and negotiations with the IRS.",
      },
      {
        step: "Resolution",
        description:
          "We work toward the most favorable outcome: reduced balance, payment plan, or case closure.",
      },
      {
        step: "Compliance",
        description:
          "We help you stay compliant going forward to avoid future issues.",
      },
    ],
    pricing: {
      base: "Custom pricing",
      note: "Pricing depends on complexity. Free initial consultation to assess your case.",
    },
    faqs: [
      {
        q: "What is an Offer in Compromise?",
        a: "An OIC allows you to settle your tax debt for less than you owe. The IRS considers your income, expenses, asset equity, and ability to pay. Approval rates are low without professional representation.",
      },
      {
        q: "Can you stop wage garnishment?",
        a: "Yes, in most cases we can negotiate release of levies and garnishments by setting up a payment plan or other resolution.",
      },
      {
        q: "How long does resolution take?",
        a: "It varies. Installment agreements can be set up in days. Offers in Compromise typically take 6-12 months. Audits depend on complexity and IRS workload.",
      },
      {
        q: "What if I haven't filed in years?",
        a: "We can help. First we'll prepare and file all back returns, then work on resolving any balance due. The IRS is more willing to negotiate once you're compliant.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${params.slug}`,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-indigo py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-8 text-sm text-slate-200 hover:text-white mb-24 transition-colors"
            >
              <ArrowRight className="h-16 w-16 rotate-180" />
              Back to Services
            </Link>
            <div className="w-64 h-64 rounded-2xl bg-teal/10 flex items-center justify-center mb-24">
              <Icon className="h-32 w-32 text-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
              {service.title}
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-48">
            <div>
              <Badge variant="error" className="mb-16">
                The Problem
              </Badge>
              <h2 className="text-2xl font-bold text-navy mb-16">
                Common Challenges
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.problem}
              </p>
            </div>
            <div>
              <Badge variant="success" className="mb-16">
                Our Solution
              </Badge>
              <h2 className="text-2xl font-bold text-navy mb-16">
                How We Help
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-24 text-center">
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {service.deliverables.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-12">
                  <CheckCircle2 className="h-20 w-20 text-success mt-2 flex-shrink-0" />
                  <span className="text-base text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy mb-48 text-center">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-32">
              {service.process.map((step: any, idx: number) => (
                <div key={idx} className="flex gap-24">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-full bg-teal text-white flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy mb-8">
                      {step.step}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Card className="border-t-4 border-t-teal">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-16">Pricing</Badge>
                <div className="text-4xl font-bold text-navy mb-8">
                  {service.pricing.base}
                </div>
                <CardDescription className="text-base">
                  {service.pricing.note}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-24 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion>
              {service.faqs.map((faq: any, idx: number) => (
                <AccordionItem key={idx} title={faq.q}>
                  {faq.a}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-teal to-emerald text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-32 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your needs and get a custom quote.
          </p>
          <Button
            size="xl"
            variant="outline"
            asChild
            className="bg-white text-teal border-white hover:bg-white/90"
          >
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "Organization",
              name: "Palson Tax",
            },
            areaServed: "United States",
            offers: {
              "@type": "Offer",
              price: service.pricing.base,
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq: any) => ({
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
