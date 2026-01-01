# TooDoo
The Ultimate To-Do List website

## Features

### ✨ Core Task Management
- **Add Tasks**: Quickly add new tasks with keyboard shortcuts (Enter key) or button click
- **Task Completion**: Mark tasks as complete/incomplete with checkbox toggles
- **Delete Tasks**: Remove individual tasks or bulk delete all completed tasks
- **Edit Tasks**: Modify task title, description, and due date inline

### 📅 Due Dates & Overdue Detection
- **Due Date Support**: Set optional due dates when creating or editing tasks
- **Overdue Detection**: Tasks with past due dates are automatically highlighted with a red background
- **Visual Indicators**: See "Today" and "Overdue!" labels on task cards

### 📝 Task Descriptions
- Add detailed descriptions to tasks to provide context
- Descriptions displayed in italics below task titles
- Optional field - works great for complex tasks

### 📂 Multiple Lists
Organize tasks into different categories:
- **College** - Academic and coursework tasks
- **Study** - Learning and study materials
- **Career** - Professional and work-related tasks
- **Music** - Music practice and projects
- **Misc** - Everything else
- **All** - View all tasks across categories

### 🔄 Drag-and-Drop Reordering
- Drag tasks to reorder them within a list
- Visual feedback during dragging
- Changes saved automatically to localStorage

### 🔍 Search and Filters
- **Search**: Find tasks by searching in task titles and descriptions
- **Filter Options**:
  - **All**: Show all tasks
  - **Active**: Show only incomplete tasks
  - **Completed**: Show only completed tasks
  - **Overdue**: Show only overdue tasks

### 📅 Calendar View
- Visual calendar showing tasks by their due dates
- Current day highlighted
- Click dates to see tasks scheduled for that day
- Monthly view with task counts per day

### 📊 Kanban View Mode
- Three-column board: **To Do**, **In Progress**, **Done**
- Move tasks between columns with arrow buttons
- Visual task management inspired by agile methodologies
- Great for workflow visualization

### ⏱️ Pomodoro Timer
- Built-in 25-minute Pomodoro timer
- Start, pause, and reset controls
- Audio notification when session completes
- Helps maintain focus on tasks

### 📈 Progress Bars
- **Overall Progress**: Visual bar showing completion percentage
- Updates in real-time as tasks are completed
- Percentage display on progress bar
- Motivates task completion

### 🎨 Smooth Animations
- Slide-in animations when tasks are added
- Fade effects for better user experience
- Smooth transitions between views
- Responsive hover effects

### ✨ Hover Animations
- Tasks lift and shift on hover
- Buttons scale and highlight
- Interactive feedback on all clickable elements
- Enhanced visual interactivity

### 🌓 Dark Mode & Light Mode Toggle
- Toggle between dark and light themes
- Theme preference saved to localStorage
- Smooth color transitions
- Easy-to-access theme switcher in header
- Reduces eye strain in low-light environments

### 📊 Real-time Statistics
- Total task count
- Completed task count
- Pending task count
- Updates automatically with every change

### 💾 Persistent Storage
- All tasks saved automatically to browser localStorage
- Tasks persist across browser sessions
- Theme preference saved
- No data loss on page refresh

### 🎨 Minimalist UI
- Clean, responsive design that works on all devices
- Modern black and white theme (with dark mode)
- Intuitive and distraction-free interface
- Mobile-friendly responsive layout

## Getting Started

### Opening the Application

Simply open `index.html` in any modern web browser:

1. **Directly**: Double-click the `index.html` file
2. **Via HTTP Server**: For best results, serve the files using a local web server

   Using Python:
   ```bash
   python3 -m http.server 8080
   ```
   Then open http://localhost:8080 in your browser.

   Using Node.js:
   ```bash
   npx http-server -p 8080
   ```

### Usage Guide

