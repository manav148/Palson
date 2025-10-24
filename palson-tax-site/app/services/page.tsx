"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  Sparkles,
} from "lucide-react";
import { InvoiceIllustration, AnimatedCoins } from "@/components/artwork";

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
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600 py-64 lg:py-96 overflow-hidden">
        <div className="absolute inset-0 accounting-grid opacity-10"></div>

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-48 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="secondary" className="mb-16 inline-flex items-center gap-8">
                  <Sparkles className="w-12 h-12" />
                  Our Services
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
                Comprehensive Tax &<br />
                <span className="gradient-text bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Accounting Solutions
                </span>
              </h1>

              <p className="text-xl text-indigo-100 leading-relaxed mb-32">
                From individual tax prep to complex business accounting, our team brings
                decades of experience and proactive strategies to help you succeed.
              </p>

              <div className="flex flex-wrap gap-16">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-8 px-32 py-16 bg-white text-indigo-600 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-16 h-16" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="hidden md:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="animate-float">
                <InvoiceIllustration />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-64 lg:py-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50"></div>

        <div className="container-custom relative">
          <motion.div
            className="text-center mb-64"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              <span className="gradient-text">Our Full Suite of Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional solutions tailored to your unique financial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-glow h-full border-2 border-slate-200 hover:border-indigo-300 bg-white transition-all duration-500 hover:shadow-2xl group">
                    <CardHeader>
                      <motion.div
                        className="w-64 h-64 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-24 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-32 w-32 text-white" />
                      </motion.div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-16 mb-32">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-12 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                          >
                            <CheckCircle2 className="h-20 w-20 text-emerald-500 mt-2 flex-shrink-0" />
                            <span className="text-slate-700 leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-24 border-t border-slate-200">
                        <div>
                          <div className="text-xs text-slate-500 mb-4 uppercase tracking-wide">Pricing</div>
                          <div className="text-lg font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                            {service.pricing}
                          </div>
                        </div>
                        <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                          <Link href={`/services/${service.slug}`} className="group/btn">
                            Learn More
                            <ArrowRight className="ml-8 h-16 w-16 group-hover/btn:translate-x-4 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-64 lg:py-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>

        <div className="container-custom relative">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-64">
              <h2 className="text-4xl md:text-5xl font-bold mb-16">
                <span className="gradient-text">Why Businesses Choose Us</span>
              </h2>
              <p className="text-xl text-slate-600">
                Trusted expertise backed by results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
              {[
                { number: "20+", label: "Years Experience", detail: "Serving clients since 2005" },
                { number: "500+", label: "Happy Clients", detail: "Individuals and businesses" },
                { number: "4.9/5", label: "Client Rating", detail: "Based on 247 reviews" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-32 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-5xl font-bold gradient-text mb-12">{stat.number}</div>
                  <div className="text-base font-semibold text-slate-900 mb-8">
                    {stat.label}
                  </div>
                  <p className="text-sm text-slate-600">
                    {stat.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Coins Illustration */}
            <motion.div
              className="flex justify-center mt-64"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <AnimatedCoins />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-64 lg:py-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600"></div>
        <div className="absolute inset-0 accounting-grid opacity-10"></div>

        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-24">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-indigo-100 mb-48 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation and we'll recommend the best solution
              for your situation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-8 px-48 py-20 bg-white text-indigo-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
              <ArrowRight className="w-20 h-20" />
            </Link>
          </motion.div>
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
