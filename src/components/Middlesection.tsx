import React from 'react';
import { 
  Sparkles,
  User,
  MapPin,
  Building2,
  TrendingUp
} from 'lucide-react';

// Account Card Component
const AccountCard = ({ account, index }: { account: any, index: number }) => {
  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low risk':
        return 'bg-green-50 text-green-600 border border-green-200';
      case 'medium risk':
        return 'bg-orange-50 text-orange-600 border border-orange-200';
      case 'high risk':
        return 'bg-pink-50 text-pink-600 border border-pink-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
    }
  };

  const getGrowthColor = (growth: string) => {
    if (growth.startsWith('+')) {
      return 'bg-green-50 text-green-600 border border-green-200';
    } else if (growth.startsWith('-')) {
      return 'bg-red-50 text-red-600 border border-red-200';
    }
    return 'bg-gray-50 text-gray-600 border border-gray-200';
  };

  const getScoreBadgeColor = (index: number) => {
    const colors = [
      'bg-green-50 text-green-600 border border-green-200', // First card - green
      'bg-orange-50 text-orange-600 border border-orange-200', // Second card - orange  
      'bg-pink-50 text-pink-600 border border-pink-200' // Third card - pink
    ];
    return colors[index] || 'bg-gray-50 text-gray-600 border border-gray-200';
  };

  const getValueColor = (index: number) => {
    const colors = ['text-green-600', 'text-orange-600', 'text-pink-600'];
    return colors[index] || 'text-gray-600';
  };

  const getBottomBorderColor = (index: number) => {
    const colors = [
      'border-b-4 border-b-green-500', // First card - green
      'border-b-4 border-b-orange-500', // Second card - orange
      'border-b-4 border-b-pink-500' // Third card - pink
    ];
    return colors[index] || 'border-b-4 border-b-gray-500';
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow ${getBottomBorderColor(index)}`}>
      {/* Header with Icon */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-4 flex-1">
          {account.title}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-orange-500" />
        </div>
      </div>

      {/* Score and Risk Badges */}
      <div className="flex items-center gap-2 mb-4">
        <div className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getScoreBadgeColor(index)}`}>
          <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
          {account.score}%
        </div>
        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getRiskColor(account.risk)}`}>
          {account.risk}
        </span>
      </div>

      {/* Team Info - Fixed Alignment */}
      <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1.5 flex-shrink-0 text-gray-400" />
          <span>{account.manager}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1.5  text-gray-400" />
          <span>{account.location}</span>
        </div>
        <div className="flex items-center">
          <Building2 className="w-4 h-4 mr-1.5  text-gray-400" />
          <span>{account.office}</span>
        </div>
      </div>

      {/* Tier and Category */}
      <div className="mb-5">
        <span className="text-sm font-semibold text-green-600">Tier 1</span>
        <span className="text-gray-300 mx-2">|</span>
        <span className="text-sm font-medium text-gray-900">{account.category}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-5"></div>

      {/* Value and Growth */}
      <div className="flex items-end justify-between">
        <div>
          <p className={`text-3xl font-bold ${getValueColor(index)} mb-1`}>{account.value}</p>
          <p className="text-sm text-gray-900 font-medium">Total Value</p>
        </div>
        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getGrowthColor(account.growth)}`}>
          {account.growth}
        </span>
      </div>
    </div>
  );
};

const MiddleSection = () => {
  const accounts = [
    {
      title: 'Los Angeles County Metropolitan Transportation Authority (Metro)',
      score: 92,
      risk: 'Low risk',
      manager: 'Diana Rodriguez',
      location: 'Los Angeles, CA',
      office: 'West Coast Office',
      category: 'Transportation',
      value: '$8.5M',
      growth: '+15.3% Growth'
    },
    {
      title: 'Los Angeles County Metropolitan Transportation Authority (Metro)',
      score: 92,
      risk: 'Medium risk',
      manager: 'Diana Rodriguez',
      location: 'Los Angeles, CA',
      office: 'West Coast Office',
      category: 'Transportation',
      value: '$8.5M',
      growth: '+15.3% Growth'
    },
    {
      title: 'Los Angeles County Metropolitan Transportation Authority (Metro)',
      score: 92,
      risk: 'High risk',
      manager: 'David Rodriguez',
      location: 'Los Angeles, CA',
      office: 'West Coast Office',
      category: 'Transportation',
      value: '$8.5M',
      growth: '+15.3% Growth'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account, index) => (
            <AccountCard key={index} account={account} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;