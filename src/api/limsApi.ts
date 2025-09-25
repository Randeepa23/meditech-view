import axios from 'axios';
import { 
  mockUsers, 
  mockPatients, 
  mockTestOrders, 
  mockInventory, 
  mockDashboardStats 
} from './mockData';

// Create axios instance for future real API integration
const api = axios.create({
  baseURL: 'https://api.lims.example.com', // Replace with real API URL
  timeout: 10000,
});

// Mock API functions (replace with real API calls later)
export const limsApi = {
  // Authentication
  async login(email: string, password: string) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === email);
    if (user && password === 'demo123') {
      return { success: true, user };
    }
    throw new Error('Invalid credentials');
  },

  // Patients
  async getPatients() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockPatients;
  },

  async createPatient(patientData: any) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, id: `patient_${Date.now()}` };
  },

  async updatePatient(id: string, patientData: any) {
    await new Promise(resolve => setTimeout(resolve, 600));
    return { success: true };
  },

  // Test Orders
  async getTestOrders() {
    await new Promise(resolve => setTimeout(resolve, 600));
    return mockTestOrders;
  },

  async createTestOrder(orderData: any) {
    await new Promise(resolve => setTimeout(resolve, 700));
    return { success: true, id: `test_${Date.now()}` };
  },

  async updateTestOrder(id: string, orderData: any) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  },

  // Inventory
  async getInventory() {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockInventory;
  },

  async updateInventoryItem(id: string, itemData: any) {
    await new Promise(resolve => setTimeout(resolve, 600));
    return { success: true };
  },

  // Dashboard Statistics
  async getDashboardStats(role: string) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockDashboardStats[role as keyof typeof mockDashboardStats] || {};
  },

  // System Management (Admin only)
  async getUsers() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUsers;
  },

  async createUser(userData: any) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, id: `user_${Date.now()}` };
  },

  async updateUser(id: string, userData: any) {
    await new Promise(resolve => setTimeout(resolve, 600));
    return { success: true };
  },

  // Audit Trail (Auditor access)
  async getAuditLogs(filters?: any) {
    await new Promise(resolve => setTimeout(resolve, 700));
    return {
      logs: [
        {
          id: 'audit_001',
          timestamp: '2024-01-22T10:30:00Z',
          user: 'Dr. Sarah Chen',
          action: 'Test Result Updated',
          resource: 'Test Order #test_001',
          details: 'Results entered for CBC test',
        },
        {
          id: 'audit_002',
          timestamp: '2024-01-22T09:15:00Z',
          user: 'Michael Rodriguez',
          action: 'User Created',
          resource: 'User #user_new_001',
          details: 'New technician account created',
        },
      ],
      total: 2847,
    };
  },
};