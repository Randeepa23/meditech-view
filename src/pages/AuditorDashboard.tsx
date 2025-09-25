import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { DashboardCard } from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileCheck, 
  AlertCircle, 
  TrendingUp, 
  Calendar, 
  Search,
  Download,
  Shield,
  Clock
} from 'lucide-react';
import { mockDashboardStats } from '@/api/mockData';

export default function AuditorDashboard() {
  const [stats, setStats] = useState(mockDashboardStats.auditor);

  const auditLogs = [
    {
      id: '1',
      timestamp: '2024-01-22T10:30:00Z',
      user: 'Dr. Sarah Chen',
      action: 'Test Result Updated',
      resource: 'Test Order #test_001',
      severity: 'info',
    },
    {
      id: '2',
      timestamp: '2024-01-22T09:15:00Z',
      user: 'Michael Rodriguez',
      action: 'User Account Created',
      resource: 'User #user_new_001',
      severity: 'warning',
    },
    {
      id: '3',
      timestamp: '2024-01-22T08:45:00Z',
      user: 'System',
      action: 'Inventory Alert Triggered',
      resource: 'Reagent Kit - CBC',
      severity: 'warning',
    },
    {
      id: '4',
      timestamp: '2024-01-21T16:20:00Z',
      user: 'Dr. Sarah Chen',
      action: 'Patient Data Accessed',
      resource: 'Patient #patient_001',
      severity: 'info',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'error': return 'status-danger';
      case 'warning': return 'status-warning';
      default: return 'bg-primary/10 text-primary border border-primary/20';
    }
  };

  return (
    <Layout title="Auditor Dashboard">
      <div className="space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Records"
            value={stats.totalRecords.toLocaleString()}
            subtitle="Audit trail entries"
            icon={<FileCheck className="h-5 w-5" />}
          />
          <DashboardCard
            title="Pending Audits"
            value={stats.auditsPending}
            subtitle="Require review"
            icon={<AlertCircle className="h-5 w-5" />}
            variant="warning"
          />
          <DashboardCard
            title="Compliance Score"
            value={`${stats.complianceScore}%`}
            subtitle="Current compliance"
            icon={<TrendingUp className="h-5 w-5" />}
            variant="success"
          />
          <DashboardCard
            title="Last Audit"
            value={new Date(stats.lastAuditDate).toLocaleDateString()}
            subtitle="Most recent review"
            icon={<Calendar className="h-5 w-5" />}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Audit Logs */}
          <div className="lg:col-span-2">
            <Card className="clinical-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Recent Audit Logs</span>
                </CardTitle>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Search className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                  <Button size="sm" className="btn-clinical">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {auditLogs.map((log) => (
                    <div 
                      key={log.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-sm">{log.action}</h4>
                          <Badge className={getSeverityColor(log.severity)}>
                            {log.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {log.user} • {log.resource}
                        </p>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          <span>{new Date(log.timestamp).toLocaleString()}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Summary */}
          <div>
            <Card className="clinical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Compliance Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Data Security</span>
                    <Badge className="status-success">98%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Access Control</span>
                    <Badge className="status-success">95%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Audit Trails</span>
                    <Badge className="status-success">99%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Data Retention</span>
                    <Badge className="status-warning">87%</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Button className="w-full btn-clinical">
                    Generate Compliance Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Audit Actions */}
        <Card className="clinical-card">
          <CardHeader>
            <CardTitle>Audit & Compliance Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <FileCheck className="h-6 w-6 mb-2" />
                Review Records
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Search className="h-6 w-6 mb-2" />
                Search Logs
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Download className="h-6 w-6 mb-2" />
                Export Data
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Shield className="h-6 w-6 mb-2" />
                Security Scan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}