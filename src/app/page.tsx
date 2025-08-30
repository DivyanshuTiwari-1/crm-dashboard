import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CTASection from '@/components/CTASection';
import MiddleSection from '@/components/Middlesection';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Component */}
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {/* CTA Section Component (includes breadcrumb, title, actions, and stats) */}
            <CTASection />
            
            {/* Middle Section Component (account cards) */}
            <MiddleSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
