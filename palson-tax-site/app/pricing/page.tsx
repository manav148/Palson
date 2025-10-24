"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, ArrowRight, Sparkles, Zap } from "lucide-react";
import { AnimatedCalculator, AnimatedCoins, InvoiceIllustration } from "@/components/artwork";

const tiers = [
  {
    name: "Starter",
    tagline: "For individuals with simple returns",
    price: "$299",
    period: "per return",
    description: "Perfect for W-2 employees, students, and those with straightforward tax situations.",
    features: [
      "Federal and state tax return",
      "W-2 income reporting",
      "Standard deduction",
      "Basic tax credits (EITC, CTC)",
      "E-filing with direct deposit",
      "Email support",
      "Audit assistance (for returns we prepare)",
    ],
    notIncluded: [
      "Investment income",
      "Rental properties",
      "Business income",
      "Multi-state returns",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "For small businesses & investors",
    price: "$899",
    period: "per year",
    description: "Comprehensive tax services for entrepreneurs, investors, and those with complex finances.",
    features: [
      "Everything in Starter, plus:",
      "Business tax returns (Schedule C, 1120S, 1065)",
      "Investment income & capital gains",
      "Rental property income",
      "Multi-state tax returns",
      "Quarterly tax planning calls",
      "Estimated payment calculations",
      "Phone & email support",
      "Priority processing",
    ],
    notIncluded: [],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Advisory",
    tagline: "Full-service tax & accounting",
    price: "Custom",
    period: "tailored to you",
    description: "White-glove service for high-earners, complex businesses, and those seeking ongoing strategic guidance.",
    features: [
      "Everything in Growth, plus:",
      "Monthly bookkeeping",
      "Payroll services",
      "Year-round tax planning & strategy",
      "Multi-entity & multi-state compliance",
      "CFO-level advisory",
      "Unlimited consultations",
      "Dedicated account manager",
      "Same-day response guarantee",
    ],
    notIncluded: [],
    cta: "Schedule Call",
    popular: false,
  },
];

const addOns = [
  { service: "Prior Year Tax Return", price: "$349+" },
  { service: "Amended Return", price: "$249" },
  { service: "State Tax Return (additional)", price: "$99" },
  { service: "Bookkeeping (monthly)", price: "$299+" },
  { service: "Payroll Services (monthly)", price: "$99 + $5/employee" },
  { service: "IRS Audit Representation", price: "$1,500+" },
  { service: "Offer in Compromise", price: "$2,500+" },
  { service: "Business Formation & Consulting", price: "$499+" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600 py-64 lg:py-96 overflow-hidden">
        <div className="absolute inset-0 accounting-grid opacity-10"></div>

        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-48 items-center">
            <motion.div
              className="text-center md:text-left"
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
                  Pricing Plans
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
                Transparent,<br />
                <span className="gradient-text bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Fair Pricing
                </span>
              </h1>

              <p className="text-xl text-indigo-100 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-32">
                No hidden fees. No surprises. Choose the package that fits your needs,
                or let us customize a solution for you.
              </p>

              <div className="flex flex-wrap gap-16 justify-center md:justify-start">
                <Link
                  href="#pricing-tiers"
                  className="inline-flex items-center gap-8 px-32 py-16 bg-white text-indigo-600 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  View Plans
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
                <AnimatedCalculator />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing-tiers" className="py-64 lg:py-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50"></div>

        <div className="container-custom relative">
          <motion.div
            className="text-center mb-64"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              <span className="gradient-text">Choose Your Plan</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Flexible options designed to grow with your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 max-w-7xl mx-auto">
            {tiers.map((tier, tierIndex) => (
              <motion.div
                key={tier.name}
                className="relative h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: tierIndex * 0.2 }}
              >
                <Card
                  className={`card-glow h-full relative ${
                    tier.popular
                      ? "border-2 border-indigo-500 shadow-2xl scale-105 bg-gradient-to-b from-white to-indigo-50/50"
                      : "border-2 border-slate-200 hover:border-indigo-300 bg-white"
                  } transition-all duration-500`}
                >
                  {tier.popular && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                      <Badge className="shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none px-16 py-8 animate-pulse-slow">
                        <Zap className="w-12 h-12 mr-4" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-24">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-600">
                      {tier.tagline}
                    </CardDescription>
                    <div className="mt-24">
                      <div className="flex items-baseline gap-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          {tier.price}
                        </span>
                        <span className="text-sm text-slate-600">{tier.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-16 leading-relaxed">
                      {tier.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <Button
                      size="lg"
                      className={`w-full mb-32 ${
                        tier.popular
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                          : ""
                      }`}
                      variant={tier.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/contact" className="group">
                        {tier.cta}
                        <ArrowRight className="ml-8 h-16 w-16 group-hover:translate-x-4 transition-transform" />
                      </Link>
                    </Button>

                    <div className="space-y-16">
                      {tier.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-12"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: tierIndex * 0.2 + idx * 0.05 }}
                        >
                          <CheckCircle2 className="h-20 w-20 text-emerald-500 mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                      {tier.notIncluded.length > 0 && (
                        <>
                          <div className="my-20 border-t border-slate-200" />
                          {tier.notIncluded.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-12 opacity-50">
                              <X className="h-20 w-20 text-slate-400 mt-2 flex-shrink-0" />
                              <span className="text-sm text-slate-400 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-48 text-center">
            <p className="text-sm text-slate-600 mb-16">
              All packages include audit assistance for returns we prepare.
            </p>
            <p className="text-sm text-slate-600">
              Pricing shown is for standard complexity. Additional fees may apply for
              complex situations.
            </p>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-48">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16">
                Add-On Services
              </h2>
              <p className="text-lg text-slate-600">
                Need something specific? We offer individual services to complement
                your package or as standalone solutions.
              </p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-200">
                  {addOns.map((addon, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-16 px-24"
                    >
                      <span className="text-base text-slate-700">{addon.service}</span>
                      <span className="text-base font-semibold text-navy">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-24 text-center">
              <p className="text-sm text-slate-600">
                + indicates pricing varies by complexity. Contact us for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Professional Tax Services */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-48">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16">
                Why Invest in Professional Tax Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
              <Card className="border-t-4 border-t-emerald">
                <CardHeader>
                  <CardTitle className="text-xl">Average Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald mb-12">$1,200+</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    On average, our clients save significantly more than they pay in fees
                    through deductions and strategies they wouldn't have found on their own.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-teal">
                <CardHeader>
                  <CardTitle className="text-xl">Time Saved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-teal mb-12">15+ hours</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Stop spending nights and weekends on taxes. We handle everything so
                    you can focus on what matters most to you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-indigo">
                <CardHeader>
                  <CardTitle className="text-xl">Audit Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-indigo mb-12">Included</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If the IRS comes calling, we'll represent you at no additional charge
                    for returns we prepare. Peace of mind is priceless.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-emerald">
                <CardHeader>
                  <CardTitle className="text-xl">Accuracy Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald mb-12">100%</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We double-check every return. If we make an error, we'll pay any
                    resulting penalties and interest. That's our commitment to you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-32 text-center">
              Pricing FAQs
            </h2>

            <div className="space-y-24">
              {[
                {
                  q: "Do you offer payment plans?",
                  a: "Yes! We offer interest-free payment plans for services over $500. Pay 50% upfront and the remainder when your return is filed.",
                },
                {
                  q: "What if my situation is more complex?",
                  a: "We'll provide a custom quote after reviewing your specific situation. Our initial consultation is free, so there's no risk in getting an accurate estimate.",
                },
                {
                  q: "Can I switch tiers mid-year?",
                  a: "Absolutely. If your needs change, we can adjust your service level and prorate the difference.",
                },
                {
                  q: "Do you price match?",
                  a: "We don't price match, but we guarantee value. Our clients stay with us because of the quality of service, proactive planning, and savings we provide—not because we're the cheapest option.",
                },
                {
                  q: "What's included in the free consultation?",
                  a: "We'll review your tax situation, answer questions, provide recommendations, and give you a detailed quote. There's no obligation to move forward.",
                },
              ].map((faq, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-navy mb-12">{faq.q}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
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
            Schedule a free consultation to discuss your needs and get a personalized quote.
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
            "@type": "PriceSpecification",
            itemOffered: tiers.map((tier) => ({
              "@type": "Offer",
              name: tier.name,
              price: tier.price,
              priceCurrency: "USD",
              description: tier.description,
            })),
          }),
        }}
      />
    </>
  );
}
