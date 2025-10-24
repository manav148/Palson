import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Resources & Guides - Palson Tax",
  description:
    "Expert tax tips, guides, and articles to help you stay informed and make smarter financial decisions.",
  alternates: {
    canonical: "/resources",
  },
};

const articles = [
  {
    title: "2025 Tax Brackets and Standard Deductions: What You Need to Know",
    slug: "2025-tax-brackets-guide",
    excerpt:
      "The IRS has announced new tax brackets for 2025. Here's how the changes might affect your tax bill and planning strategies.",
    category: "Tax Planning",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    title: "Top 10 Tax Deductions for Small Business Owners in 2025",
    slug: "small-business-deductions-2025",
    excerpt:
      "Don't leave money on the table. These are the most commonly missed deductions that could save your business thousands.",
    category: "Small Business",
    date: "2025-01-10",
    readTime: "7 min read",
  },
  {
    title: "Home Office Deduction: A Complete Guide for Remote Workers",
    slug: "home-office-deduction-guide",
    excerpt:
      "Working from home? Learn how to correctly claim the home office deduction and avoid common mistakes that trigger audits.",
    category: "Deductions",
    date: "2025-01-05",
    readTime: "6 min read",
  },
  {
    title: "What to Do If You Receive an IRS Notice: Step-by-Step Guide",
    slug: "irs-notice-response-guide",
    excerpt:
      "Don't panic. Here's exactly what to do when you get a letter from the IRS, including response timelines and when to seek help.",
    category: "IRS Matters",
    date: "2024-12-20",
    readTime: "8 min read",
  },
  {
    title: "LLC vs S-Corp: Choosing the Right Structure for Your Business",
    slug: "llc-vs-scorp-comparison",
    excerpt:
      "Understand the tax implications of each business structure and learn which one could save you the most money as you grow.",
    category: "Small Business",
    date: "2024-12-15",
    readTime: "10 min read",
  },
  {
    title: "Quarterly Estimated Taxes: How Much Should You Pay?",
    slug: "quarterly-estimated-tax-guide",
    excerpt:
      "Self-employed or have side income? Here's how to calculate quarterly estimates and avoid underpayment penalties.",
    category: "Tax Planning",
    date: "2024-12-10",
    readTime: "6 min read",
  },
];

const upcomingDeadlines = [
  { date: "Jan 31", description: "W-2s and 1099s due to recipients" },
  { date: "Mar 15", description: "S-Corp & Partnership returns due" },
  { date: "Apr 15", description: "Individual returns & Q1 estimated payments due" },
  { date: "Jun 15", description: "Q2 estimated tax payments due" },
  { date: "Sep 15", description: "Q3 estimated tax payments due" },
  { date: "Oct 15", description: "Extended returns due" },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-indigo py-64 lg:py-96">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-16">
              Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-24">
              Tax Tips, Guides & Insights
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Stay informed with expert articles on tax planning, deductions,
              small business strategies, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
            {/* Articles */}
            <div className="lg:col-span-2 space-y-24">
              {articles.map((article) => (
                <Card key={article.slug} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-12 mb-12">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-slate-500">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-4">
                        <Clock className="h-12 w-12" />
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl hover:text-teal transition-colors">
                      <Link href={`/resources/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed mb-16">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="inline-flex items-center gap-4 text-sm font-medium text-teal hover:gap-8 transition-all"
                    >
                      Read more
                      <ArrowRight className="h-16 w-16" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-24">
              {/* Key Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-8">
                    <Calendar className="h-20 w-20 text-teal" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-16">
                    {upcomingDeadlines.map((deadline, idx) => (
                      <div
                        key={idx}
                        className="flex gap-12 pb-16 border-b border-slate-200 last:border-0 last:pb-0"
                      >
                        <div className="flex-shrink-0 w-64 text-center">
                          <div className="text-sm font-semibold text-teal">
                            {deadline.date}
                          </div>
                        </div>
                        <div className="text-sm text-slate-700">
                          {deadline.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-teal/5 border-teal/20">
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-16">
                    Get monthly tax tips and deadline reminders delivered to your inbox.
                  </p>
                  <form className="space-y-12">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-12 py-8 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-16 py-8 bg-teal text-white text-sm font-semibold rounded-md hover:bg-teal-600 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      "Tax Planning",
                      "Small Business",
                      "Deductions",
                      "IRS Matters",
                      "Deadlines",
                      "Individual Tax",
                    ].map((category, idx) => (
                      <Link
                        key={idx}
                        href={`/resources?category=${category.toLowerCase()}`}
                        className="block text-sm text-slate-700 hover:text-teal transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
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
            "@type": "Blog",
            name: "Palson Tax Resources",
            description: "Tax tips, guides, and insights from expert tax professionals",
            publisher: {
              "@type": "Organization",
              name: "Palson Tax",
            },
            blogPost: articles.map((article) => ({
              "@type": "BlogPosting",
              headline: article.title,
              description: article.excerpt,
              datePublished: article.date,
              author: {
                "@type": "Organization",
                name: "Palson Tax",
              },
            })),
          }),
        }}
      />
    </>
  );
}
