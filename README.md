# 🌍 SDG Collaboration & Impact Platform

The **SDG Collaboration & Impact Platform** is a full-stack web application designed to help **Startups, NGOs, Government organizations, and Researchers** collaborate effectively on projects aligned with the **United Nations Sustainable Development Goals (SDGs)**.

Instead of using multiple tools like emails, spreadsheets, and messaging apps, this platform brings everything together into **one centralized system** for collaboration, communication, and impact tracking.

---

## 📖 Project Background

Many organizations are actively working on social and sustainability-focused projects. However, they often face common challenges such as:
- Difficulty in finding the right collaboration partners
- Lack of a single platform to manage joint projects
- Poor visibility into project progress and milestones
- No clear way to track and present impact

This project aims to solve these issues by providing a **digital collaboration hub** where organizations can easily connect, work together, and track measurable outcomes.

---

## 🎯 Project Objectives

The main objectives of this platform are:
- To simplify collaboration between different organizations
- To improve transparency in project execution
- To provide real-time communication and updates
- To support SDG-aligned planning and progress tracking
- To demonstrate the use of AI/ML in a practical and explainable way

---

## ✨ Platform Features

### 🔹 User & Organization Management
- Organizations can register and create profiles
- Users can specify their organization type (Startup, NGO, Government, Research)
- Each organization selects the SDGs they focus on
- Role-based dashboards provide a personalized experience

---

### 🔹 Project Management
- Organizations can create and publish SDG-aligned projects
- Each project includes:
  - Description
  - Selected SDGs
  - Required resources or expertise
  - Expected outcomes
- Projects are visible to other organizations on the platform

---

### 🔹 Collaboration System
- Organizations can send collaboration requests for projects
- Project owners can approve or reject requests
- Once approved, collaborators get access to a shared workspace
- All collaboration activity is logged for transparency

---

### ⚡ Real-Time Features
- Live chat within project collaboration spaces
- Instant notifications for:
  - Collaboration requests
  - Request approvals or rejections
  - New messages
  - Milestone updates
- Dashboards update dynamically without manual refresh

These real-time features make the platform feel interactive and responsive.

---

### 🎯 Milestone & Impact Tracking
- Each project is divided into milestones
- Milestones can be marked as:
  - Pending
  - In Progress
  - Completed
- A progress indicator shows overall project completion
- This helps track SDG-related impact in a structured way

---

### 📜 Transparency Timeline
- Every important action is recorded in an activity timeline
- Examples:
  - Project creation
  - Partner joining
  - Milestone completion
  - Resource updates
- This improves accountability and trust among collaborators

---

## 🤖 AI / ML Integration (Moderate & Explainable)

The platform includes a **Partner Recommendation System** to help users find suitable collaborators.

### How it works:
- Project details and organization profiles are converted into text-based feature data
- Important terms are weighted using **TF-IDF (Term Frequency–Inverse Document Frequency)**
- **Cosine similarity** is used to calculate how closely an organization matches a project
- The system ranks organizations based on match score

### Why this approach:
- Easy to understand and explain
- No heavy training or complex models
- Scalable for future improvement
- Suitable for real-world use

This AI feature helps users save time and make informed collaboration decisions.

---

## 🌱 Social Impact

This platform supports social good by:
- Encouraging cross-sector collaboration
- Aligning projects with global SDGs
- Improving visibility of sustainability initiatives
- Supporting transparent and measurable impact tracking

---

## 🛠 Technology Stack

### Frontend
- Next.js
- HTML, CSS, JavaScript
- Deployed on **Netlify**

### Backend
- Django
- Django REST Framework
- Django Channels for real-time communication
- Deployed on **Railway**

### Database
- PostgreSQL (production)
- SQLite / MySQL (local development)

### AI / ML
- Python
- scikit-learn (TF-IDF, cosine similarity)

---

## ☁️ Deployment Architecture


