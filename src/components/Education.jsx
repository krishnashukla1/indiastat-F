import React from "react";
import {
  Users,
  Globe,
  GraduationCap,
  BarChart3,
} from "lucide-react";

export default function Education() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Education Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Insights into literacy, enrollment, infrastructure, and India's push
          towards universal education.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="Literacy Rate"
          value="≈78%"
          subtitle="Overall (2025 est.)"
        />
        <HighlightCard
          icon={<Users />}
          title="Higher Edu GER"
          value="28–30%"
          subtitle="Gross Enrollment Ratio"
        />
        <HighlightCard
          icon={<GraduationCap />}
          title="Schools"
          value="1.5 Million+"
          subtitle="Across India"
        />
        <HighlightCard
          icon={<Globe />}
          title="NEP 2030 Goal"
          value="100% GER"
          subtitle="National Education Policy"
        />
      </div>

      {/* Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Education Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Higher Education Enrollment" value="4.3 Crore+" />
          <StatCard title="Overall Literacy Rate" value="78%" />
          <StatCard title="Female Literacy Rate" value="72–75%" />
          <StatCard title="Primary GER" value="100%+" />
          <StatCard title="EdTech Market" value="Rapidly Growing" />
          <StatCard title="Teachers Workforce" value="Millions Trained" />
        </div>
      </div>

      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Market & Economy</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• NEP 2020 is transforming education delivery.</li>
          <li>• Education market projected to reach $225 Billion.</li>
          <li>• Strong focus on digital & skill-based learning.</li>
          <li>• Government schemes like Samagra Shiksha.</li>
        </ul>
      </div>

      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-purple-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="78%" label="National Literacy" />
          <ImpactCard value="28%" label="Higher Education GER" />
          <ImpactCard value="Rising" label="Global Competitiveness" />
        </div>
      </div>

    </div>
  );
}

/* ---------- Reusable Components ---------- */

function HighlightCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6">
      <div className="flex items-center gap-3 text-purple-600 mb-4">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-3xl font-extrabold">{value}</p>
      <p className="text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
      <h3 className="text-gray-600 font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold text-purple-700">{value}</p>
    </div>
  );
}

function ImpactCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-3xl font-extrabold text-purple-700">{value}</p>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}
