
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Briefcase, User, Users, Clock, Settings, LogOut, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';

// Mock data
const mockProjects = [
  { id: 1, name: 'Office Security System', status: 'In Progress', date: '2023-06-15' },
  { id: 2, name: 'Home Automation', status: 'Completed', date: '2023-05-22' },
  { id: 3, name: 'Network Cabling', status: 'Scheduled', date: '2023-07-10' },
];

const mockMessages = [
  { id: 1, sender: 'System', message: 'Your quote has been approved', read: false, date: '2023-06-18' },
  { id: 2, sender: 'Technician', message: 'Scheduled visit for next Tuesday', read: true, date: '2023-06-15' },
  { id: 3, sender: 'Admin', message: 'Invoice #1234 has been generated', read: false, date: '2023-06-12' },
];

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', projects: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', projects: 1 },
  { id: 3, name: 'Admin User', email: 'admin@lgt.com', role: 'admin', projects: 0 },
];

const DashboardPage: React.FC = () => {
  const { toast } = useToast();
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
  });

  const isAdmin = user?.role === 'admin';

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been saved.',
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
  };

  // Filter users based on search term (admin only)
  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute requiresAdmin={false}>
      <Layout>
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-lgt-gray">Welcome back, {user?.name}</p>
              </div>
              <Button 
                variant="outline" 
                className="flex items-center border-lgt-orange text-lgt-orange hover:bg-lgt-orange/10"
                onClick={handleLogout}
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-lgt-orange/10 text-lgt-orange flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      {user?.name.charAt(0) || 'U'}
                    </div>
                    <h2 className="font-semibold">{user?.name}</h2>
                    <p className="text-sm text-lgt-gray">{user?.role === 'admin' ? 'Administrator' : 'Client'}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Briefcase size={18} className="mr-2" />
                      Projects
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell size={18} className="mr-2" />
                      Notifications
                      <span className="ml-auto bg-lgt-orange text-white text-xs rounded-full px-2">
                        {mockMessages.filter(m => !m.read).length}
                      </span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User size={18} className="mr-2" />
                      Profile
                    </Button>
                    {isAdmin && (
                      <Button variant="ghost" className="w-full justify-start">
                        <Users size={18} className="mr-2" />
                        Users
                      </Button>
                    )}
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings size={18} className="mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <Tabs defaultValue="projects">
                    <TabsList className="mb-6">
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                      <TabsTrigger value="notifications">Notifications</TabsTrigger>
                      <TabsTrigger value="profile">Profile</TabsTrigger>
                      {isAdmin && <TabsTrigger value="users">Users</TabsTrigger>}
                    </TabsList>
                    
                    <TabsContent value="projects">
                      <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="px-4 py-2 text-left text-sm font-medium text-lgt-gray">Project</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-lgt-gray">Status</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-lgt-gray">Date</th>
                              <th className="px-4 py-2 text-right text-sm font-medium text-lgt-gray">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {mockProjects.map(project => (
                              <tr key={project.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-lgt-dark">{project.name}</td>
                                <td className="px-4 py-3">
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                    'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {project.status}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-lgt-gray">{project.date}</td>
                                <td className="px-4 py-3 text-right">
                                  <Button size="sm" variant="ghost" className="text-lgt-orange hover:text-lgt-orange/80">
                                    View
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {mockProjects.length === 0 && (
                        <div className="text-center py-8 text-lgt-gray">
                          No projects found.
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="notifications">
                      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                      <div className="space-y-4">
                        {mockMessages.map(message => (
                          <div 
                            key={message.id} 
                            className={`p-4 rounded-lg border ${message.read ? 'bg-white' : 'bg-lgt-orange/5 border-lgt-orange/20'}`}
                          >
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{message.sender}</span>
                              <span className="text-xs text-lgt-gray">{message.date}</span>
                            </div>
                            <p className="text-lgt-gray">{message.message}</p>
                          </div>
                        ))}
                        {mockMessages.length === 0 && (
                          <div className="text-center py-8 text-lgt-gray">
                            No notifications found.
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="profile">
                      <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                      <form onSubmit={handleProfileSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <Label htmlFor="profile-name">Full Name</Label>
                            <Input 
                              id="profile-name"
                              name="name"
                              value={profile.name}
                              onChange={handleProfileChange}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="profile-email">Email Address</Label>
                            <Input 
                              id="profile-email"
                              name="email"
                              type="email"
                              value={profile.email}
                              onChange={handleProfileChange}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="profile-phone">Phone Number</Label>
                            <Input 
                              id="profile-phone"
                              name="phone"
                              value={profile.phone}
                              onChange={handleProfileChange}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="profile-address">Address</Label>
                            <Input 
                              id="profile-address"
                              name="address"
                              value={profile.address}
                              onChange={handleProfileChange}
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <Button type="submit" className="bg-lgt-orange hover:bg-orange-600">
                          Save Changes
                        </Button>
                      </form>
                    </TabsContent>
                    
                    {isAdmin && (
                      <TabsContent value="users">
                        <h2 className="text-xl font-semibold mb-4">User Management</h2>
                        <div className="mb-4">
                          <Input
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="max-w-md"
                          />
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="px-4 py-2 text-left text-sm font-medium text-lgt-gray">Name</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-lgt-gray">Email</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-lgt-gray">Role</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-lgt-gray">Projects</th>
                                <th className="px-4 py-2 text-right text-sm font-medium text-lgt-gray">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {filteredUsers.map(user => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                  <td className="px-4 py-3 text-lgt-dark">{user.name}</td>
                                  <td className="px-4 py-3 text-lgt-gray">{user.email}</td>
                                  <td className="px-4 py-3 capitalize">{user.role}</td>
                                  <td className="px-4 py-3 text-lgt-gray">{user.projects}</td>
                                  <td className="px-4 py-3 text-right">
                                    <Button size="sm" variant="ghost" className="text-lgt-orange hover:text-lgt-orange/80">
                                      Edit
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {filteredUsers.length === 0 && (
                          <div className="text-center py-8 text-lgt-gray">
                            No users found matching your search.
                          </div>
                        )}
                      </TabsContent>
                    )}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ProtectedRoute>
  );
};

export default DashboardPage;
