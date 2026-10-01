<div align="center">

# 🚀 Synthetix AI

### AI-Powered Project Management Dashboard

A modern, responsive and elegant project management dashboard built with React and Tailwind CSS.

<br />

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
<img src="https://img.shields.io/badge/Lucide_Icons-React-F56565?style=for-the-badge" />
<img src="https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white" />

<br /><br />

<a href="#-features">Features</a>
&nbsp; • &nbsp;
<a href="#-tech-stack">Tech Stack</a>
&nbsp; • &nbsp;
<a href="#-screenshots">Screenshots</a>
&nbsp; • &nbsp;
<a href="#-installation">Installation</a>

</div>

---

## 📌 About The Project

**Synthetix AI** is a modern project management dashboard designed to help teams manage projects, tasks and team activities from a single workspace.

The dashboard provides a clean and responsive user interface with a focus on usability, productivity and modern UI design.

### 🎯 Project Goals

- Manage projects and tasks efficiently
- Monitor task progress
- Manage team members
- Provide a centralized workspace
- Create a clean and modern dashboard experience
- Support Light and Dark themes
- Build a responsive UI for different screen sizes

---

## ✨ Features

### 📊 Dashboard

- Project overview
- Total tasks statistics
- Completed tasks
- Active projects
- Team members
- Task progress section
- Team activity
- Recent activities
- Featured project section

### 📋 Task Management

- Todo tasks
- In-progress tasks
- Completed tasks
- Task cards
- Task search
- Task creation UI
- Task categories
- Task progress tracking
- Task due dates
- Team member assignment

### 👥 Team Management

- Team members
- Member activity
- Member profile
- Account information

### 💬 Chat

- Team communication interface
- Workspace based communication

### ⚙️ Settings

- Workspace settings
- User settings
- Theme preferences

### 🌓 Theme System

The application supports:

- ☀️ Light Mode
- 🌙 Dark Mode
- 💾 Theme persistence using LocalStorage

The selected theme remains active even after refreshing the page.

---

## 🎨 UI & Design

Synthetix AI uses a modern dashboard design with:

- Clean sidebar navigation
- Fixed header
- Responsive layout
- Modern cards
- Rounded UI components
- Consistent spacing
- Soft borders
- Interactive hover states
- Light/Dark theme variables
- Responsive task boards

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React | Frontend UI |
| 🎨 Tailwind CSS | Styling |
| 🧭 React Router | Application Routing |
| 🎯 Lucide React | Icons |
| ⚡ Vite | Development & Build Tool |
| 💾 LocalStorage | Theme Persistence |
| 📦 JavaScript | Application Logic |

---

## 📂 Project Structure

```text
synthetix-ai/
│
├── public/
│   └── images/
│       ├── avatar.jpg
│       ├── avatar1.jpg
│       ├── avatar2.jpg
│       └── project.jpg
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Tasks.jsx
│   │   ├── Team.jsx
│   │   ├── Chat.jsx
│   │   └── Settings.jsx
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md