#### Adding Tasks
1. Type your task title in the main input field
2. (Optional) Add a detailed description in the description field
3. (Optional) Select a due date from the date picker
4. (Optional) Choose a list category from the dropdown
5. Press Enter or click "Add Task"

#### Managing Tasks
- **Complete a Task**: Click the checkbox next to the task
- **Edit a Task**: Click the "Edit" button to modify title, description, or due date
- **Delete a Task**: Click the "Delete" button to remove a task
- **Reorder Tasks**: Drag and drop tasks to reorder them
- **Move Tasks** (Kanban): Use arrow buttons to move tasks between workflow stages

#### Organizing Tasks
- **Switch Lists**: Click list tabs at the top to filter by category
- **Search**: Type in the search box to find specific tasks
- **Filter**: Use filter buttons to show all, active, completed, or overdue tasks
- **Change View**: Switch between List, Calendar, and Kanban views

#### Using the Pomodoro Timer
1. Click "▶ Start" to begin a 25-minute focus session
2. Click "⏸ Pause" to pause the timer
3. Click "↻ Reset" to reset the timer to 25:00
4. An alert will notify you when the session completes

#### Switching Themes
- Click the 🌓 button in the top-right corner to toggle between light and dark modes

#### Clearing Completed Tasks
- Click "Clear Completed" at the bottom to remove all finished tasks
- Requires confirmation before deletion

## Files

- `index.html` - Main HTML structure with all UI components
- `style.css` - Comprehensive styling with dark/light mode support
- `script.js` - Interactive functionality, view management, and localStorage handling

## Browser Compatibility

Works with all modern browsers that support:
- HTML5
- CSS3 (Grid, Flexbox, CSS Variables, Animations)
- ES6 JavaScript
- localStorage API
- CSS Custom Properties (for theming)

Tested on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Features Summary

| Feature | Description | Status |
|---------|-------------|--------|
| Due Dates | Optional date picker for tasks | ✅ Implemented |
| Task Descriptions | Add detailed context to tasks | ✅ Implemented |
| Overdue Detection | Automatic highlighting of overdue tasks | ✅ Implemented |
| Multiple Lists | 6 categories: college, study, career, music, misc, all | ✅ Implemented |
| Drag-and-Drop | Reorder tasks with drag and drop | ✅ Implemented |
| Search & Filters | Search by text and filter by status | ✅ Implemented |
| Calendar View | Monthly calendar with task visualization | ✅ Implemented |
| Kanban View | Three-column workflow board | ✅ Implemented |
| Pomodoro Timer | 25-minute focus timer | ✅ Implemented |
| Progress Bars | Visual completion indicators | ✅ Implemented |
| Smooth Animations | Enhanced transitions and effects | ✅ Implemented |
| Hover Animations | Interactive hover effects | ✅ Implemented |
| Dark/Light Mode | Theme toggle with persistence | ✅ Implemented |

## Keyboard Shortcuts

- **Enter**: Add task (when in task input field)
- **Tab**: Navigate between input fields
- **Click & Drag**: Reorder tasks in list view

## Tips for Best Experience

1. **Use Due Dates** for time-sensitive tasks to leverage overdue detection
2. **Add Descriptions** to complex tasks for better context
3. **Organize with Lists** to keep different areas of life separate
4. **Try Kanban View** for workflow management and visual progress tracking
5. **Use Pomodoro Timer** when focusing on a specific task
6. **Enable Dark Mode** for comfortable nighttime use
7. **Search Regularly** to quickly find specific tasks
8. **Use Calendar View** to plan your week ahead

## Local Storage

All data is stored in your browser's localStorage under the key `toodoo-tasks`. To backup your tasks:

1. Open browser Developer Tools (F12)
2. Go to Application/Storage → Local Storage
3. Find the `toodoo-tasks` key
4. Copy the value to save your tasks

To restore tasks, paste the saved value back into localStorage.

## Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- No analytics or tracking
- Your tasks stay private

## License

This project is open source and available for personal and educational use.
