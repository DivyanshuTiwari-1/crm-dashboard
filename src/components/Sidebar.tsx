import React from 'react';
import { 
  Target, 
  Users, 
  FileText, 
  FolderOpen, 
  Phone, 
  Folder, 
  DollarSign, 
  Package, 
  BarChart3,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Target, label: 'Opportunities', active: false },
    { icon: Users, label: 'Accounts', active: true },
    { icon: FileText, label: 'Proposals', active: false },
    { icon: FolderOpen, label: 'Resources', active: false },
    { icon: Phone, label: 'Contacts', active: false },
    { icon: Folder, label: 'Projects', active: false },
    { icon: DollarSign, label: 'Finance', active: false },
    { icon: Package, label: 'Procurements', active: false },
    { icon: BarChart3, label: 'KPIs', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen relative">
      <nav className="pt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex items-center px-6 py-4 text-sm font-medium cursor-pointer relative ${
                item.active
                  ? 'text-gray-900 bg-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {/* Orange bottom border for active item */}
              {item.active && (
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-orange-500"></div>
              )}
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </div>
          );
        })}
      </nav>
      
      <div className="absolute bottom-6 left-0 right-0 px-6">
        <div className="flex items-center text-gray-600 hover:bg-gray-50 px-3 py-3 rounded cursor-pointer">
          <LogOut className="w-5 h-5 mr-3" />
          <span className="text-sm font-medium">Log-out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;