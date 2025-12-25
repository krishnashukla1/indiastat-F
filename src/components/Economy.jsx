import React from "react";
import {
  DollarSign,
  Users,
  TrendingUp,
  Globe,
  Building2,
  BarChart3,
} from "lucide-react";

export default function Economy() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Economy Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Insights into growth, GDP, sectors, and India's position as a global powerhouse.
        </p>
      </div>
      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="GDP (Nominal)"
          value="$4.1 Trillion"
          subtitle="2025"
        />
        <HighlightCard
          icon={<Users />}
          title="Growth Rate"
          value="6.5-7%"
          subtitle="Real GDP"
        />
        <HighlightCard
          icon={<Building2 />}
          title="Global Rank"
          value="4th"
          subtitle="Nominal GDP"
        />
        <HighlightCard
          icon={<Globe />}
          title="Per Capita"
          value="≈$2,800"
          subtitle="Nominal"
        />
      </div>
      {/* Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Economic Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Nominal GDP" value="$4.1 Tn" />
          <StatCard title="Real Growth" value="6.5%" />
          <StatCard title="Inflation" value="Low ~3%" />
          <StatCard title="Unemployment" value="≈5%" />
          <StatCard title="Services Share" value="55%" />
          <StatCard title="Manufacturing" value="Growing" />
        </div>
      </div>
      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Market & Economy</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Fastest growing major economy.</li>
          <li>• Services dominant, manufacturing rising.</li>
          <li>• Strong domestic demand and reforms.</li>
          <li>• Aim for $30 Tn by 2047.</li>
        </ul>
      </div>
      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-yellow-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="4th" label="Largest Economy" />
          <ImpactCard value="6.5%" label="Growth Rate" />
          <ImpactCard value="Resilient" label="Global Standing" />
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
