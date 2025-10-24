import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  TrendingUp,
  Calendar,
  Users,
  Shield,
  Calculator,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tax & Accounting Services",
  description:
    "Comprehensive tax preparation, planning, bookkeeping, payroll, and IRS resolution services for individuals and small businesses.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Individual Tax Preparation",
    slug: "individual-tax-prep",
    description:
      "Comprehensive tax preparation for individuals, families, and investors. We handle everything from simple W-2s to complex investment portfolios.",
    icon: FileText,
    features: [
      "Personal income tax returns",
      "Investment & capital gains reporting",
      "Rental property income",
      "Itemized deduction optimization",
    ],
    pricing: "Starting at $299",
  },
  {
    title: "Small Business Tax",
    slug: "small-business-tax",
    description:
      "Strategic tax services for entrepreneurs and growing companies. LLCs, S-Corps, partnerships, and sole proprietors.",
    icon: TrendingUp,
    features: [
      "Business entity tax returns",
      "Quarterly estimated payments",
      "Multi-state tax compliance",
      "Business deduction strategies",
    ],
    pricing: "Starting at $699",
  },
  {
    title: "Bookkeeping Services",
    slug: "bookkeeping",
    description:
      "Monthly bookkeeping to keep your finances organized and your business running smoothly. Real-time financial visibility.",
    icon: Calendar,
    features: [
      "Monthly transaction categorization",
      "Bank & credit card reconciliation",
      "Financial statements (P&L, Balance Sheet)",
      "QuickBooks Online setup & training",
    ],
    pricing: "Starting at $299/month",
  },
  {
    title: "Payroll Services",
    slug: "payroll",
    description:
      "Full-service payroll processing and compliance. We handle payroll taxes, deposits, and filings so you can focus on your team.",
    icon: Users,
    features: [
      "Payroll processing & direct deposit",
      "Payroll tax calculations & filings",
      "W-2 and 1099 preparation",
      "State & federal compliance",
    ],
    pricing: "Starting at $99/month",
  },
  {
    title: "Tax Planning & Advisory",
    slug: "tax-planning",
    description:
      "Year-round tax strategies to minimize your liability and maximize savings. Proactive planning beats reactive preparation.",
    icon: Calculator,
    features: [
      "Quarterly tax projections",
      "Entity structure recommendations",
      "Retirement & benefit planning",
      "Multi-year tax strategies",
    ],
    pricing: "Starting at $499/quarter",
  },
  {
    title: "IRS Resolution & Representation",
    slug: "irs-resolution",
    description:
      "Expert representation for IRS audits, collections, and disputes. We handle the IRS so you don't have to.",
    icon: Shield,
    features: [
      "Audit defense & representation",
      "Payment plan arrangements (OIC, IA)",
      "Penalty abatement requests",
      "Back tax resolution",
    ],
    pricing: "Custom pricing",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-indigo py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
              Comprehensive Tax & Accounting Solutions
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              From individual tax prep to complex business accounting, our team brings
              decades of experience and proactive strategies to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.slug}
                  className="card-hover border-t-4 border-t-teal"
                >
                  <CardHeader>
                    <div className="w-56 h-56 rounded-xl bg-teal/10 flex items-center justify-center mb-16">
                      <Icon className="h-32 w-32 text-teal" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-12 mb-24">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-8 text-sm">
                          <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-16 border-t border-slate-200">
                      <div>
                        <div className="text-sm text-slate-600 mb-4">Pricing</div>
                        <div className="text-lg font-semibold text-navy">
                          {service.pricing}
                        </div>
                      </div>
                      <Button asChild>
                        <Link href={`/services/${service.slug}`}>
                          Learn More
                          <ArrowRight className="ml-8 h-16 w-16" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-24">
              Why Businesses Choose Palson Tax
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mt-48">
              <div>
                <div className="text-4xl font-bold text-teal mb-8">20+</div>
                <div className="text-sm font-semibold text-navy mb-4">
                  Years Experience
                </div>
                <p className="text-sm text-slate-600">
                  Serving clients since 2005
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal mb-8">500+</div>
                <div className="text-sm font-semibold text-navy mb-4">
                  Happy Clients
                </div>
                <p className="text-sm text-slate-600">
                  Individuals and businesses
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal mb-8">4.9/5</div>
                <div className="text-sm font-semibold text-navy mb-4">
                  Client Rating
                </div>
                <p className="text-sm text-slate-600">
                  Based on 247 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-teal to-emerald text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-white/90 mb-32 max-w-2xl mx-auto">
            Schedule a free consultation and we&apos;ll recommend the best solution
            for your situation.
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
            "@type": "ItemList",
            itemListElement: services.map((service, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "Organization",
                  name: "Palson Tax",
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
