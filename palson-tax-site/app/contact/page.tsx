"use client";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    businessType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend/CRM
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-indigo py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
              Let's Talk About Your Taxes
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Schedule a free consultation to discuss your needs. No obligation,
              just honest advice and a clear path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-48">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {submitted ? "Thank You!" : "Book Your Free Consultation"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-48">
                      <div className="w-64 h-64 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-24">
                        <Send className="h-32 w-32 text-success" />
                      </div>
                      <h3 className="text-xl font-semibold text-navy mb-12">
                        We've received your message!
                      </h3>
                      <p className="text-base text-slate-600 mb-24">
                        Our team will review your information and reach out within
                        one business day to schedule your consultation.
                      </p>
                      <p className="text-sm text-slate-600">
                        In the meantime, feel free to call us at{" "}
                        <a
                          href="tel:+15555551234"
                          className="text-teal hover:underline"
                        >
                          (555) 555-1234
                        </a>{" "}
                        if you have urgent questions.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-24">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700 mb-8"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-16 py-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 mb-8"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-16 py-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-8"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-16 py-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                          placeholder="(555) 555-5555"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-slate-700 mb-8"
                        >
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-16 py-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        >
                          <option value="">Select a service...</option>
                          <option value="individual">Individual Tax Preparation</option>
                          <option value="business">Small Business Tax</option>
                          <option value="bookkeeping">Bookkeeping Services</option>
                          <option value="payroll">Payroll Services</option>
                          <option value="planning">Tax Planning</option>
                          <option value="irs">IRS Resolution</option>
                          <option value="other">Not sure / Multiple services</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="businessType"
                          className="block text-sm font-medium text-slate-700 mb-8"
                        >
                          Are you a business or individual?
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-16 py-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        >
                          <option value="">Select...</option>
                          <option value="individual">Individual/Family</option>
                          <option value="llc">LLC</option>
                          <option value="scorp">S-Corporation</option>
                          <option value="ccorp">C-Corporation</option>
                          <option value="partnership">Partnership</option>
                          <option value="sole-prop">Sole Proprietor</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-700 mb-8"
                        >
                          Tell us about your needs
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-16 py-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                          placeholder="Briefly describe your tax situation and what you need help with..."
                        />
                      </div>

                      <div className="flex items-start gap-12">
                        <input
                          type="checkbox"
                          id="privacy"
                          required
                          className="mt-4"
                        />
                        <label htmlFor="privacy" className="text-sm text-slate-600">
                          I agree to the{" "}
                          <a href="/privacy" className="text-teal hover:underline">
                            Privacy Policy
                          </a>{" "}
                          and consent to being contacted about tax services.
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit Request
                      </Button>

                      <p className="text-xs text-slate-600 text-center">
                        We'll respond within one business day. All information is kept
                        strictly confidential.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-24">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-24">
                  <div className="flex items-start gap-12">
                    <MapPin className="h-20 w-20 text-teal mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-navy mb-4">Office</div>
                      <p className="text-sm text-slate-600">
                        123 Tax Plaza, Suite 100
                        <br />
                        Financial District, CA 94111
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-12">
                    <Phone className="h-20 w-20 text-teal mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-navy mb-4">Phone</div>
                      <a
                        href="tel:+15555551234"
                        className="text-sm text-slate-600 hover:text-teal transition-colors"
                      >
                        (555) 555-1234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-12">
                    <Mail className="h-20 w-20 text-teal mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-navy mb-4">Email</div>
                      <a
                        href="mailto:info@palsontax.com"
                        className="text-sm text-slate-600 hover:text-teal transition-colors"
                      >
                        info@palsontax.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-12">
                    <Clock className="h-20 w-20 text-teal mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-navy mb-4">Hours</div>
                      <p className="text-sm text-slate-600">
                        Monday - Friday: 9am - 6pm
                        <br />
                        Saturday: By appointment
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-teal/5 border-teal/20">
                <CardContent className="pt-24">
                  <h3 className="font-semibold text-navy mb-12">
                    Secure Document Upload
                  </h3>
                  <p className="text-sm text-slate-600 mb-16 leading-relaxed">
                    Already a client? Upload documents securely through our client
                    portal.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/portal">Access Client Portal</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-emerald/5 border-emerald/20">
                <CardContent className="pt-24">
                  <h3 className="font-semibold text-navy mb-12">
                    Confidentiality Guaranteed
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    All communications are protected by professional confidentiality
                    and encrypted for your security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "Palson Tax",
              telephone: "+1-555-555-1234",
              email: "info@palsontax.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tax Plaza, Suite 100",
                addressLocality: "Financial District",
                addressRegion: "CA",
                postalCode: "94111",
                addressCountry: "US",
              },
            },
          }),
        }}
      />
    </>
  );
}
