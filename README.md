# TooDoo
The Ultimate To-Do List Web App

## Tech Stack

This is a modern React-based web application built with:

- **React 19** - Component-driven UI development
- **Vite** - Fast development server and build tool
- **Zustand** - Lightweight state management
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint & Prettier** - Code quality and formatting

## Features

✨ **Interactive Task Management** (Coming Soon)
- Add new tasks quickly with keyboard shortcuts
- Mark tasks as complete/incomplete
- Delete individual tasks
- Organize tasks by priority and category

📅 **Calendar View**
- View tasks organized by date
- Schedule tasks for specific days

🎯 **Focus Mode**
- Concentrate on one task at a time
- Minimize distractions

🎨 **Modern UI**
- Clean, responsive design that works on all devices
- Beautiful gradient background with TailwindCSS
- Smooth animations and transitions

## Project Structure

```
toodoo/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── CalendarView.jsx
│   ├── pages/          # Route-level components
│   │   ├── Home.jsx
│   │   ├── Calendar.jsx
│   │   └── Focus.jsx
│   ├── state/          # Zustand stores
│   │   └── taskStore.js
│   ├── services/       # API calls and backend interaction
│   │   └── api.js
│   ├── utils/          # Helper functions
│   │   └── helpers.js
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Application entry point
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anonymousdil/toodoo.git
   cd toodoo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Development

The app uses:
- **Vite** for fast hot module replacement during development
- **ESLint** for code quality checks
- **Prettier** for consistent code formatting
- **TailwindCSS** for styling with utility classes

## Browser Compatibility

Works with all modern browsers that support:
- ES6+ JavaScript
- CSS3 (Grid, Flexbox)
- React 19

## License

This project is open source and available for personal and educational use.
