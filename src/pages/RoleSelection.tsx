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
  FileCheck
} from 'lucide-react';

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
    },
    {
      role: 'admin' as UserRole,
      title: 'Administrator',
      description: 'Manage users, system settings, and oversee laboratory operations',
      icon: <Settings className="h-8 w-8" />,
      color: 'bg-success text-success-foreground',
      features: ['User Management', 'System Configuration', 'Reports & Analytics', 'Billing Management'],
      mockUser: mockUsers.find(u => u.role === 'admin')!,
    },
    {
      role: 'auditor' as UserRole,
      title: 'Auditor',
      description: 'Review compliance, audit trails, and ensure quality standards',
      icon: <Shield className="h-8 w-8" />,
      color: 'bg-warning text-warning-foreground',
      features: ['Compliance Review', 'Audit Trails', 'Quality Assurance', 'Report Generation'],
      mockUser: mockUsers.find(u => u.role === 'auditor')!,
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
    <div className="min-h-screen bg-gradient-clinical flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
            <Activity className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-2">LIMS Healthcare</h1>
          <p className="text-xl text-muted-foreground">Laboratory Information Management System</p>
          <p className="text-sm text-muted-foreground mt-2">Professional healthcare laboratory management platform</p>
        </div>

        {!selectedRole ? (
          <>
            {/* Role Selection */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {roles.map((roleData) => (
                <Card 
                  key={roleData.role}
                  className="clinical-card clinical-hover cursor-pointer group"
                  onClick={() => setSelectedRole(roleData.role)}
                >
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${roleData.color} mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {roleData.icon}
                    </div>
                    <CardTitle className="text-xl">{roleData.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{roleData.description}</p>
                    <div className="space-y-2">
                      {roleData.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
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
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleQuickLogin(roleData.role)}
                  >
                    {roleData.icon}
                    <span className="ml-2">Demo as {roleData.title}</span>
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

                <div className="space-y-3">
                  <Button 
                    className="w-full btn-clinical" 
                    onClick={handleLogin}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Authenticating...' : 'Login'}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => setSelectedRole(null)}
                  >
                    Back to Role Selection
                  </Button>

                  <Button 
                    variant="ghost" 
                    className="w-full text-sm" 
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
  );
}