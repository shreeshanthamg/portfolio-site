// Personal Portfolio Website (React + Tailwind + Vercel-ready)

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin } from 'lucide-react';

const projects = [
  {
    title: 'Grocery Store Sales Analysis',
    description:
      'Analyzed 3 months of sales data using Excel & SQL. Identified top-selling SKUs, ABC classification, and combo sale opportunities.',
    tools: ['Excel', 'SQL', 'Power BI'],
  },
  {
    title: 'Customer Churn Prediction (Mock)',
    description:
      'Used a synthetic subscription dataset. Trained a logistic regression model to predict churn with 78% accuracy.',
    tools: ['Python', 'Pandas', 'Sklearn'],
  },
];

export default function PortfolioSite() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Shreeshanth</h1>
        <p className="text-xl text-gray-600">
          Freelance Data Analyst | IIT Madras | Business Insight Creator
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button variant="outline"><Mail className="w-4 h-4 mr-2" /> Email</Button>
          <Button variant="outline"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</Button>
          <Button variant="outline"><Github className="w-4 h-4 mr-2" /> GitHub</Button>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">📁 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <Card key={idx} className="rounded-2xl shadow p-4">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="mb-2 text-sm text-gray-700">{proj.description}</p>
                <div className="text-xs text-gray-500">Tools: {proj.tools.join(', ')}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-4">🎯 Freelance Services</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Sales Health Report:</strong> Trends, top products, slow movers – ₹2,500</li>
          <li><strong>Inventory Optimization:</strong> ABC analysis & reorder plan – ₹3,000</li>
          <li><strong>Customer Insight Report:</strong> Repeat rate, segmentation – ₹3,500</li>
        </ul>
      </section>

      {/* About Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-4">🧠 About Me</h2>
        <p className="text-gray-700">
          I’m a 2nd-year Data Science student at IIT Madras. I specialize in turning messy sales data into clear, actionable insights that help small businesses grow. I use tools like Excel, SQL, Power BI, and Python to solve real-world problems.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">📬 Contact Me</h2>
        <p className="text-gray-600">Email me at: <a href="mailto:your-email@example.com" className="text-blue-600 underline">your-email@example.com</a></p>
      </section>
    </main>
  );
}
