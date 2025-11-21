
import React from "react";
import { PremiumCard } from "@/components/ui/premium-card";
import { Badge } from "@/components/ui/badge";
import { getProviderStats, getActiveProviders, getTrialProviders } from "@/services/providerService";
import { TrendingUp, Users, DollarSign, Star } from "lucide-react";

const BusinessDashboard = () => {
  const stats = getProviderStats();
  const activeProviders = getActiveProviders();
  const trialProviders = getTrialProviders();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Business Dashboard</h1>
      
      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <PremiumCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue</p>
              <p className="text-3xl font-bold text-green-600">₹{stats.monthlyRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </PremiumCard>
        
        <PremiumCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Providers</p>
              <p className="text-3xl font-bold text-blue-600">{stats.active}</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </PremiumCard>
        
        <PremiumCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Trial Providers</p>
              <p className="text-3xl font-bold text-ice-blue-600 dark:text-ice-blue-400">{stats.trial}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-ice-blue-600 dark:text-ice-blue-400" />
          </div>
        </PremiumCard>
        
        <PremiumCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Rating</p>
              <p className="text-3xl font-bold text-purple-600">{stats.averageRating.toFixed(1)}</p>
            </div>
            <Star className="h-8 w-8 text-purple-600" />
          </div>
        </PremiumCard>
      </div>

      {/* Active Providers */}
      <PremiumCard className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Active Providers (Paying Subscribers)</h2>
        <div className="space-y-3">
          {activeProviders.map((provider) => (
            <div key={provider.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{provider.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{provider.location}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant={provider.subscriptionTier === 'enterprise' ? 'default' : 'secondary'}>
                  {provider.subscriptionTier}
                </Badge>
                <span className="text-green-600 font-semibold">₹{provider.monthlyRevenue}/month</span>
              </div>
            </div>
          ))}
        </div>
      </PremiumCard>

      {/* Trial Providers */}
      {trialProviders.length > 0 && (
        <PremiumCard className="p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Trial Providers (Convert to Paid)</h2>
          <div className="space-y-3">
            {trialProviders.map((provider) => (
              <div key={provider.id} className="flex items-center justify-between p-3 bg-ice-blue-50 dark:bg-ice-blue-900/20 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{provider.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{provider.location}</p>
                </div>
                <Badge variant="outline">Trial</Badge>
              </div>
            ))}
          </div>
        </PremiumCard>
      )}
    </div>
  );
};

export default BusinessDashboard;
