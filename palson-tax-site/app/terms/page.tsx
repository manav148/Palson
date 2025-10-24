import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service - Palson Tax",
  description: "Terms and conditions for using Palson Tax services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-indigo py-64">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Terms of Service
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
            <h2 className="text-2xl font-bold text-navy mb-16">
              1. Agreement to Terms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              By engaging Palson Tax for services, you agree to these Terms of Service.
              These terms govern our professional relationship and outline both parties'
              responsibilities.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              2. Services Provided
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-16">
              Palson Tax provides:
            </p>
            <ul className="list-disc pl-24 space-y-8 text-base text-slate-600 mb-24">
              <li>Tax preparation and filing services</li>
              <li>Tax planning and advisory</li>
              <li>Bookkeeping and accounting services</li>
              <li>Payroll processing</li>
              <li>IRS representation and resolution</li>
            </ul>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Specific services will be outlined in your engagement letter.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              3. Client Responsibilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-16">
              You agree to:
            </p>
            <ul className="list-disc pl-24 space-y-8 text-base text-slate-600 mb-24">
              <li>Provide complete and accurate information in a timely manner</li>
              <li>Retain original documents and records as required by law</li>
              <li>Review all returns and documents before signing</li>
              <li>Pay fees according to the agreed schedule</li>
              <li>Notify us immediately of any IRS correspondence</li>
              <li>Respond promptly to requests for additional information</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              4. Fees and Payment
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Fees are based on the complexity of your situation and services required.
              Prices will be quoted before work begins. Payment is due upon completion
              of services unless other arrangements are made. Late payments may incur
              interest charges. We accept credit cards, ACH transfers, and checks.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              5. Confidentiality
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              All information you provide is confidential and protected by professional
              privilege. We will not disclose your information without your consent,
              except as required by law or professional standards. This confidentiality
              extends indefinitely, even after our relationship ends.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              6. Professional Standards
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Our team adheres to the ethical standards set by the IRS (Circular 230),
              AICPA, and NAEA. We will provide competent professional services with
              integrity and objectivity. However, tax law is complex and subject to
              interpretation. We make no guarantees about specific outcomes or IRS
              positions.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              7. Limitation of Liability
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Our liability is limited to the fees paid for the specific service that
              gave rise to the claim. We will correct errors at no charge if caused
              by our mistake. We are not liable for penalties or interest resulting
              from positions taken on your return based on information you provided,
              unless caused by our negligence.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              8. Termination
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Either party may terminate services with written notice. You are
              responsible for fees for work completed up to the termination date.
              Upon termination, we will provide all documents that belong to you.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              9. Dispute Resolution
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              Any disputes will first be addressed through good-faith negotiation.
              If unresolved, disputes will be settled through binding arbitration
              in accordance with the rules of the American Arbitration Association.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              10. Changes to Terms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-24">
              We may update these terms periodically. Continued use of our services
              after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-16 mt-48">
              Contact Information
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Questions about these Terms of Service? Contact us at:
            </p>
            <p className="text-base text-slate-600 mt-16">
              Email:{" "}
              <a href="mailto:info@palsontax.com" className="text-teal hover:underline">
                info@palsontax.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+15555551234" className="text-teal hover:underline">
                (555) 555-1234
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
