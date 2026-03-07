<p align="center">
  <img src="https://img.shields.io/badge/NirogSathi-AI%20Healthcare%20Platform-blue?style=for-the-badge" />
</p>

<h1 align="center">🏥 NirogSathi — AI Powered Healthcare Platform</h1>

<p align="center">
  A production-grade AI-driven healthcare ecosystem connecting <b>patients, doctors, and healthcare providers</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-green"/>
  <img src="https://img.shields.io/badge/Express.js-API-lightgrey"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen"/>
  <img src="https://img.shields.io/badge/Redux-Toolkit-purple"/>
  <img src="https://img.shields.io/badge/AI-Powered-blueviolet"/>
  <img src="https://img.shields.io/badge/Machine%20Learning-Enabled-orange"/>
  <img src="https://img.shields.io/badge/Telemedicine-Healthcare-blue"/>
  <img src="https://img.shields.io/badge/Digital-Healthcare-success"/>
  <img src="https://img.shields.io/badge/Auth-JWT-yellow"/>
  <img src="https://img.shields.io/badge/Security-RBAC-red"/>
  <img src="https://img.shields.io/badge/Security-reCAPTCHA-green"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow"/>
  <img src="https://img.shields.io/badge/Status-Production--Ready-success"/>
</p>

---

## 🌐 Live Demo

