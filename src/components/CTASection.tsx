import React from "react";
import {
  ChevronDown,
  BarChart3,
  Filter,
  Plus,
  Building2,
  Heart,
  AlertTriangle,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const TopStats = () => {
  const stats = [
    {
      label: "Total Accounts",
      value: "15",
      subtitle: "",
      icon: Building2,
      valueColor: "text-orange-500",
    },
    {
      label: "AI Health Score",
      value: "78%",
      subtitle: "Average",
      icon: Heart,
      valueColor: "text-orange-500",
    },
    {
      label: "High Risk",
      value: "3",
      subtitle: "Require attention",
      icon: AlertTriangle,
      valueColor: "text-orange-500",
    },
    {
      label: "Growing",
      value: "7",
      subtitle: "Positive Trend",
      icon: TrendingUp,
      valueColor: "text-orange-500",
    },
    {
      label: "Total Value",
      value: "$92.6M",
      subtitle: "Portfolio",
      icon: DollarSign,
      valueColor: "text-orange-500",
    },
  ];

  return (
    <div className="flex gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-black-200 px-6 py-6 flex items-center flex-1 min-h-[100px]"
          >
            <div className="flex-shrink-0 mr-4">
              <Icon className="w-10 h-10 text-gray-400" />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-sm text-gray-400 font-normal mb-2 leading-tight">
                {stat.label}
              </p>
              <div className="flex items-center gap-2">
                <p className={`text-2xl font-bold leading-none ${stat.valueColor}`}>
                  {stat.value}
                </p>
                {stat.subtitle && (
                  <span className="text-sm font-normal text-black-500 leading-tight">
                    {stat.subtitle}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="bg-white w-full px-7 py-6">
      <div className="flex flex-col gap-7">
        {/* Breadcrumb */}
        <div className="text-sm font-normal">
          <span className="text-gray-400">Dashboard</span>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Accounts</span>
        </div>

        {/* Header + Actions */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-orange-500 mb-2 leading-tight">
              My Accounts
            </h1>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              Manage client accounts and relationship data
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-black-300 rounded-full hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              All Accounts
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            <button className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-black-300 rounded-full hover:bg-gray-50 transition-colors">
              Actions
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            <button className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-black-300 rounded-full hover:bg-gray-50 transition-colors">
              <BarChart3 className="w-4 h-4 mr-2" />
              Client Survey
            </button>

            <button className="flex items-center px-4 py-2.5 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Create Account
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <TopStats />
      </div>
    </div>
  );
};

export default CTASection;