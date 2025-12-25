import React from "react";
import {
  Trees,
  Users,
  TrendingUp,
  Globe,
  Leaf,
  BarChart3,
} from "lucide-react";

export default function Environment() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-700 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Environment Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Key insights into forest cover, emissions, renewables, pollution, and sustainability efforts.
        </p>
      </div>
      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="Forest Cover"
          value="25%"
          subtitle="Of land area"
        />
        <HighlightCard
          icon={<Users />}
          title="Renewables"
          value="249 GW"
          subtitle="Capacity"
        />
        <HighlightCard
          icon={<Leaf />}
          title="GHG Share"
          value="7.8%"
          subtitle="Global emissions"
        />
        <HighlightCard
          icon={<Globe />}
          title="Carbon Sink"
          value="2.29 Bn Tonnes"
          subtitle="Additional"
        />
      </div>
      {/* Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Environment Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Renewable Capacity" value="249 GW" />
          <StatCard title="CO2 Emissions" value="3.35 Bn Tonnes" />
          <StatCard title="Air Pollution" value="Major Cities Affected" />
          <StatCard title="Forest Diversion" value="29,000 Ha" />
          <StatCard title="Net Zero Target" value="2070" />
          <StatCard title="Green Hydrogen" value="Mission Ongoing" />
        </div>
      </div>
      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Challenges & Efforts</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Balancing growth with conservation.</li>
          <li>• Rapid renewable expansion.</li>
          <li>• Air quality improvements needed.</li>
          <li>• Commitments to Paris Agreement.</li>
        </ul>
      </div>
      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-green-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-green-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="25%" label="Forest Cover" />
          <ImpactCard value="Renewables" label="Clean Energy Push" />
          <ImpactCard value="Sustainable" label="Future Goals" />
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
