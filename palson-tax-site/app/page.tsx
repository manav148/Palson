"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FinancialChart, DataVisualization } from "@/components/artwork";
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden accounting-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50"></div>

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
                className="inline-block mb-16"
              >
                <span className="inline-flex items-center gap-8 px-16 py-8 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                  <TrendingUp className="w-16 h-16" />
                  Trusted Since 2005
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-24 leading-tight">
                <span className="gradient-text">
                  Tax Services
                </span>
                <br />
                for the Modern Business
              </h1>

              <p className="text-xl text-slate-600 mb-32 leading-relaxed">
                Expert tax preparation, planning, and IRS representation powered by
                cutting-edge technology and deep financial expertise.
              </p>

              <div className="flex flex-wrap gap-16">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-8 px-32 py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-16 h-16 group-hover:translate-x-4 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-8 px-32 py-16 border-2 border-slate-300 rounded-xl font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-24 mt-48 pt-48 border-t border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <div className="text-3xl font-bold gradient-text">18+</div>
                  <div className="text-sm text-slate-600 mt-4">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">1000+</div>
                  <div className="text-sm text-slate-600 mt-4">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">99%</div>
                  <div className="text-sm text-slate-600 mt-4">Satisfaction Rate</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:flex justify-center items-center"
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

      {/* Services Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50"></div>

        <div className="container-custom relative">
          <motion.div
            className="text-center mb-48"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
            {[
              {
                icon: "📊",
                title: "Individual Tax Preparation",
                description: "Comprehensive tax preparation for individuals and families with year-round support.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: "🏢",
                title: "Small Business Tax",
                description: "Strategic tax services for LLCs, S-Corps, and partnerships.",
                color: "from-teal-500 to-emerald-500"
              },
              {
                icon: "📖",
                title: "Bookkeeping",
                description: "Monthly bookkeeping services to keep your finances organized.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "💡",
                title: "Tax Planning",
                description: "Proactive strategies to minimize your tax liability throughout the year.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🛡️",
                title: "IRS Representation",
                description: "Full audit support and representation before the IRS.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "📈",
                title: "Financial Advisory",
                description: "Strategic financial guidance to help you achieve your business goals.",
                color: "from-green-500 to-teal-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-glow h-full p-32 bg-white rounded-2xl border border-slate-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl">
                  <div className={`inline-flex items-center justify-center w-64 h-64 rounded-xl bg-gradient-to-br ${service.color} text-white text-3xl mb-24 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-12 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-24">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-8 text-indigo-600 font-medium group-hover:gap-12 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-16 h-16" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart visualization */}
          <motion.div
            className="mt-64 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FinancialChart />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600"></div>
        <div className="absolute inset-0 accounting-grid opacity-10"></div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-24">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 mb-48">
                Schedule a free consultation and discover how we can help optimize your financial future
              </p>

              <div className="grid md:grid-cols-3 gap-24 mb-48">
                <motion.div
                  className="glass p-24 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-32 h-32 text-emerald-400 mx-auto mb-16" />
                  <div className="text-white font-semibold mb-8">Secure & Confidential</div>
                  <div className="text-indigo-200 text-sm">Your data is protected with bank-level encryption</div>
                </motion.div>

                <motion.div
                  className="glass p-24 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-32 h-32 text-blue-400 mx-auto mb-16" />
                  <div className="text-white font-semibold mb-8">Fast Response</div>
                  <div className="text-indigo-200 text-sm">We respond to all inquiries within 24 hours</div>
                </motion.div>

                <motion.div
                  className="glass p-24 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TrendingUp className="w-32 h-32 text-teal-400 mx-auto mb-16" />
                  <div className="text-white font-semibold mb-8">Expert Guidance</div>
                  <div className="text-indigo-200 text-sm">Certified professionals with 18+ years experience</div>
                </motion.div>
              </div>

              <div className="space-y-24">
                <div className="flex flex-wrap justify-center gap-16">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-8 px-48 py-20 bg-white text-indigo-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="w-20 h-20 group-hover:translate-x-4 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-32 text-white">
                  <Link
                    href="mailto:info@palsontax.com"
                    className="inline-flex items-center gap-8 hover:text-emerald-300 transition-colors"
                  >
                    <span className="text-lg">✉️</span>
                    info@palsontax.com
                  </Link>
                  <Link
                    href="tel:+15555551234"
                    className="inline-flex items-center gap-8 hover:text-emerald-300 transition-colors"
                  >
                    <span className="text-lg">📞</span>
                    +1 (555) 555-1234
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
