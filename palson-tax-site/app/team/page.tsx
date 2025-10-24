import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team - Expert Tax Professionals | Palson Tax",
  description:
    "Meet our team of IRS Enrolled Agents and CPAs. Decades of combined experience serving individuals and small businesses.",
  alternates: {
    canonical: "/team",
  },
};

const team = [
  {
    name: "Michael Palson",
    slug: "michael-palson",
    title: "Founder & Senior Tax Strategist",
    credentials: "EA, CPA",
    image: "/team/michael-palson.jpg",
    bio: "20+ years helping individuals and businesses minimize tax liability through strategic planning.",
    specialties: ["Tax Planning", "IRS Representation", "Small Business"],
    email: "michael@palsontax.com",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    slug: "sarah-chen",
    title: "Senior Tax Accountant",
    credentials: "EA",
    image: "/team/sarah-chen.jpg",
    bio: "Specializes in individual tax preparation and multi-state compliance for remote workers.",
    specialties: ["Individual Tax", "Multi-State Returns", "Investments"],
    email: "sarah@palsontax.com",
    linkedin: "#",
  },
  {
    name: "David Rodriguez",
    slug: "david-rodriguez",
    title: "Small Business Tax Specialist",
    credentials: "CPA",
    image: "/team/david-rodriguez.jpg",
    bio: "Former Big 4 accountant now helping small businesses thrive with smart tax strategies.",
    specialties: ["Small Business", "Entity Formation", "Bookkeeping"],
    email: "david@palsontax.com",
    linkedin: "#",
  },
  {
    name: "Jennifer Kim",
    slug: "jennifer-kim",
    title: "Tax Resolution Specialist",
    credentials: "EA",
    image: "/team/jennifer-kim.jpg",
    bio: "Expert in IRS negotiations, audit representation, and resolving complex tax issues.",
    specialties: ["IRS Resolution", "Audit Defense", "Payment Plans"],
    email: "jennifer@palsontax.com",
    linkedin: "#",
  },
  {
    name: "Robert Taylor",
    slug: "robert-taylor",
    title: "Senior Bookkeeper",
    credentials: "QuickBooks ProAdvisor",
    image: "/team/robert-taylor.jpg",
    bio: "15 years managing financials for small to mid-sized businesses across industries.",
    specialties: ["Bookkeeping", "Payroll", "Financial Reporting"],
    email: "robert@palsontax.com",
    linkedin: "#",
  },
  {
    name: "Amanda Foster",
    slug: "amanda-foster",
    title: "Client Success Manager",
    credentials: "",
    image: "/team/amanda-foster.jpg",
    bio: "Ensures every client has a seamless, stress-free experience from onboarding to filing.",
    specialties: ["Client Relations", "Process Management", "Support"],
    email: "amanda@palsontax.com",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-indigo py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
              Meet Your Tax Experts
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Our team of IRS Enrolled Agents, CPAs, and specialists brings decades
              of combined experience. We're not just tax preparers—we're strategic
              partners invested in your financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
            {team.map((member) => (
              <Card key={member.slug} className="card-hover overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal/20 to-emerald/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-teal">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <CardContent className="pt-24">
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {member.name}
                    {member.credentials && (
                      <span className="text-sm text-teal ml-8">
                        {member.credentials}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-slate-600 mb-16">{member.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-16">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-8 mb-16">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-12 pt-16 border-t border-slate-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-4 text-sm text-teal hover:text-teal-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-16 w-16" />
                      Email
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center gap-4 text-sm text-teal hover:text-teal-600 transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-16 w-16" />
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-24">
              Credentials That Matter
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-48">
              Our team holds the highest professional certifications in the tax and
              accounting industry. We invest in ongoing education to stay ahead of
              changing regulations and serve you better.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
              <div>
                <div className="text-4xl font-bold text-teal mb-8">EA</div>
                <div className="font-semibold text-navy mb-8">IRS Enrolled Agent</div>
                <p className="text-sm text-slate-600">
                  Unlimited practice rights before the IRS
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal mb-8">CPA</div>
                <div className="font-semibold text-navy mb-8">
                  Certified Public Accountant
                </div>
                <p className="text-sm text-slate-600">
                  State-licensed accounting professionals
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal mb-8">80+</div>
                <div className="font-semibold text-navy mb-8">CPE Hours Annually</div>
                <p className="text-sm text-slate-600">
                  Continuous professional education commitment
                </p>
              </div>
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
            "@type": "Organization",
            name: "Palson Tax",
            employee: team.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.title,
              email: member.email,
              description: member.bio,
            })),
          }),
        }}
      />
    </>
  );
}
