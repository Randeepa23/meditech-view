import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore, UserRole } from '@/store/authStore';
import { mockUsers } from '@/api/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Microscope, 
  Settings, 
  Shield, 
  Mail, 
  Lock, 
  Activity,
  Users,
  FileCheck,
  ArrowLeft
} from 'lucide-react';
import labHero from '@/assets/lab-hero.jpg';
import technicianWork from '@/assets/technician-work.jpg';
import adminDashboard from '@/assets/admin-dashboard.jpg';
import auditorReview from '@/assets/auditor-review.jpg';

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const roles = [
    {
      role: 'technician' as UserRole,
      title: 'Laboratory Technician',
      description: 'Process samples, conduct tests, and manage day-to-day laboratory operations',
      icon: <Microscope className="h-8 w-8" />,
      color: 'bg-primary text-primary-foreground',
      features: ['Sample Processing', 'Test Management', 'Result Entry', 'Inventory Tracking'],
      mockUser: mockUsers.find(u => u.role === 'technician')!,
      image: technicianWork,
    },
    {
      role: 'admin' as UserRole,
      title: 'Administrator',
      description: 'Manage users, system settings, and oversee laboratory operations',
      icon: <Settings className="h-8 w-8" />,
      color: 'bg-success text-success-foreground',
      features: ['User Management', 'System Configuration', 'Reports & Analytics', 'Billing Management'],
      mockUser: mockUsers.find(u => u.role === 'admin')!,
      image: adminDashboard,
    },
    {
      role: 'auditor' as UserRole,
      title: 'Auditor',
      description: 'Review compliance, audit trails, and ensure quality standards',
      icon: <Shield className="h-8 w-8" />,
      color: 'bg-warning text-warning-foreground',
      features: ['Compliance Review', 'Audit Trails', 'Quality Assurance', 'Report Generation'],
      mockUser: mockUsers.find(u => u.role === 'auditor')!,
      image: auditorReview,
    },
  ];

  const handleLogin = async () => {
    if (!selectedRole) return;
    
    setIsLoading(true);
    try {
      const roleUser = roles.find(r => r.role === selectedRole)?.mockUser;
      if (roleUser) {
        login(roleUser);
        navigate(`/${selectedRole}`);
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickLogin = (role: UserRole) => {
    const roleUser = roles.find(r => r.role === role)?.mockUser;
    if (roleUser) {
      login(roleUser);
      navigate(`/${role}`);
    }
  };

  const selectedRoleData = roles.find(r => r.role === selectedRole);

  return (
    <div className="min-h-screen bg-gradient-clinical relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={labHero} 
          alt="Professional Laboratory" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6 shadow-glow">
              <Activity className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              LIMS Healthcare
            </h1>
            <p className="text-2xl text-foreground/80 mb-2">Laboratory Information Management System</p>
            <p className="text-lg text-muted-foreground">Professional healthcare laboratory management platform</p>
          </div>

        {!selectedRole ? (
          <>
            {/* Role Selection */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {roles.map((roleData) => (
                <Card 
                  key={roleData.role}
                  className="clinical-card clinical-hover cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedRole(roleData.role)}
                >
                  {/* Role Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={roleData.image} 
                      alt={roleData.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className={`absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 rounded-full ${roleData.color} shadow-lg`}>
                      {roleData.icon}
                    </div>
                  </div>
                  
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-xl mb-2">{roleData.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{roleData.description}</p>
                  </CardHeader>
                  
                  <CardContent className="text-center pt-0">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {roleData.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs px-2 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Demo Access */}
            <Card className="clinical-card max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Quick Demo Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {roles.map((roleData) => (
                  <Button
                    key={roleData.role}
                    variant="clinical"
                    className="w-full justify-start h-12"
                    onClick={() => handleQuickLogin(roleData.role)}
                  >
                    {roleData.icon}
                    <span className="ml-3 font-medium">Demo as {roleData.title}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </>
        ) : (
          /* Login Form */
          <div className="max-w-md mx-auto">
            <Card className="clinical-card">
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${selectedRoleData?.color} mx-auto mb-4`}>
                  {selectedRoleData?.icon}
                </div>
                <CardTitle>Login as {selectedRoleData?.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder={selectedRoleData?.mockUser.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Demo password: demo123</p>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="clinical"
                    className="w-full h-12" 
                    onClick={handleLogin}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Authenticating...' : 'Login to Dashboard'}
                  </Button>
                  
                  <Button 
                    variant="back" 
                    className="w-full h-11" 
                    onClick={() => setSelectedRole(null)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Role Selection
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full h-11" 
                    onClick={() => handleQuickLogin(selectedRole)}
                  >
                    Quick Demo Login
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}