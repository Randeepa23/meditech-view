import { create } from 'zustand';

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  phone: string;
  email: string;
  address: string;
  medicalRecord: string;
  createdAt: string;
}

export interface TestOrder {
  id: string;
  patientId: string;
  patientName: string;
  testType: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'normal' | 'urgent' | 'stat';
  orderDate: string;
  completedDate?: string;
  results?: string;
  technician?: string;
  notes?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  minimumStock: number;
  unit: string;
  supplier: string;
  lastRestocked: string;
  expiryDate?: string;
}

interface LimsState {
  patients: Patient[];
  testOrders: TestOrder[];
  inventory: InventoryItem[];
  addPatient: (patient: Omit<Patient, 'id' | 'createdAt'>) => void;
  updatePatient: (id: string, patient: Partial<Patient>) => void;
  addTestOrder: (order: Omit<TestOrder, 'id' | 'orderDate'>) => void;
  updateTestOrder: (id: string, order: Partial<TestOrder>) => void;
  updateInventoryItem: (id: string, item: Partial<InventoryItem>) => void;
}

export const useLimsStore = create<LimsState>((set, get) => ({
  patients: [],
  testOrders: [],
  inventory: [],
  
  addPatient: (patientData) => {
    const patient: Patient = {
      ...patientData,
      id: `patient_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    set(state => ({ patients: [...state.patients, patient] }));
  },
  
  updatePatient: (id, patientData) => {
    set(state => ({
      patients: state.patients.map(p => 
        p.id === id ? { ...p, ...patientData } : p
      )
    }));
  },
  
  addTestOrder: (orderData) => {
    const order: TestOrder = {
      ...orderData,
      id: `test_${Date.now()}`,
      orderDate: new Date().toISOString(),
    };
    set(state => ({ testOrders: [...state.testOrders, order] }));
  },
  
  updateTestOrder: (id, orderData) => {
    set(state => ({
      testOrders: state.testOrders.map(o => 
        o.id === id ? { ...o, ...orderData } : o
      )
    }));
  },
  
  updateInventoryItem: (id, itemData) => {
    set(state => ({
      inventory: state.inventory.map(i => 
        i.id === id ? { ...i, ...itemData } : i
      )
    }));
  },
}));