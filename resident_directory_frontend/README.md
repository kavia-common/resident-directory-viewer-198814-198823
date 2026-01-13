# Resident Directory (Frontend-only)

A lightweight React SPA that lets users:
- View a list of residents (local mock data bundled in the app)
- Search residents by name (case-insensitive, with match highlighting)
- View resident details in a right-side panel (desktop) or modal (mobile)

No backend calls are made and no environment variables are required.

## Getting Started

From this directory:

### Install
```bash
npm install
```

### Run (dev)
```bash
npm start
```

Open http://localhost:3000

### Test
```bash
npm test
```

## Notes

- Mock data lives in `src/data/residents.js` (40 sample records).
- Search query is stored in the URL as `?q=` (no router dependency).
- Mobile details view uses an accessible modal with ESC to close and a basic focus trap.
