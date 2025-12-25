import React from "react";
import {
  Plane,
  Users,
  TrendingUp,
  Globe,
  Train,
  BarChart3,
} from "lucide-react";

export default function Transport() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Transport Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Insights into roads, railways, aviation, ports, and multimodal connectivity.
        </p>
      </div>
      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="Road Network"
          value="6.3 Million km"
          subtitle="Total"
        />
        <HighlightCard
          icon={<Users />}
          title="National Highways"
          value="1.46 Lakh km"
          subtitle="Length"
        />
        <HighlightCard
          icon={<Train />}
          title="Rail Electrification"
          value="97%"
          subtitle="Route km"
        />
        <HighlightCard
          icon={<Globe />}
          title="Airports"
          value="160+"
          subtitle="Operational"
        />
      </div>
      {/* Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Transport Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Rail Route" value="68,000+ km" />
          <StatCard title="Ports Capacity" value="Doubled" />
          <StatCard title="Highway Construction" value="34 km/day" />
          <StatCard title="Airports Growth" value="From 74 to 160" />
          <StatCard title="Gati Shakti" value="Multimodal Push" />
          <StatCard title="Electrification Savings" value="Significant" />
        </div>
      </div>
      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Market & Economy</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Massive infrastructure expansion.</li>
          <li>• Bharatmala, Sagarmala, UDAN schemes.</li>
          <li>• Focus on green and efficient transport.</li>
          <li>• Reducing logistics costs.</li>
        </ul>
      </div>
      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-teal-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-teal-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="6.3 Mn km" label="Roads" />
          <ImpactCard value="160" label="Airports" />
          <ImpactCard value="Connected" label="Nationwide Growth" />
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
