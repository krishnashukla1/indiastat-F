import React from "react";
import {
  Wheat,
  Users,
  TrendingUp,
  Globe,
  Tractor,
  BarChart3,
} from "lucide-react";

export default function Agriculture() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Agriculture Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Comprehensive insights into India’s agricultural economy, production,
          employment, and global impact.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="GDP Contribution"
          value="17.8%"
          subtitle="Share of India's GDP"
        />
        <HighlightCard
          icon={<Users />}
          title="Employment"
          value="≈43%"
          subtitle="Workforce dependent"
        />
        <HighlightCard
          icon={<Tractor />}
          title="Farmers"
          value="82%"
          subtitle="Small & marginal"
        />
        <HighlightCard
          icon={<Globe />}
          title="Global Rank"
          value="Top 10"
          subtitle="Agri exports worldwide"
        />
      </div>

      {/* Production Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Crop Production Statistics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Foodgrains" value="353.96 Million Tonnes" />
          <StatCard title="Rice Production" value="149.07 Million Tonnes" />
          <StatCard title="Wheat Production" value="117.5 Million Tonnes" />
          <StatCard title="Maize Production" value="42.28 Million Tonnes" />
          <StatCard title="Sector Growth" value="5.4% YoY (FY25)" />
          <StatCard title="Agri Exports" value="₹4.4 Lakh Crore" />
        </div>
      </div>

      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Market & Economy</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Agriculture is the backbone of rural India.</li>
          <li>• Market size projected to reach <strong>US$24 Billion by 2025</strong>.</li>
          <li>• Major exporter of rice, wheat, spices, cotton, and sugar.</li>
          <li>• Strong government support through MSP, subsidies & schemes.</li>
        </ul>
      </div>

      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-green-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-green-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="70%" label="Rural households depend on agriculture" />
          <ImpactCard value="43.5%" label="Total workforce involvement" />
          <ImpactCard value="Top 10" label="Global agri exporter rank" />
        </div>
      </div>

    </div>
  );
}

/* ---------- Components ---------- */

function HighlightCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6">
      <div className="flex items-center gap-4 mb-4 text-green-600">
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
      <p className="text-2xl font-bold text-green-700">{value}</p>
    </div>
  );
}

function ImpactCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-3xl font-extrabold text-green-700">{value}</p>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}
