import React from "react";
import {
  PiggyBank,
  Users,
  TrendingUp,
  Globe,
  CreditCard,
  BarChart3,
} from "lucide-react";

export default function Finance() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Finance Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Insights into banking, insurance, capital markets, digital payments, and FDI.
        </p>
      </div>
      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="Stock Market Cap"
          value="High Growth"
          subtitle="Sensex Records"
        />
        <HighlightCard
          icon={<Users />}
          title="Digital Payments"
          value="UPI Leader"
          subtitle="Global"
        />
        <HighlightCard
          icon={<CreditCard />}
          title="Insurance FDI"
          value="100%"
          subtitle="Allowed"
        />
        <HighlightCard
          icon={<Globe />}
          title="Private Credit"
          value="$9 Bn H1"
          subtitle="Record"
        />
      </div>
      {/* Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Finance Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Insurance Market" value="Growing to $250 Bn" />
          <StatCard title="FDI in Finance" value="Increasing" />
          <StatCard title="Banking Assets" value="Robust" />
          <StatCard title="Fintech Boom" value="$1.3 Tn TAM" />
          <StatCard title="Capital Markets" value="175% of GDP" />
          <StatCard title="Digital Transactions" value="Surging" />
        </div>
      </div>
      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Market & Economy</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Digital revolution with UPI and fintech.</li>
          <li>• Insurance sector opening to 100% FDI.</li>
          <li>• Strong capital markets and inclusion.</li>
          <li>• Reforms for resilience and growth.</li>
        </ul>
      </div>
      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-indigo-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="Digital" label="Financial Inclusion" />
          <ImpactCard value="100% FDI" label="Insurance Growth" />
          <ImpactCard value="Resilient" label="Sector Strength" />
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
