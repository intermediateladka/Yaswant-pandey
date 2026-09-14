# Yaswant Code 🚀

> **Yaswant Code** is a high-performance, modern EdTech and developer learning management platform engineered with React 19, Tailwind CSS, Firebase Firestore cloud persistence, and direct Google Workspace integrations (Google Drive, Google Calendar, Google Chat, and Gmail).

---

## 🌟 Key Features

### 1. 🎓 Interactive Learning Management System (LMS)
- **Role-Based Experience**: Seamlessly toggle between **Student**, **Instructor**, and **Administrator** views with tailored dashboards and workflows.
- **Learning Player**: Immersive curriculum player featuring interactive code playgrounds, syntax highlighting, video lecture streams, and lesson progress tracking.
- **Quizzes & Assessments**: Real-time knowledge checks with automatic grading, feedback breakdowns, and streak counters.
- **Credential & Certifications**: Earn verifiable course certificates with custom ID badges and progress achievements.

### 2. ☁️ Google Workspace Integration Hub
- **Google Drive**: Browse course repositories, download lecture materials, and sync personal study notes directly to Google Drive via Drive v3 REST API.
- **Google Calendar**: View cohort lectures, office hours, and schedule live mentorship sessions directly onto Google Calendar via Calendar v3 API.
- **Google Chat**: Real-time cohort communication with space switching and message broadcasting via Google Chat API.
- **Gmail**: Read incoming academic communications and compose email inquiries to instructors and admission staff via Gmail API.
- **OAuth 2.0 via Google Identity Services (GIS)**: Secure client-side authentication with granular OAuth scopes.

### 3. 💾 Durable Cloud Persistence (Firebase Firestore)
- **Study Notes Sync**: Save markdown notes locally and sync them to Firestore for multi-device access.
- **Capstone Project Submissions**: Submit GitHub repositories, live demo URLs, and project portfolios to Firestore collections.
- **Security-First Firestore Rules**: Enforced default-deny authorization rules with strict schema checks and user-level isolation.

### 4. 🛠️ Built-in Developer Tools & Scratchpad
- **JSON Formatter & Validator**: Format, parse, and validate JSON payloads with syntax error detection.
- **Regex Tester**: Live regular expression tester with flags and match highlights.
- **Base64 Encoder/Decoder**: Instant string and token conversion utility.
- **JWT Inspector**: Decode JWT headers and claims safely in the browser.
- **Markdown Notes Pad**: Rich study editor with live preview, syntax tags, search filters, and export options.

### 5. 🎨 Design & Accessibility
- **Glassmorphism & Bento UI**: Ultra-refined typography, mathematical spacing rhythm, and fluid animations using `motion`.
- **Light & Dark Theme**: First-class system theme synchronization with custom high-contrast palettes.
- **Mobile-Responsive**: Tailored layout featuring bottom navigation bars, quick-action drawer sheets, and touch-friendly targets.
- **Global Command Palette**: Instant navigation and fuzzy search across courses, tools, resources, and articles (`⌘K` or search icon).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19, TypeScript |
| **Build Tooling** | Vite 6 |
| **Styling & Design** | Tailwind CSS v4, Lucide Icons, Motion |
| **Cloud Database & Auth** | Firebase Firestore & Authentication |
| **Google Integrations** | Google Identity Services (GSI), Google Drive API, Google Calendar API, Google Chat API, Gmail API |
| **Backend & Server** | Node.js, Express |

---

## 📁 Directory Structure

```text
├── index.html                    # HTML entry point with SEO metadata
├── metadata.json                 # Application configuration & capabilities
├── package.json                  # Dependencies and project scripts
├── vite.config.ts                # Vite configuration
├── firestore.rules               # Firestore security rules
├── firebase-blueprint.json       # Database schema blueprint
├── firebase-applet-config.json   # Firebase client credentials
├── public/                       # Static public assets
└── src/
    ├── main.tsx                  # Application bootstrap
    ├── App.tsx                   # Main application router and shell
    ├── components/
    │   ├── layout/               # Navbar, MobileNav, Footer
    │   ├── ui/                   # Buttons, Badges, Modals, BentoCards, GlassCards
    │   └── workspace/            # Google Workspace Hub components
    ├── context/
    │   ├── LmsContext.tsx        # LMS state (courses, user progress, theme)
    │   └── WorkspaceContext.tsx  # Google Workspace authentication & API state
    ├── lib/
    │   └── firebase.ts           # Firebase SDK initialization
    ├── services/
    │   ├── googleWorkspace.ts    # Google Drive, Calendar, Chat, & Gmail REST clients
    │   └── firebaseDb.ts         # Firestore CRUD services for notes & submissions
    ├── types/
    │   └── lms.ts                # TypeScript domain models and interfaces
    └── views/                    # Pages (Landing, Courses, Dashboard, Notes, Tools, Projects)
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **bun**

### 2. Installation
Clone the repository and install all dependencies:

```bash
npm install
```

### 3. Running Locally
Start the local development server:

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

### 4. Production Build & Linting
Validate TypeScript types and build the production bundle:

```bash
# Run type check and lint
npm run lint

# Build production assets in dist/
npm run build
```

---

## 🔐 Google Workspace & Firebase Setup

1. **Google OAuth Client ID**: Set up in Google Cloud Console with the following required OAuth scopes:
   - `drive.file`, `drive.readonly`
   - `calendar.events`, `calendar.readonly`
   - `chat.spaces.readonly`, `chat.messages.readonly`, `chat.messages.create`
   - `gmail.readonly`, `gmail.send`, `gmail.compose`
2. **Firebase Firestore**: Preconfigured with deployed `firestore.rules` for secure document storage under `/users/{userId}/notes` and `/projectSubmissions/{submissionId}`.

---

## 📄 License

This project is built for modern engineering education and interactive learning.
All rights reserved.
