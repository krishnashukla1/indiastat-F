import React from "react";
import {
  HeartPulse,
  Users,
  TrendingUp,
  Globe,
  Stethoscope,
  BarChart3,
} from "lucide-react";

export default function Health() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Health Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Comprehensive insights into India’s healthcare system, infrastructure, outcomes, and global standing.
        </p>
      </div>
      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="Health Expenditure"
          value="≈2%"
          subtitle="Share of GDP (Public)"
        />
        <HighlightCard
          icon={<Users />}
          title="Life Expectancy"
          value="71-72 Years"
          subtitle="At birth"
        />
        <HighlightCard
          icon={<Stethoscope />}
          title="Infant Mortality"
          value="25-28 per 1,000"
          subtitle="Live births"
        />
        <HighlightCard
          icon={<Globe />}
          title="Global Rank"
          value="Top Emitter"
          subtitle="But improving outcomes"
        />
      </div>
      {/* Production Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Health Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Operational Airports" value="160+" />
          <StatCard title="Life Expectancy" value="71 Years" />
          <StatCard title="Infant Mortality Rate" value="25 per 1,000" />
          <StatCard title="Maternal Mortality Rate" value="≈97 per 100,000" />
          <StatCard title="Doctors Ratio" value="Improving" />
          <StatCard title="Health Insurance Coverage" value="Expanding via Ayushman Bharat" />
        </div>
      </div>
      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Market & Economy</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Dominated by private sector in hospitals and services.</li>
          <li>• Market size growing rapidly with rising demand.</li>
          <li>• Major schemes like Ayushman Bharat providing coverage to millions.</li>
          <li>• Strong focus on universal health coverage and infrastructure.</li>
        </ul>
      </div>
      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-blue-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="2.6%" label="Govt health spend of GDP" />
          <ImpactCard value="70+" label="Years life expectancy" />
          <ImpactCard value="Expanding" label="Health infrastructure growth" />
        </div>
      </div>
    </div>
  );
}

/* Components remain the same */
function HighlightCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6">
      <div className="flex items-center gap-4 mb-4 text-blue-600">
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
      <p className="text-2xl font-bold text-blue-700">{value}</p>
    </div>
  );
}
function ImpactCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-3xl font-extrabold text-blue-700">{value}</p>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}