🚀 **Website:** [https://www.nirogsathi.com](https://www.nirogsathi.com)

---

## 📌 Project Overview

**NirogSathi** is an **AI-ready digital healthcare platform** designed to modernize healthcare services through intelligent automation and scalable architecture.

### Platform Capabilities

- Patient appointment booking
- Doctor consultations
- Digital medical records
- Prescription management
- Healthcare analytics
- Admin monitoring dashboards

Built with **future AI integration capabilities** such as predictive healthcare analytics and automated recommendations.

---

## 🌍 Problem Statement

Traditional healthcare systems face critical challenges:

- Manual appointment coordination
- Fragmented patient records
- Inefficient doctor–patient communication
- Lack of intelligent healthcare insights
- Administrative workflow inefficiencies
- Poorly scalable infrastructure

---

## 💡 Solution

NirogSathi introduces a **centralized healthcare management system** that enables:

- Intelligent appointment scheduling
- Digital medical records management
- Automated prescription handling
- Role-based healthcare dashboards
- Real-time system monitoring
- AI-ready healthcare analytics

---

## ⭐ Key Features

### 🧑‍⚕️ Patient Features

- Appointment booking
- Appointment tracking
- Medical history access
- Prescription downloads
- Doctor reviews & ratings
- Secure profile management

### 👨‍⚕️ Doctor Features

- Patient management dashboard
- Appointment scheduling
- Digital prescription generation
- Medical record access
- Health blog publishing
- Specialization management

### 🛠 Admin Features

- Platform analytics dashboard
- Doctor approval workflow
- User management
- Blog moderation
- Platform monitoring
- Healthcare services management

---

## 🧠 AI Ready Architecture

The system is designed for **future AI integration**, including:

- AI health insights engine
- Predictive patient analytics
- Symptom-based recommendations
- Intelligent appointment suggestions
- Healthcare trend analysis
- Doctor decision support systems

---

## 🏗 System Architecture

```
Client Layer
React + Redux Toolkit
        ↓
API Layer
Axios / RTK Query
        ↓
Backend
Node.js + Express.js
        ↓
Database
MongoDB
```

### Architecture Principles

- Scalability
- Maintainability
- Performance optimization
- Modular development

---

## ⭐ Why This Project Stands Out

- Production-style architecture
- Role-based system design
- AI-ready platform architecture
- End-to-end healthcare workflow implementation
- Secure authentication and authorization
- Scalable frontend architecture
- Enterprise-level UI design system
- Real-world problem solving approach

This project demonstrates system design thinking, scalable architecture, and product-level development skills.

---

## ⚡ Tech Stack

### Frontend

- **React 18.2.0** - Modern UI library
- **Redux Toolkit** - State management
- **React Router DOM v6** - Client-side routing
- **Ant Design v5** - UI component library
- **React Bootstrap** - Bootstrap components
- **Axios** - HTTP client
- **Styled Components** - CSS-in-JS styling

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database

### AI & Machine Learning

- **ML Models** - Health insights and recommendations
- **Predictive Analytics** - Appointment optimization

### UI & Animation

- **Lottie React** - Animation library
- **React Type Animation** - Typing effect
- **React Vertical Timeline** - Timeline component
- **Swiper** - Carousel/slider
- **React Star Ratings** - Rating component
- **React Hot Toast** - Notifications

### Authentication & Security

- **JWT Authentication** - Token-based auth
- **JWT Decode** - Token parsing
- **Role-based Access Control (RBAC)** - Permission management
- **Google reCAPTCHA** - Bot protection

### Utilities

- **Moment.js** - Date/time handling
- **React Hook Form** - Form state management
- **React to Print** - Print functionality
- **UUID** - Unique ID generation
- **React GA4** - Google Analytics
- **Dotenv** - Environment variable management

---

## 🤖 Core Features & Capabilities

### AI/ML Powered Features

- **Health Insights**: Intelligent health recommendations based on medical history
- **Predictive Analytics**: Appointment scheduling optimization
- **Smart Matching**: AI-powered doctor-patient matching based on specialization
- **Health Metrics**: Automated health data analysis and tracking

### Core Functionality

- **Appointment Booking & Scheduling**: Streamlined booking with real-time availability
- **Role-Based Dashboards**: Customized views for patients, doctors, and admins
- **Email Notifications**: Automated appointment reminders and important updates
- **Prescription Management**: Digital prescription handling and tracking
- **Patient Reviews & Ratings**: Community feedback system for doctors
- **Blog & Health Articles**: Educational content from healthcare professionals

---

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About/          # About section components
│   ├── Admin/          # Admin dashboard components
│   ├── Appointment/    # Appointment-related components
│   ├── Blog/           # Blog feature components
│   ├── Booking/        # Booking/checkout components
│   ├── Doctor/         # Doctor dashboard components
│   ├── DoctorHome/     # Doctor home page
│   ├── Home/           # Home page components
│   ├── Login/          # Authentication components
│   ├── Patient/        # Patient dashboard
│   ├── services/       # Service listing components
│   ├── Shared/         # Shared/common components
│   ├── TrackAppointment/ # Appointment tracking
│   └── UI/             # UI-only components
├── pages/              # Page-level components
├── redux/              # State management
│   ├── api/           # RTK Query definitions
│   ├── feature/       # Redux slices
│   └── hooks/         # Custom Redux hooks
├── apis/               # API integration layer
├── services/           # Business logic services
├── helpers/            # Configurations and utilities
│   ├── axios/         # Axios configuration
│   └── config/        # Configuration files
├── utils/              # Utility functions
│   └── hooks/         # Custom React hooks
├── stylesheets/        # Global and component styles
├── images/             # Image assets and icons
├── animations/         # Lottie animation files
├── constant/           # Application constants
└── App.jsx             # Main application component
```

### Architecture Follows

- Modular design principles
- Scalable component structure
- Clear separation of concerns
- Reusable components pattern

---

## 📸 Screenshots

### Home Page

(Add screenshot here)

### Doctor Dashboard

(Add screenshot here)

### Patient Portal

(Add screenshot here)

---

## 🔐 Authentication & Authorization

The application uses JWT (JSON Web Tokens) for authentication with role-based access control:

### User Roles

- **Admin** - Full system access
- **Doctor** - Doctor-specific features and dashboards
- **Patient** - Patient-specific appointments and profiles

### Security Features

- JWT-based authentication
- Role-based access control
- Protected routes
- Secure token validation

---

## 📱 Responsive Design

### Supported Devices

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop browsers (1024px+)

### Features

- Mobile-first design
- Cross-browser compatibility
- Optimized UI performance

---

## 🚀 Performance Optimizations

- Lazy-loaded routes
- Optimized bundle size with code splitting
- RTK Query API caching
- Efficient Redux state management
- Component reusability
- Caching strategies for API responses

---

## 📋 Prerequisites

Before running the project ensure:

- Node.js ≥ 14
- npm ≥ 6
- Modern web browser with JavaScript enabled

---

## 🛠 Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd nirogsathi
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create `.env` file:

```env
REACT_APP_API_URL=<your-api-url>
REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY=<your-recaptcha-key>
```

### 4. Run Development Server

```bash
npm start
```

Application runs at:

```
http://localhost:3000
```

---

## 🌐 API Integration

The application communicates with a backend API via Axios. API endpoints are configured in:

- `src/apis/` - Individual API modules
- `src/redux/api/` - RTK Query definitions
- `src/helpers/axios/` - Axios configuration

---

## 🎨 Styling

The project uses:

- **Styled Components** - For component-level styling
- **CSS Modules** - For stylesheet organization in `src/stylesheets/`
- **Ant Design Theming** - For consistent design system
- **Bootstrap Utilities** - For responsive layouts

---

## 📚 Available Scripts

### Development

```bash
npm start
```

Runs the app in development mode at http://localhost:3000

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder

### Testing

```bash
npm test
```

Launches the test runner in interactive watch mode

### Eject (Advanced)

```bash
npm run eject
```

**Note:** This is a one-way operation. Once you eject, you can't go back!

---

## 🐛 Troubleshooting

### Common Issues

**Dependencies installation fails:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use:**

```bash
PORT=3001 npm start
```

**API connectivity issues:**

- Verify `.env` configuration
- Check backend server is running
- Verify API_URL is correct

---

## 📊 Real World Impact

This project demonstrates:

- Enterprise-level application development
- Scalable frontend engineering
- Healthcare workflow modeling
- AI-ready system architecture
- Production-grade system design

---

## 🚀 Future Roadmap

- AI diagnosis assistant
- Video consultation feature with telemedicine
- Advanced AI-powered health diagnostics
- AI-powered appointment recommendations
- Predictive health analytics
- Multi-language support
- Mobile app (React Native)
- Wearable health tracking
- Enhanced health tracking with wearables integration
- Machine learning models for disease prediction
- Advanced analytics dashboard

---

## 🤝 Contributing

### How to Contribute

1. Fork repository

2. Create feature branch
   ```bash
   git checkout -b feature/new-feature
   ```

3. Commit changes
   ```bash
   git commit -m "Add feature"
   ```

4. Push branch
   ```bash
   git push origin feature/new-feature
   ```

5. Open Pull Request

### Guidelines

- Follow the existing code style and structure
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation if needed

---

## 💡 Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Contact the development team
- Check existing documentation

---

## 📝 License

This project is licensed under the **MIT License**.

---

## ❤️ Built With Passion

**NirogSathi Team**

Empowering the future of **AI-driven digital healthcare systems**.

---

<p align="center">
  Made with ❤️ for better healthcare
</p>
