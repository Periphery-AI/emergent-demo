import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { 
  Users, 
  DollarSign, 
  Activity, 
  TrendingUp, 
  TrendingDown,
  UserPlus,
  FileText,
  BarChart,
  Settings,
  Bell,
  Search
} from 'lucide-react';
import { mockStats, mockActivities, mockQuickActions } from '../mock';

const iconMap = {
  'users': Users,
  'dollar-sign': DollarSign,
  'activity': Activity,
  'trending-up': TrendingUp,
  'user-plus': UserPlus,
  'file-text': FileText,
  'bar-chart': BarChart,
  'settings': Settings
};

const Dashboard = () => {
  const [stats] = useState(mockStats);
  const [activities] = useState(mockActivities);
  const [quickActions] = useState(mockQuickActions);

  const handleQuickAction = (actionTitle) => {
    console.log(`Action clicked: ${actionTitle}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-sm text-slate-500 mt-1">Welcome back! Here's your overview</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-emerald-500 rounded-full"></span>
              </Button>
              <Button variant="outline" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <Card 
                key={stat.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-slate-200"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        {stat.isPositive ? (
                          <TrendingUp className="h-4 w-4 text-emerald-600 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${
                          stat.isPositive ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                        <span className="text-sm text-slate-500 ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-lg">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Quick Actions</CardTitle>
              <CardDescription>Frequently used actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {quickActions.map((action) => {
                  const Icon = iconMap[action.icon];
                  return (
                    <Button
                      key={action.id}
                      variant="outline"
                      className="w-full justify-start hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 transition-colors duration-200"
                      onClick={() => handleQuickAction(action.title)}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {action.title}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Recent Activity</CardTitle>
              <CardDescription>Latest user actions and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div 
                    key={activity.id} 
                    className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0 hover:bg-slate-50 -mx-6 px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">{activity.user}</p>
                      <p className="text-sm text-slate-600 mt-1">{activity.action}</p>
                      <p className="text-xs text-slate-400 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;