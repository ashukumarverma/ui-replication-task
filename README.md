## 🚀 Overview

This project replicates a Figma design for a settings page with high fidelity, focusing on:

- Clean React component structure
- Responsive layout (mobile, tablet, desktop)
- Fixed sidebar navigation
- Tabbed settings navigation
- Accessible, semantic, and maintainable code
- No UI libraries (pure TailwindCSS)

---

## ✨ Features

- **Sidebar**: Fixed on desktop, overlays on mobile, with smooth transitions and a hamburger trigger.
- **Tabbed Navigation**: Settings tabs at the top for easy section switching.
- **Personal Info Form**: Name, email, photo upload, password change, role, country, mobile, timezone, and bio fields.
- **Responsive Design**: Fully responsive, touch-friendly on all breakpoints.
- **Performance**: Optimized layout, no unnecessary re-renders, and no unused code.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (with Vite)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📁 Folder Structure

```
ui-replication-task/
├── public/
│   └── assets
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── SettingsPage.jsx
│   │   ├── SettingsTabs.jsx
│   │   └── PersonalInfoForm.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚠️ This is only UI no backend integration

- No real backend/API integration (all form fields are static/dummy).
- File upload and tab switching are UI-only (no real upload or tab content for non-primary tabs).

---
