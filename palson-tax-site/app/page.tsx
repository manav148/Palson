import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-normal text-slate-900 mb-24 leading-tight">
              Tax Services for Individuals and Small Businesses
            </h1>
            <p className="text-xl text-slate-600 mb-32 leading-relaxed">
              Expert tax preparation, planning, and IRS representation.
              Based in California. Trusted since 2005.
            </p>
            <Link
              href="/contact"
              className="inline-block text-lg underline hover:no-underline text-slate-900"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 md:py-48 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl font-normal text-slate-900 mb-32">Services</h2>
          <div className="max-w-3xl space-y-20">
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-8">Individual Tax Preparation</h3>
              <p className="text-slate-600">Comprehensive tax preparation for individuals and families with year-round support.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-8">Small Business Tax</h3>
              <p className="text-slate-600">Strategic tax services for LLCs, S-Corps, and partnerships.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-8">Bookkeeping</h3>
              <p className="text-slate-600">Monthly bookkeeping services to keep your finances organized.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-8">Tax Planning</h3>
              <p className="text-slate-600">Proactive strategies to minimize your tax liability throughout the year.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-8">IRS Representation</h3>
              <p className="text-slate-600">Full audit support and representation before the IRS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-normal text-slate-900 mb-32">Contact</h2>
            <div className="space-y-16 text-slate-600">
              <p>
                <Link href="mailto:info@palsontax.com" className="underline hover:no-underline">
                  info@palsontax.com
                </Link>
              </p>
              <p>
                <Link href="tel:+15555551234" className="underline hover:no-underline">
                  +1 (555) 555-1234
                </Link>
              </p>
              <p className="pt-16">
                <Link href="/contact" className="underline hover:no-underline text-slate-900">
                  Schedule a free consultation →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
