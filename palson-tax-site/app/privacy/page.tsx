import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy - Palson Tax",
  description: "Our commitment to protecting your personal and financial information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-indigo py-64">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-navy mb-16">Summary</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Palson Tax is committed to protecting your privacy. We collect only the
              information necessary to provide our services, never sell your data, and
              use bank-level encryption to secure all communications and documents.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Information We Collect
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-16">
              To prepare your tax returns and provide accounting services, we collect:
            </p>
            <ul className="list-disc pl-24 space-y-8 text-base text-slate-600 mb-24">
              <li>Personal identification information (name, SSN, DOB, address)</li>
              <li>Financial information (income, expenses, bank accounts)</li>
              <li>Contact information (email, phone number)</li>
              <li>Business information (if applicable)</li>
              <li>Usage data (how you interact with our website and portal)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-24 space-y-8 text-base text-slate-600 mb-24">
              <li>Preparing and filing tax returns</li>
              <li>Providing bookkeeping and payroll services</li>
              <li>Communicating about your account and services</li>
              <li>Improving our services and website</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Information Sharing
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-16">
              We do not sell or rent your personal information. We may share information:
            </p>
            <ul className="list-disc pl-24 space-y-8 text-base text-slate-600 mb-24">
              <li>With the IRS and state tax authorities (as required for filing)</li>
              <li>With third-party service providers (e.g., secure document storage)</li>
              <li>When required by law or legal process</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Data Security
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              We use industry-standard security measures including 256-bit SSL encryption,
              secure cloud storage, multi-factor authentication, and regular security audits.
              All team members are trained on data privacy and confidentiality requirements.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Your Rights
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-16">
              You have the right to:
            </p>
            <ul className="list-disc pl-24 space-y-8 text-base text-slate-600 mb-24">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Receive a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Data Retention
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              We retain your information for as long as necessary to provide services
              and comply with IRS regulations (typically 7 years). You may request
              deletion after this period.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Cookies & Tracking
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Our website uses cookies to improve user experience and analyze traffic.
              You can control cookie preferences through your browser settings. We do
              not use tracking for advertising purposes.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Contact Us
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your
              rights, contact us at:
            </p>
            <p className="text-base text-slate-600 mt-16">
              Email:{" "}
              <a href="mailto:privacy@palsontax.com" className="text-teal hover:underline">
                privacy@palsontax.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+15555551234" className="text-teal hover:underline">
                (555) 555-1234
              </a>
              <br />
              Address: 123 Tax Plaza, Suite 100, Financial District, CA 94111
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
