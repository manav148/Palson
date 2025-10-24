import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const services = [
  { name: "Individual Tax Prep", href: "/services/individual-tax-prep" },
  { name: "Small Business Tax", href: "/services/small-business-tax" },
  { name: "Bookkeeping", href: "/services/bookkeeping" },
  { name: "Payroll Services", href: "/services/payroll" },
  { name: "Tax Planning", href: "/services/tax-planning" },
  { name: "IRS Resolution", href: "/services/irs-resolution" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Pricing", href: "/pricing" },
  { name: "Careers", href: "/careers" },
];

const resources = [
  { name: "Blog", href: "/resources" },
  { name: "Tax Calendar", href: "/resources/tax-calendar" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-48">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-16">
              <div className="text-2xl font-bold">
                <span className="text-white">Palson</span>
                <span className="text-teal"> Tax</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm mb-24 leading-relaxed max-w-md">
              Expert tax services for individuals and small businesses. Proactive planning,
              year-round support, and trusted IRS representation since 2005.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-12 mb-24">
              <div className="px-12 py-6 bg-teal/10 border border-teal/20 rounded-md text-xs font-semibold text-teal">
                IRS Enrolled Agent
              </div>
              <div className="px-12 py-6 bg-teal/10 border border-teal/20 rounded-md text-xs font-semibold text-teal">
                CPA Licensed
              </div>
              <div className="px-12 py-6 bg-teal/10 border border-teal/20 rounded-md text-xs font-semibold text-teal">
                20+ Years Experience
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-12 text-sm">
              <div className="flex items-start gap-8">
                <MapPin className="h-16 w-16 text-teal mt-2 flex-shrink-0" />
                <span className="text-slate-300">
                  123 Tax Plaza, Suite 100<br />
                  Financial District, CA 94111
                </span>
              </div>
              <div className="flex items-center gap-8">
                <Phone className="h-16 w-16 text-teal flex-shrink-0" />
                <a href="tel:+15555551234" className="text-slate-300 hover:text-teal transition-colors">
                  (555) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-8">
                <Mail className="h-16 w-16 text-teal flex-shrink-0" />
                <a href="mailto:info@palsontax.com" className="text-slate-300 hover:text-teal transition-colors">
                  info@palsontax.com
                </a>
              </div>
              <div className="flex items-start gap-8">
                <Clock className="h-16 w-16 text-teal mt-2 flex-shrink-0" />
                <span className="text-slate-300">
                  Mon-Fri: 9am-6pm<br />
                  Sat: By appointment
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-16 text-base">Services</h3>
            <ul className="space-y-12">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-16 text-base">Company</h3>
            <ul className="space-y-12">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-16 text-base">Resources</h3>
            <ul className="space-y-12">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-32">
              <h4 className="font-semibold text-white mb-12 text-sm">Newsletter</h4>
              <p className="text-xs text-slate-300 mb-12">
                Tax tips and deadline reminders
              </p>
              <form className="flex gap-8">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-12 py-8 rounded-md bg-navy-800 border border-navy-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-16 py-8 bg-teal text-white text-xs font-semibold rounded-md hover:bg-teal-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-64 pt-24 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Palson Tax. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-24 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-teal transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-teal transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-slate-400 hover:text-teal transition-colors">
                Security & Data
              </Link>
              <Link href="/accessibility" className="text-slate-400 hover:text-teal transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-16 text-center md:text-left">
            Palson Tax is committed to protecting your privacy and securing your financial information with bank-level encryption.
          </p>
        </div>
      </div>
    </footer>
  );
}
