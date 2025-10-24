import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Shield, Target, Users, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Palson Tax - Our Mission & Values",
  description:
    "Learn about Palson Tax's mission to provide expert, ethical tax services. Meet our team of certified professionals committed to your financial success.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-indigo py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
              Tax Expertise You Can Trust
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Since 2005, Palson Tax has been helping individuals and small businesses
              navigate complex tax matters with integrity, expertise, and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
            <div>
              <Badge className="mb-16">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-24">
                Making Taxes Simple, Strategic, and Stress-Free
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-24">
                We believe tax preparation should be more than just filing forms. It should
                be a strategic partnership focused on minimizing your liability, maximizing
                your savings, and giving you peace of mind.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-24">
                Our proactive approach means we're thinking about your taxes year-round,
                not just in April. We identify opportunities, anticipate challenges, and
                provide guidance every step of the way.
              </p>
              <Button size="lg" asChild>
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-8 h-20 w-20" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal/20 to-emerald/20 flex items-center justify-center">
                <div className="text-center p-32">
                  <div className="text-5xl font-bold text-teal mb-8">20+</div>
                  <div className="text-lg text-navy font-semibold mb-16">Years of Service</div>
                  <div className="text-4xl font-bold text-teal mb-8">500+</div>
                  <div className="text-lg text-navy font-semibold mb-16">Happy Clients</div>
                  <div className="text-4xl font-bold text-teal mb-8">$2M+</div>
                  <div className="text-lg text-navy font-semibold">Saved in Taxes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-64">
            <Badge className="mb-16">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our core values guide every client interaction and business decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {[
              {
                icon: Shield,
                title: "Integrity First",
                description:
                  "We operate with complete transparency and always put your best interests first. No hidden fees, no surprises—just honest, ethical service.",
              },
              {
                icon: Target,
                title: "Proactive Strategy",
                description:
                  "We don't wait for problems to arise. Our year-round planning approach identifies opportunities and prevents issues before they become costly.",
              },
              {
                icon: Heart,
                title: "Client-Centered Care",
                description:
                  "You're not a number to us. We take time to understand your unique situation and provide personalized solutions tailored to your goals.",
              },
              {
                icon: Award,
                title: "Certified Expertise",
                description:
                  "Our team holds the highest credentials: IRS Enrolled Agents and CPAs with decades of combined experience and ongoing education.",
              },
              {
                icon: Users,
                title: "Partnership Mindset",
                description:
                  "We're not just service providers—we're your financial partners. Your success is our success, and we're invested in your long-term growth.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description:
                  "Tax laws change constantly. We stay ahead of the curve with continuous training and technology investments to serve you better.",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="card-hover">
                  <CardContent className="pt-24">
                    <div className="w-56 h-56 rounded-xl bg-teal/10 flex items-center justify-center mb-16">
                      <Icon className="h-28 w-28 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-12">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-64">
              <Badge className="mb-16">Our Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Two Decades of Excellence
              </h2>
            </div>

            <div className="space-y-32">
              {[
                {
                  year: "2005",
                  title: "Palson Tax Founded",
                  description:
                    "Started as a one-person operation with a mission to provide personalized, expert tax services to local families and small businesses.",
                },
                {
                  year: "2010",
                  title: "Team Expansion",
                  description:
                    "Grew to a team of five CPAs and Enrolled Agents, serving over 200 clients annually across multiple states.",
                },
                {
                  year: "2015",
                  title: "Technology Upgrade",
                  description:
                    "Launched secure client portal and paperless processing, making tax preparation faster and more convenient for our clients.",
                },
                {
                  year: "2020",
                  title: "Virtual Services Launch",
                  description:
                    "Expanded to fully remote capabilities, allowing us to serve clients nationwide while maintaining our high-touch service model.",
                },
                {
                  year: "2025",
                  title: "Today",
                  description:
                    "Serving 500+ clients with a full suite of tax, accounting, and advisory services. Proud to be a trusted partner in our clients' financial success.",
                },
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-24">
                  <div className="flex-shrink-0">
                    <div className="w-96 h-96 rounded-full bg-teal text-white flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy mb-8">
                      {milestone.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Community */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-48">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-24">
                Certifications & Professional Affiliations
              </h2>
              <ul className="space-y-16">
                {[
                  "IRS Enrolled Agent (EA) Designation",
                  "State Certified Public Accountant (CPA) License",
                  "National Association of Enrolled Agents (NAEA) Member",
                  "American Institute of CPAs (AICPA) Member",
                  "QuickBooks ProAdvisor Certified",
                  "Continuing Professional Education (CPE) - 40+ hours annually",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-12">
                    <Award className="h-20 w-20 text-teal mt-2 flex-shrink-0" />
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-24">
                Community Involvement
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-24">
                We believe in giving back to the communities we serve. Our team volunteers
                with local organizations providing free tax preparation assistance to
                low-income families and seniors.
              </p>
              <ul className="space-y-16">
                {[
                  "VITA (Volunteer Income Tax Assistance) Program",
                  "Small Business Development Center (SBDC) Advisor",
                  "Local Chamber of Commerce Member",
                  "Financial Literacy Workshop Facilitator",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-12">
                    <Heart className="h-20 w-20 text-emerald mt-2 flex-shrink-0" />
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-teal to-emerald text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Ready to Experience the Palson Difference?
          </h2>
          <p className="text-xl text-white/90 mb-32 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their tax and accounting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-16 justify-center">
            <Button
              size="xl"
              variant="outline"
              asChild
              className="bg-white text-teal border-white hover:bg-white/90"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-navy text-white hover:bg-navy-600"
            >
              <Link href="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "Palson Tax",
              foundingDate: "2005",
              description:
                "Professional tax and accounting services for individuals and small businesses. Specializing in tax preparation, planning, bookkeeping, payroll, and IRS representation.",
              slogan: "Tax Done Right, With Proactive Planning",
            },
          }),
        }}
      />
    </>
  );
}
