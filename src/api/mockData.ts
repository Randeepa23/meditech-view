import { Patient, TestOrder, InventoryItem } from '@/store/limsStore';
import { UserRole } from '@/store/authStore';

// Mock Users for demonstration
export const mockUsers = [
  {
    id: 'tech_001',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@lims.lab',
    role: 'technician' as UserRole,
    department: 'Clinical Laboratory',
  },
  {
    id: 'admin_001',
    name: 'Michael Rodriguez',
    email: 'michael.rodriguez@lims.lab',
    role: 'admin' as UserRole,
    department: 'Administration',
  },
  {
    id: 'audit_001',
    name: 'Jennifer Park',
    email: 'jennifer.park@lims.lab',
    role: 'auditor' as UserRole,
    department: 'Quality Assurance',
  },
];

// Mock Patients
export const mockPatients: Patient[] = [
  {
    id: 'patient_001',
    name: 'John Anderson',
    dateOfBirth: '1985-03-15',
    gender: 'male',
    phone: '+1-555-0123',
    email: 'john.anderson@email.com',
    address: '123 Main St, City, State 12345',
    medicalRecord: 'MR001234',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'patient_002',
    name: 'Maria Garcia',
    dateOfBirth: '1990-07-22',
    gender: 'female',
    phone: '+1-555-0124',
    email: 'maria.garcia@email.com',
    address: '456 Oak Ave, City, State 12345',
    medicalRecord: 'MR001235',
    createdAt: '2024-01-16T09:15:00Z',
  },
  {
    id: 'patient_003',
    name: 'Robert Johnson',
    dateOfBirth: '1978-11-08',
    gender: 'male',
    phone: '+1-555-0125',
    email: 'robert.johnson@email.com',
    address: '789 Pine St, City, State 12345',
    medicalRecord: 'MR001236',
    createdAt: '2024-01-17T14:45:00Z',
  },
];

// Mock Test Orders
export const mockTestOrders: TestOrder[] = [
  {
    id: 'test_001',
    patientId: 'patient_001',
    patientName: 'John Anderson',
    testType: 'Complete Blood Count (CBC)',
    status: 'completed',
    priority: 'normal',
    orderDate: '2024-01-20T08:00:00Z',
    completedDate: '2024-01-20T14:30:00Z',
    results: 'All values within normal ranges',
    technician: 'Dr. Sarah Chen',
    notes: 'Patient fasted for 12 hours prior to test',
  },
  {
    id: 'test_002',
    patientId: 'patient_002',
    patientName: 'Maria Garcia',
    testType: 'Lipid Panel',
    status: 'in-progress',
    priority: 'normal',
    orderDate: '2024-01-21T09:30:00Z',
    technician: 'Dr. Sarah Chen',
    notes: 'Patient reported taking medication',
  },
  {
    id: 'test_003',
    patientId: 'patient_003',
    patientName: 'Robert Johnson',
    testType: 'Glucose Tolerance Test',
    status: 'pending',
    priority: 'urgent',
    orderDate: '2024-01-22T07:15:00Z',
    notes: 'Requires 3-hour monitoring',
  },
];

// Mock Inventory Items
export const mockInventory: InventoryItem[] = [
  {
    id: 'inv_001',
    name: 'Blood Collection Tubes',
    category: 'Consumables',
    currentStock: 150,
    minimumStock: 50,
    unit: 'boxes',
    supplier: 'MedSupply Co.',
    lastRestocked: '2024-01-15T00:00:00Z',
    expiryDate: '2025-06-30T00:00:00Z',
  },
  {
    id: 'inv_002',
    name: 'Reagent Kit - CBC',
    category: 'Reagents',
    currentStock: 25,
    minimumStock: 30,
    unit: 'kits',
    supplier: 'LabChem Industries',
    lastRestocked: '2024-01-10T00:00:00Z',
    expiryDate: '2024-12-31T00:00:00Z',
  },
  {
    id: 'inv_003',
    name: 'Centrifuge Tubes',
    category: 'Consumables',
    currentStock: 200,
    minimumStock: 100,
    unit: 'packs',
    supplier: 'Scientific Solutions',
    lastRestocked: '2024-01-18T00:00:00Z',
    expiryDate: '2026-01-31T00:00:00Z',
  },
];

// Dashboard Statistics
export const mockDashboardStats = {
  technician: {
    pendingSamples: 12,
    testsInProgress: 8,
    completedToday: 24,
    lowStockAlerts: 3,
  },
  admin: {
    totalUsers: 45,
    activeTests: 156,
    monthlyRevenue: 45780,
    systemHealth: 98.5,
  },
  auditor: {
    totalRecords: 2847,
    auditsPending: 5,
    complianceScore: 96.2,
    lastAuditDate: '2024-01-15T00:00:00Z',
  },
};