import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Shield,
  Users,
  TrendingUp,
  Calendar,
  FileText,
  ArrowRight,
  Star,
  Clock,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-indigo py-96 lg:py-128">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-16">
              Trusted Since 2005
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-24 leading-tight">
              Tax Done Right,{" "}
              <span className="gradient-text bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
                With Proactive Planning
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-32 leading-relaxed max-w-2xl">
              Expert tax services for individuals and small businesses. Year-round support,
              strategic planning, and trusted IRS representation when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-16">
              <Button size="xl" asChild className="shadow-glow hover:shadow-glow-hover">
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-8 h-20 w-20" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-32 mt-48 text-sm text-slate-200">
              <div className="flex items-center gap-8">
                <CheckCircle2 className="h-20 w-20 text-teal" />
                <span>IRS Enrolled Agents</span>
              </div>
              <div className="flex items-center gap-8">
                <CheckCircle2 className="h-20 w-20 text-teal" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-8">
                <CheckCircle2 className="h-20 w-20 text-teal" />
                <span>4.9/5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-64">
            <Badge className="mb-16">Why Choose Palson Tax</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16">
              How We Make Tax Season Simple
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From proactive planning to year-round support, we&apos;re here to help you
              maximize deductions and minimize stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            <Card className="card-hover border-t-4 border-t-teal">
              <CardHeader>
                <div className="w-48 h-48 rounded-xl bg-teal/10 flex items-center justify-center mb-16">
                  <TrendingUp className="h-24 w-24 text-teal" />
                </div>
                <CardTitle>Proactive Tax Planning</CardTitle>
                <CardDescription>
                  Strategic guidance throughout the year to reduce your tax liability and
                  maximize savings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8 text-sm text-slate-600">
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Quarterly tax projections</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Deduction optimization strategies</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Business structure recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-emerald">
              <CardHeader>
                <div className="w-48 h-48 rounded-xl bg-emerald/10 flex items-center justify-center mb-16">
                  <Clock className="h-24 w-24 text-emerald" />
                </div>
                <CardTitle>Year-Round Support</CardTitle>
                <CardDescription>
                  We&apos;re not just here for tax season. Get expert advice whenever
                  you need it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8 text-sm text-slate-600">
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Unlimited email support</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Quarterly check-in calls</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Same-day response guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-indigo">
              <CardHeader>
                <div className="w-48 h-48 rounded-xl bg-indigo/10 flex items-center justify-center mb-16">
                  <Shield className="h-24 w-24 text-indigo" />
                </div>
                <CardTitle>IRS Representation</CardTitle>
                <CardDescription>
                  Full audit support and representation. We handle the IRS so you don&apos;t
                  have to.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8 text-sm text-slate-600">
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Audit defense and negotiation</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Payment plan arrangements</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Penalty abatement assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-teal">
              <CardHeader>
                <div className="w-48 h-48 rounded-xl bg-teal/10 flex items-center justify-center mb-16">
                  <Users className="h-24 w-24 text-teal" />
                </div>
                <CardTitle>Small Business Specialists</CardTitle>
                <CardDescription>
                  Comprehensive accounting and tax services tailored for entrepreneurs
                  and growing companies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8 text-sm text-slate-600">
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Monthly bookkeeping services</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Payroll processing & compliance</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Financial reporting & analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-emerald">
              <CardHeader>
                <div className="w-48 h-48 rounded-xl bg-emerald/10 flex items-center justify-center mb-16">
                  <FileText className="h-24 w-24 text-emerald" />
                </div>
                <CardTitle>Accurate Preparation</CardTitle>
                <CardDescription>
                  Meticulous attention to detail ensures every deduction is captured
                  and every form is filed correctly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8 text-sm text-slate-600">
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Double-checked returns</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Maximum refund guarantee</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>E-filing with direct deposit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-indigo">
              <CardHeader>
                <div className="w-48 h-48 rounded-xl bg-indigo/10 flex items-center justify-center mb-16">
                  <Award className="h-24 w-24 text-indigo" />
                </div>
                <CardTitle>Certified Expertise</CardTitle>
                <CardDescription>
                  Our team of IRS Enrolled Agents and CPAs brings decades of combined
                  experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8 text-sm text-slate-600">
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>IRS Enrolled Agent credentials</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>State CPA licensing</span>
                  </li>
                  <li className="flex items-start gap-8">
                    <CheckCircle2 className="h-16 w-16 text-success mt-2 flex-shrink-0" />
                    <span>Continuing education commitment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-64">
            <Badge className="mb-16">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16">
              Comprehensive Tax & Accounting Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From individual returns to complex business accounting, we have the
              expertise to serve all your financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {[
              {
                title: "Individual Tax Prep",
                description: "Comprehensive tax preparation for individuals and families.",
                href: "/services/individual-tax-prep",
                icon: FileText,
              },
              {
                title: "Small Business Tax",
                description: "Strategic tax services for LLCs, S-Corps, and partnerships.",
                href: "/services/small-business-tax",
                icon: TrendingUp,
              },
              {
                title: "Bookkeeping Services",
                description: "Monthly bookkeeping to keep your finances organized.",
                href: "/services/bookkeeping",
                icon: Calendar,
              },
              {
                title: "Payroll Services",
                description: "Full-service payroll processing and compliance.",
                href: "/services/payroll",
                icon: Users,
              },
              {
                title: "Tax Planning",
                description: "Year-round strategies to minimize your tax burden.",
                href: "/services/tax-planning",
                icon: TrendingUp,
              },
              {
                title: "IRS Resolution",
                description: "Expert representation for audits and collections.",
                href: "/services/irs-resolution",
                icon: Shield,
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block p-24 rounded-2xl border border-slate-200 hover:border-teal hover:shadow-lg transition-all duration-250"
                >
                  <div className="w-48 h-48 rounded-xl bg-teal/10 flex items-center justify-center mb-16 group-hover:bg-teal group-hover:scale-110 transition-all duration-250">
                    <Icon className="h-24 w-24 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-8 group-hover:text-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-12">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-teal group-hover:gap-8 transition-all">
                    Learn more
                    <ArrowRight className="ml-4 h-16 w-16 group-hover:translate-x-4 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-48">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-8 h-20 w-20" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-64">
            <Badge className="mb-16">Client Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16">
              Trusted by Hundreds of Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                content:
                  "Palson Tax saved me thousands with their proactive planning strategies. Their team is responsive, knowledgeable, and truly cares about my business success.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                content:
                  "After years of doing my own taxes, switching to Palson was a game-changer. They found deductions I never knew existed and made the whole process painless.",
                rating: 5,
              },
              {
                name: "Lisa Martinez",
                role: "Restaurant Owner",
                content:
                  "When I faced an IRS audit, Palson Tax handled everything professionally. Their representation gave me peace of mind during a stressful time.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-t-4 border-t-teal">
                <CardHeader>
                  <div className="flex gap-4 mb-12">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-16 w-16 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed text-slate-700">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-teal to-emerald text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Ready to Take Control of Your Taxes?
          </h2>
          <p className="text-xl text-white/90 mb-32 max-w-2xl mx-auto">
            Schedule a free consultation today and discover how we can help you
            save money and reduce stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-16 justify-center">
            <Button
              size="xl"
              variant="outline"
              asChild
              className="bg-white text-teal border-white hover:bg-white/90"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-navy text-white hover:bg-navy-600"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Palson Tax",
            url: "https://www.palsontax.com",
            logo: "https://www.palsontax.com/logo.png",
            description:
              "Professional tax preparation, planning, and IRS resolution services for individuals and small businesses.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Tax Plaza, Suite 100",
              addressLocality: "Financial District",
              addressRegion: "CA",
              postalCode: "94111",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-555-1234",
              contactType: "customer service",
              email: "info@palsontax.com",
              availableLanguage: ["en"],
            },
            sameAs: [
              "https://www.linkedin.com/company/palsontax",
              "https://www.facebook.com/palsontax",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "247",
            },
          }),
        }}
      />
    </>
  );
}
