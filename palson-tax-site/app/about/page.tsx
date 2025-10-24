"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Shield, Target, Users, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { DataVisualization, FinancialChart } from "@/components/artwork";

export default function AboutPage() {
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
                  About Us
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
                Tax Expertise<br />
                <span className="gradient-text bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  You Can Trust
                </span>
              </h1>

              <p className="text-xl text-indigo-100 leading-relaxed">
                Since 2005, Palson Tax has been helping individuals and small businesses
                navigate complex tax matters with integrity, expertise, and personalized care.
              </p>
            </motion.div>

            <motion.div
              className="hidden md:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="animate-float">
                <DataVisualization />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-64 lg:py-96">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-64 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-16 bg-gradient-to-r from-indigo-600 to-purple-600">Our Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-24">
                <span className="gradient-text">Making Taxes Simple,</span><br />
                Strategic, and Stress-Free
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-24">
                We believe tax preparation should be more than just filing forms. It should
                be a strategic partnership focused on minimizing your liability, maximizing
                your savings, and giving you peace of mind.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-32">
                Our proactive approach means we're thinking about your taxes year-round,
                not just in April. We identify opportunities, anticipate challenges, and
                provide guidance every step of the way.
              </p>
              <Button size="lg" asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <Link href="/team" className="group">
                  Meet Our Team
                  <ArrowRight className="ml-8 h-20 w-20 group-hover:translate-x-4 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-100 via-purple-100 to-teal-100 flex items-center justify-center p-48 relative overflow-hidden">
                <div className="absolute inset-0 accounting-grid opacity-10"></div>
                <div className="text-center relative z-10 space-y-32">
                  {[
                    { number: "20+", label: "Years of Service" },
                    { number: "500+", label: "Happy Clients" },
                    { number: "$2M+", label: "Saved in Taxes" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="text-5xl font-bold gradient-text mb-8">{stat.number}</div>
                      <div className="text-lg font-semibold text-slate-900">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-64 lg:py-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50"></div>

        <div className="container-custom relative">
          <motion.div
            className="text-center mb-64"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-16 bg-gradient-to-r from-indigo-600 to-purple-600">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              <span className="gradient-text">What Sets Us Apart</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our core values guide every client interaction and business decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
            {[
              {
                icon: Shield,
                title: "Integrity First",
                description:
                  "We operate with complete transparency and always put your best interests first. No hidden fees, no surprises—just honest, ethical service.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Target,
                title: "Proactive Strategy",
                description:
                  "We don't wait for problems to arise. Our year-round planning approach identifies opportunities and prevents issues before they become costly.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Heart,
                title: "Client-Centered Care",
                description:
                  "You're not a number to us. We take time to understand your unique situation and provide personalized solutions tailored to your goals.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Award,
                title: "Certified Expertise",
                description:
                  "Our team holds the highest credentials: IRS Enrolled Agents and CPAs with decades of combined experience and ongoing education.",
                color: "from-teal-500 to-emerald-500"
              },
              {
                icon: Users,
                title: "Partnership Mindset",
                description:
                  "We're not just service providers—we're your financial partners. Your success is our success, and we're invested in your long-term growth.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description:
                  "Tax laws change constantly. We stay ahead of the curve with continuous training and technology investments to serve you better.",
                color: "from-cyan-500 to-blue-500"
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="card-glow h-full border-2 border-slate-200 hover:border-indigo-300 bg-white transition-all duration-500 hover:shadow-2xl group">
                    <CardContent className="pt-32 pb-24">
                      <motion.div
                        className={`w-64 h-64 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-24 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-32 w-32 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Financial Chart */}
          <motion.div
            className="flex justify-center mt-64"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FinancialChart />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-16 bg-gradient-to-r from-indigo-600 to-purple-600">Our Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Two Decades of Excellence</span>
              </h2>
            </motion.div>

            <div className="space-y-48 relative">
              {/* Timeline line */}
              <div className="absolute left-48 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-teal-500 rounded-full hidden md:block"></div>

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
                <motion.div
                  key={idx}
                  className="flex gap-32 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      className="w-96 h-96 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {milestone.year}
                    </motion.div>
                  </div>
                  <div className="flex-1 pt-12">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12">
                      {milestone.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
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
              Ready to Experience the Palson Difference?
            </h2>
            <p className="text-xl text-indigo-100 mb-48 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who trust us with their tax and accounting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-16 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-8 px-48 py-20 bg-white text-indigo-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="w-20 h-20" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-8 px-48 py-20 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
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
