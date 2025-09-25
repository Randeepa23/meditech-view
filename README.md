# LIMS - Laboratory Information Management System

A professional, modern Laboratory Information Management System built with React, TypeScript, and Tailwind CSS. This application provides role-based interfaces for laboratory technicians, administrators, and auditors to efficiently manage laboratory operations.

![LIMS Healthcare](https://img.shields.io/badge/LIMS-Healthcare-blue?style=flat-square)
![React](https://img.shields.io/badge/React-18+-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss)

## 🏥 Features

### 🔬 Laboratory Technician Interface
- **Dashboard**: Overview of pending samples, tests in progress, and completed work
- **Patient Management**: Register new patients and lookup existing records
- **Test Processing**: Order tests, enter results, and manage sample workflows
- **Inventory Tracking**: Monitor reagents and consumables stock levels

### ⚙️ Administrator Interface
- **System Overview**: Monitor system health, user activity, and performance metrics
- **User Management**: Add, edit, and manage user accounts and roles
- **Analytics & Reporting**: Generate reports and view system statistics
- **Configuration**: Manage system settings and configurations

### 🛡️ Auditor Interface
- **Compliance Dashboard**: Review compliance scores and audit status
- **Audit Trails**: Access comprehensive logs of all system activities
- **Data Access**: Read-only access to historical records and test results
- **Report Generation**: Export compliance and audit reports

## 🛠️ Technology Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with custom clinical design system
- **Components**: Shadcn/ui for professional UI components
- **State Management**: Zustand for efficient state management
- **Routing**: React Router for seamless navigation
- **API**: Axios for HTTP requests (currently using mock data)
- **Build Tool**: Vite for fast development and building

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm))

### Installation

1. **Clone the repository**:
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:8080`

## 🔐 Demo Access

The application includes demo accounts for testing all user roles:

### Quick Demo Login
- **Technician**: `sarah.chen@lims.lab` (password: `demo123`)
- **Administrator**: `michael.rodriguez@lims.lab` (password: `demo123`)
- **Auditor**: `jennifer.park@lims.lab` (password: `demo123`)

Or use the "Quick Demo Access" buttons on the landing page for instant role switching.

## 📱 Mobile Responsive Design

The application is built with a mobile-first approach and provides excellent user experience across all device sizes:

- **Mobile (320px+)**: Optimized for smartphones with touch-friendly interfaces
- **Tablet (768px+)**: Enhanced layouts for tablets with improved navigation
- **Desktop (1024px+)**: Full-featured interface with comprehensive dashboards

## 🎨 Design System

The application features a professional clinical design system:

- **Color Palette**: Medical blues with professional gradients
- **Typography**: Inter font family for maximum readability
- **Components**: Custom clinical variants for all UI elements
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG compliant with proper contrast ratios

## 📁 Project Structure

```
src/
├── api/           # Mock API services and data
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Main application pages
├── store/         # Zustand state management
└── lib/           # Utility functions
```

## 🔄 State Management

The application uses Zustand for state management with the following stores:

- **authStore**: User authentication and role management
- **limsStore**: Laboratory data (patients, tests, inventory)

## 📊 Mock Data

Currently using comprehensive mock data for demonstration:

- **Patients**: Sample patient records with medical information
- **Test Orders**: Various test types with different statuses and priorities
- **Inventory**: Laboratory supplies with stock levels and expiry dates
- **Users**: Demo accounts for all user roles
- **Audit Logs**: System activity logs for compliance tracking

## 🔮 Future Enhancements

- **Real API Integration**: Connect to actual LIMS backend services
- **Advanced Analytics**: Comprehensive reporting and data visualization
- **Barcode Scanning**: Sample tracking with barcode/QR code support
- **Notifications**: Real-time alerts and system notifications
- **Document Management**: File uploads and document handling
- **Integration**: Connect with laboratory equipment and external systems

## 🚀 Deployment

### Using Lovable (Recommended)

1. Click the "Publish" button in the Lovable interface
2. Your app will be deployed automatically

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🤝 Contributing

This project follows modern React development practices:

- **Code Style**: ESLint and TypeScript for code quality
- **Component Design**: Modular, reusable components
- **Type Safety**: Comprehensive TypeScript coverage
- **Performance**: Optimized for fast loading and smooth interactions

## 📄 License

This project is part of a healthcare technology demonstration and follows professional development standards.

## 🆘 Support

For questions about extending this LIMS system or implementing additional features, refer to the code comments and component documentation throughout the codebase.

---

**Built with ❤️ for healthcare professionals and laboratory excellence.**