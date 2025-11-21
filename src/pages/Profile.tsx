
import React, { useState, useEffect } from "react";
import { User, Mail, Phone, MapPin, Calendar, Settings, History, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    joinDate: "January 2024",
    totalBookings: 12,
    favoriteServices: ["Wedding Valet", "Corporate Events"],
    recentBookings: [
      {
        id: "BK001",
        service: "Wedding Valet Service",
        provider: "Royal Valet Services",
        date: "2024-01-15",
        status: "Completed",
        amount: "₹15,000"
      },
      {
        id: "BK002",
        service: "Corporate Event Valet",
        provider: "Premium Valets Mumbai",
        date: "2024-01-20",
        status: "Upcoming",
        amount: "₹8,500"
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(userProfile);

  const handleSaveProfile = () => {
    setUserProfile(editForm);
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Profile updated:", editForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-ice-blue-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Motion variant="fadeIn">
            <div className="max-w-6xl mx-auto">
              {/* Profile Header */}
              <PremiumCard className="p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-ice-blue-500 to-ice-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {userProfile.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Member since {userProfile.joinDate}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Mail className="h-4 w-4" />
                        <span>{userProfile.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Phone className="h-4 w-4" />
                        <span>{userProfile.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4" />
                        <span>{userProfile.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ice-blue-600 dark:text-ice-blue-400">
                      {userProfile.totalBookings}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Total Bookings
                    </div>
                  </div>
                </div>
              </PremiumCard>

              {/* Profile Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="bookings">Bookings</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PremiumCard className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-ice-blue-600" />
                        Recent Activity
                      </h3>
                      <div className="space-y-3">
                        {userProfile.recentBookings.slice(0, 3).map((booking) => (
                          <div key={booking.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white text-sm">
                                {booking.service}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-300">
                                {booking.date}
                              </p>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              booking.status === 'Completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </PremiumCard>

                    <PremiumCard className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-ice-blue-600" />
                        Favorite Services
                      </h3>
                      <div className="space-y-2">
                        {userProfile.favoriteServices.map((service, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-ice-blue-50 dark:bg-ice-blue-900/30 rounded-lg">
                            <Heart className="h-4 w-4 text-ice-blue-600 dark:text-ice-blue-400" />
                            <span className="text-gray-900 dark:text-white">{service}</span>
                          </div>
                        ))}
                      </div>
                    </PremiumCard>
                  </div>
                </TabsContent>

                <TabsContent value="bookings" className="space-y-6">
                  <PremiumCard className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <History className="h-5 w-5 text-ice-blue-600" />
                      Booking History
                    </h3>
                    <div className="space-y-4">
                      {userProfile.recentBookings.map((booking) => (
                        <div key={booking.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {booking.service}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {booking.provider}
                              </p>
                            </div>
                            <span className={`px-3 py-1 text-sm rounded-full ${
                              booking.status === 'Completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 dark:text-gray-300">
                              Booking ID: {booking.id}
                            </span>
                            <span className="text-gray-600 dark:text-gray-300">
                              {booking.date}
                            </span>
                            <span className="font-semibold text-ice-blue-600 dark:text-ice-blue-400">
                              {booking.amount}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PremiumCard>
                </TabsContent>

                <TabsContent value="favorites" className="space-y-6">
                  <PremiumCard className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Your Favorite Services & Providers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center py-8">
                      You haven't added any favorites yet. Start browsing services to add them to your favorites!
                    </p>
                    <div className="text-center">
                      <PremiumButton asChild>
                        <a href="/providers">Browse Services</a>
                      </PremiumButton>
                    </div>
                  </PremiumCard>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <PremiumCard className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Settings className="h-5 w-5 text-ice-blue-600" />
                        Profile Settings
                      </h3>
                      <Button
                        onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                        variant={isEditing ? "default" : "outline"}
                      >
                        {isEditing ? "Save Changes" : "Edit Profile"}
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={isEditing ? editForm.name : userProfile.name}
                            onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={isEditing ? editForm.email : userProfile.email}
                            onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={isEditing ? editForm.phone : userProfile.phone}
                            onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={isEditing ? editForm.location : userProfile.location}
                            onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex gap-4 mt-6">
                        <Button
                          onClick={handleSaveProfile}
                          className="bg-ice-blue-600 hover:bg-ice-blue-700"
                        >
                          Save Changes
                        </Button>
                        <Button
                          onClick={() => {
                            setIsEditing(false);
                            setEditForm(userProfile);
                          }}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </PremiumCard>
                </TabsContent>
              </Tabs>
            </div>
          </Motion>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
