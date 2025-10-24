"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <nav className="container-custom py-24" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-medium text-slate-900 hover:text-slate-600">
              Palson Tax
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-32">
              <Link
                href="/services"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-8 text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-20 w-20" />
              ) : (
                <Menu className="h-20 w-20" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-16 pt-16 border-t border-slate-200">
              <div className="flex flex-col gap-16">
                <Link
                  href="/services"
                  className="text-sm text-slate-600 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
