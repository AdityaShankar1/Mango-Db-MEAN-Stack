# MangoDb-MEAN-Project:

# 🥭 Mangodb: Full-Stack Recipe Compendium

Mangodb is a modern CRUD application showcasing a containerized **MEAN stack** with professional-grade features like Glassmorphism UI, Admin State Management, and Observability.

---

## 🎯 Objectives
- **DevOps Ready**: Full containerization for consistent environments.  
- **Accessible UX**: WCAG-compliant design with semantic HTML5 & high-contrast Glassmorphism.  
- **Resilient UI**: Loading states & error handling for real-world latency.  
- **Observability**: Request logging via Morgan middleware.  

---

## 🛠️ Tech Stack
- **Frontend**: Angular 17+ (Standalone Components, Signals-ready)  
- **Backend**: Node.js & Express.js  
- **Database**: MongoDB (NoSQL)  
- **Testing**: Jest & Supertest (integration tests)  
- **Environment**: Docker & Docker Compose  

---

## 🚀 Getting Started
### Prerequisites
- Docker Desktop  
- Git  

### Run
```bash
docker-compose up --build
```

## 🔒 Admin Features

•  Read-Only Mode: Browse recipes.
•  Admin Mode: (Demo password: mango123) Create & delete recipes via protected UI state.

## 🧪 Testing

Run integration tests:
```bash
cd backend
npm test
```

## 📂 Project Structure

├── backend/
│   ├── test.js        # Integration tests
│   ├── server.js      # Express logic & seeding
│   └── Dockerfile     # Node-Alpine build
├── frontend/
│   ├── src/app/       # Angular components
│   ├── src/assets/    # WCAG-compliant assets
│   └── Dockerfile     # Multi-stage Nginx build
└── docker-compose.yml # Infrastructure as Code

## 💡 Key Takeaways

•  Containerization: Eliminates "works on my machine" issues.
•  Design Patterns: Z-pattern layout improves readability & engagement.
•  Clean Code: Angular standalone components reduce boilerplate.

## 📷 Output Screenshots:

### Visitor Mode:

<img width="1470" height="956" alt="Screenshot 2025-12-31 at 6 13 21 PM" src="https://github.com/user-attachments/assets/7e063874-f36f-459f-a397-b7a25709f5b1" />

<img width="1470" height="956" alt="Screenshot 2025-12-31 at 6 13 30 PM" src="https://github.com/user-attachments/assets/a588a9a3-381d-419d-849d-c8edd75bee73" />

### Admin Mode:

<img width="1470" height="956" alt="Screenshot 2025-12-31 at 6 15 01 PM" src="https://github.com/user-attachments/assets/0e082083-9649-4116-9de4-0d0e0db1f4bf" />
