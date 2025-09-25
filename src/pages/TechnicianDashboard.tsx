import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { DashboardCard } from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TestTube, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Calendar,
  Activity,
  Plus
} from 'lucide-react';
import { mockDashboardStats, mockTestOrders, mockPatients } from '@/api/mockData';

export default function TechnicianDashboard() {
  const [stats, setStats] = useState(mockDashboardStats.technician);
  const [recentTests, setRecentTests] = useState(mockTestOrders.slice(0, 5));
  const [recentPatients, setRecentPatients] = useState(mockPatients.slice(0, 3));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'status-success';
      case 'in-progress': return 'bg-primary/10 text-primary border border-primary/20';
      case 'pending': return 'status-warning';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'stat': return 'status-danger';
      case 'urgent': return 'status-warning';
      default: return 'bg-muted text-muted-foreground border border-border/50';
    }
  };

  return (
    <Layout title="Laboratory Technician Dashboard">
      <div className="space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Pending Samples"
            value={stats.pendingSamples}
            subtitle="Awaiting processing"
            icon={<TestTube className="h-5 w-5" />}
            variant="warning"
          />
          <DashboardCard
            title="Tests In Progress"
            value={stats.testsInProgress}
            subtitle="Currently running"
            icon={<Clock className="h-5 w-5" />}
            variant="default"
          />
          <DashboardCard
            title="Completed Today"
            value={stats.completedToday}
            subtitle="Tests finished"
            icon={<CheckCircle className="h-5 w-5" />}
            variant="success"
          />
          <DashboardCard
            title="Low Stock Alerts"
            value={stats.lowStockAlerts}
            subtitle="Items need restocking"
            icon={<AlertTriangle className="h-5 w-5" />}
            variant="danger"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Test Orders */}
          <div className="lg:col-span-2">
            <Card className="clinical-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Recent Test Orders</span>
                </CardTitle>
                <Button size="sm" variant="clinical">
                  <Plus className="h-4 w-4 mr-2" />
                  New Test
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTests.map((test) => (
                    <div 
                      key={test.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium">{test.patientName}</h4>
                          <Badge className={getPriorityColor(test.priority)}>
                            {test.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{test.testType}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Ordered: {new Date(test.orderDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(test.status)}>
                          {test.status.replace('-', ' ')}
                        </Badge>
                        <Button variant="outline" size="sm" className="font-medium">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Patients */}
          <div>
            <Card className="clinical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Recent Patients</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div 
                      key={patient.id}
                      className="p-3 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium">{patient.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        MR: {patient.medicalRecord}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="clinical" className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Register New Patient
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="clinical-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-24 flex-col hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                <TestTube className="h-7 w-7 mb-2 text-primary" />
                <span className="font-medium">Process Sample</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col hover:border-success/40 hover:bg-success/5 transition-all duration-300">
                <CheckCircle className="h-7 w-7 mb-2 text-success" />
                <span className="font-medium">Enter Results</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                <Users className="h-7 w-7 mb-2 text-primary" />
                <span className="font-medium">Patient Lookup</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col hover:border-warning/40 hover:bg-warning/5 transition-all duration-300">
                <Calendar className="h-7 w-7 mb-2 text-warning" />
                <span className="font-medium">Schedule Test</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}