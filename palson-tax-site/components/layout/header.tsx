"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Individual Tax Prep", href: "/services/individual-tax-prep" },
  { name: "Small Business Tax", href: "/services/small-business-tax" },
  { name: "Bookkeeping Services", href: "/services/bookkeeping" },
  { name: "Payroll Services", href: "/services/payroll" },
  { name: "Tax Planning", href: "/services/tax-planning" },
  { name: "IRS Resolution", href: "/services/irs-resolution" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-250",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-12"
            : "bg-white py-16"
        )}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-8 group">
              <div className="text-2xl font-bold">
                <span className="text-navy group-hover:text-teal transition-colors">
                  Palson
                </span>
                <span className="text-teal"> Tax</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-32">
              <div className="relative group">
                <button
                  className="flex items-center gap-4 text-sm font-medium text-slate-700 hover:text-teal transition-colors"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="h-16 w-16" />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-8 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-8 z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-16 py-12 text-sm text-slate-700 hover:bg-teal/5 hover:text-teal transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
              >
                About
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
              >
                Team
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-12">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/portal">Client Portal</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-8 text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-24 w-24" />
              ) : (
                <Menu className="h-24 w-24" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-16 py-16 border-t border-slate-200">
              <div className="flex flex-col space-y-16">
                <div>
                  <div className="text-sm font-semibold text-slate-900 mb-8">
                    Services
                  </div>
                  <div className="flex flex-col space-y-8 pl-16">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-sm text-slate-700 hover:text-teal transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/about"
                  className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/team"
                  className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/resources"
                  className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/faq"
                  className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-slate-700 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-8 pt-16 border-t border-slate-200">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Book Consultation
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/portal" onClick={() => setMobileMenuOpen(false)}>
                      Client Portal
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
