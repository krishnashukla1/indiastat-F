import React from "react";
import {
  AlertTriangle,
  Users,
  TrendingUp,
  Globe,
  Scale,
  BarChart3,
} from "lucide-react";


export default function Crime() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Indian Crime Overview
        </h1>
        <p className="text-lg md:text-xl max-w-3xl opacity-90">
          Key statistics on crime rates, trends, and law enforcement in India.
        </p>
      </div>
      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          icon={<BarChart3 />}
          title="Crime Rate"
          value="446 per Lakh"
          subtitle="Per 100,000 population"
        />
        <HighlightCard
          icon={<Users />}
          title="Cybercrime Surge"
          value="+30%"
          subtitle="YoY increase"
        />
        <HighlightCard
          icon={<Scale />}
          title="Crimes vs Women"
          value="Rising Concern"
          subtitle="4% increase"
        />
        <HighlightCard
          icon={<Globe />}
          title="Urban Focus"
          value="Higher in Cities"
          subtitle="Than rural"
        />
      </div>
      {/* Statistics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Crime Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Cognizable Crimes" value="6.5 Million+" />
          <StatCard title="Murder Rate" value="Low decline" />
          <StatCard title="Cybercrimes" value="86,000+" />
          <StatCard title="Theft" value="Most Common" />
          <StatCard title="Rape Cases" value="+1.1%" />
          <StatCard title="Kidnapping" value="+5%" />
        </div>
      </div>
      {/* Market & Economy */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Trends & Challenges</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Overall crime rate slightly declining.</li>
          <li>• Rise in cyber and crimes against vulnerable groups.</li>
          <li>• Focus on fast-track courts and digital reporting.</li>
          <li>• Urban areas higher incidence.</li>
        </ul>
      </div>
      {/* Socio-Economic Impact */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-red-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-red-800">
          Socio-Economic Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ImpactCard value="446" label="Per lakh population" />
          <ImpactCard value="Cyber Rise" label="Digital threats" />
          <ImpactCard value="Improving" label="Reporting & Justice" />
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
