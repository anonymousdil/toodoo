# TooDoo
The Ultimate To-Do List website

## Features

### 🌍 World Clock (NEW!)
- **Multiple Time Zones**: Display current time in multiple time zones simultaneously
- **Real-time Updates**: Clocks update every second automatically
- **Add/Remove Zones**: Easily add or remove time zones with a dropdown selector
- **14 Time Zones**: Includes UTC, EST, PST, GMT, IST, JST, and more
- **Clean Display**: Shows time in HH:MM:SS format with full date information
- **Persistent Storage**: Selected time zones are saved to localStorage

### 📱 Multi-Page Navigation (NEW!)
- **Separate Pages**: Organized into Tasks, Calendar, World Clock, Stats, and Settings pages
- **Clean UI**: Each feature has its own dedicated page for better focus
- **Easy Navigation**: Top navigation bar for quick access to all sections
- **Modal-based Forms**: Task creation and editing now use clean modal dialogs

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

### 📅 Calendar Page (NEW!)
- Dedicated calendar page in main navigation
- Visual calendar showing tasks by their due dates
- Current day highlighted
- Click dates to see tasks scheduled for that day
- Monthly view with task counts per day

### 📊 Kanban View Mode
- Three-column board: **To Do**, **In Progress**, **Done**
- Move tasks between columns with arrow buttons
- Visual task management inspired by agile methodologies
- Great for workflow visualization

### 📊 Statistics Page (NEW!)
- Dedicated stats page showing overview of all tasks
- **Visual Cards**: Total, Completed, Pending, and Overdue task counts
- **Progress Bar**: Visual representation of completion percentage
- **Pomodoro Timer**: Integrated 25-minute focus timer on stats page

### ⚙️ Settings Page (NEW!)
- **Theme Switcher**: Choose between Light, Dark, and Voodoo themes
- **Export/Import**: Backup and restore tasks as JSON files
- **Clear Data**: Option to reset all data
- **About Section**: App version and information

### ⏱️ Pomodoro Timer
- Built-in 25-minute Pomodoro timer
- Start, pause, and reset controls
- Audio notification when session completes
- Helps maintain focus on tasks

### 📈 Progress Bars
- **Overall Progress**: Visual bar showing completion percentage on Stats page
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
- Total task count with visual cards
- Completed task count
- Pending task count
- Overdue task count (NEW!)
- Updates automatically with every change
- Dedicated Statistics page for better overview

### 💾 Persistent Storage
- All tasks saved automatically to browser localStorage
- Time zone preferences saved
- Tasks persist across browser sessions
- Theme preference saved
- No data loss on page refresh
- Export/import functionality for backup

### 🎨 Minimalist UI
- Clean, responsive design that works on all devices
- Modern black and white theme (with dark mode)
- Intuitive and distraction-free interface
- Mobile-friendly responsive layout
- **Multi-page navigation** for organized workflow
- **Modal dialogs** for task creation and editing

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

#### Navigation
- Use the **main navigation bar** at the top to switch between pages:
  - **📋 Tasks**: Manage your to-do list
  - **📅 Calendar**: View tasks in calendar format
  - **🌍 World Clock**: Track time across multiple time zones
  - **📊 Stats**: View statistics and use the Pomodoro timer
  - **⚙️ Settings**: Customize appearance and manage data

#### Adding Tasks
1. Click the **"+ Add New Task"** button on the Tasks page
2. Fill in the task details in the modal:
   - Task title (required)
   - Description (optional)
   - Due date (optional)
   - List category
3. Click **"Save Task"** to add the task

#### Managing Tasks
- **Complete a Task**: Click the checkbox next to the task
- **Edit a Task**: Click the "Edit" button to open the edit modal
- **Delete a Task**: Click the "Delete" button to remove a task
- **Reorder Tasks**: Drag and drop tasks to reorder them
- **Move Tasks** (Kanban): Use arrow buttons to move tasks between workflow stages

#### Using the World Clock
1. Navigate to the **🌍 World Clock** page
2. Click **"+ Add Time Zone"** to open the modal
3. Select a time zone from the dropdown (14 options available)
4. Click **"Add Time Zone"** to add it to your display
5. Remove time zones by clicking the **×** button on each clock
6. All clocks update in real-time every second

#### Organizing Tasks
- **Switch Lists**: Click list tabs on the Tasks page to filter by category
- **Search**: Type in the search box to find specific tasks
- **Filter**: Use filter buttons to show all, active, completed, or overdue tasks
- **Change View**: Switch between List and Kanban views on the Tasks page

#### Using the Pomodoro Timer
1. Navigate to the **📊 Stats** page
2. Click **"▶ Start"** to begin a 25-minute focus session
3. Click **"⏸ Pause"** to pause the timer
4. Click **"↻ Reset"** to reset the timer to 25:00
5. An alert will notify you when the session completes

#### Switching Themes
1. Navigate to the **⚙️ Settings** page
2. Click on **☀️ Light**, **🌙 Dark**, or **🎨 Voodoo** to change themes
3. Theme preference is automatically saved

#### Managing Data
- **Export Tasks**: Download your tasks as a JSON file for backup
- **Import Tasks**: Upload a previously exported JSON file to restore tasks
- **Clear All Data**: Reset the app to its initial state (requires confirmation)

#### Clearing Completed Tasks
- Go to the **Tasks** page
- Click **"Clear Completed"** at the bottom to remove all finished tasks
- Requires confirmation before deletion

## Files

- `index.html` - Main HTML structure with multi-page layout and modal components
- `style.css` - Comprehensive styling with dark/light mode support and responsive design
- `script.js` - Interactive functionality, page navigation, modals, world clock, and localStorage handling

## Browser Compatibility

Works with all modern browsers that support:
- HTML5
- CSS3 (Grid, Flexbox, CSS Variables, Animations)
- ES6 JavaScript
- localStorage API
- CSS Custom Properties (for theming)
- Intl.DateTimeFormat API (for world clock time zones)

Tested on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Features Summary

| Feature | Description | Status |
|---------|-------------|--------|
| World Clock | Multiple time zones with real-time updates | ✅ Implemented |
| Multi-Page Layout | Separate pages for Tasks, Calendar, Stats, Settings | ✅ Implemented |
| Modal Dialogs | Task creation/editing in modals | ✅ Implemented |
| Due Dates | Optional date picker for tasks | ✅ Implemented |
| Task Descriptions | Add detailed context to tasks | ✅ Implemented |
| Overdue Detection | Automatic highlighting of overdue tasks | ✅ Implemented |
| Multiple Lists | 6 categories: college, study, career, music, misc, all | ✅ Implemented |
| Drag-and-Drop | Reorder tasks with drag and drop | ✅ Implemented |
| Search & Filters | Search by text and filter by status | ✅ Implemented |
| Calendar Page | Dedicated calendar page with task visualization | ✅ Implemented |
| Kanban View | Three-column workflow board | ✅ Implemented |
| Pomodoro Timer | 25-minute focus timer on Stats page | ✅ Implemented |
| Progress Bars | Visual completion indicators | ✅ Implemented |
| Smooth Animations | Enhanced transitions and effects | ✅ Implemented |
| Hover Animations | Interactive hover effects | ✅ Implemented |
| Dark/Light Mode | Theme toggle with persistence | ✅ Implemented |
| Export/Import | Backup and restore tasks | ✅ Implemented |

## Keyboard Shortcuts

- **Tab**: Navigate between input fields in modals
- **Escape**: Close open modals (when implemented)
- **Click & Drag**: Reorder tasks in list view

## Tips for Best Experience

1. **Explore All Pages** using the main navigation to discover all features
2. **Use World Clock** to track time across different time zones for remote work
3. **Use Due Dates** for time-sensitive tasks to leverage overdue detection
4. **Add Descriptions** to complex tasks for better context
5. **Organize with Lists** to keep different areas of life separate
6. **Try Kanban View** for workflow management and visual progress tracking
7. **Check Stats Page** to monitor your productivity and use the Pomodoro timer
8. **Enable Dark Mode** in Settings for comfortable nighttime use
9. **Search Regularly** to quickly find specific tasks
10. **Use Calendar Page** to plan your week ahead
11. **Export Your Data** regularly from Settings to create backups

## Local Storage

All data is stored in your browser's localStorage:
- **Tasks**: Stored under the key `toodoo-tasks`
- **Time Zones**: Stored under the key `toodoo-timezones`
- **Theme**: Stored under the key `toodoo-theme`

To backup your data:
1. Use the **Export** feature in Settings page (recommended)
2. Or manually copy from browser Developer Tools (F12) → Application/Storage → Local Storage

To restore data, use the **Import** feature in Settings or paste the saved value back into localStorage.

## Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- No analytics or tracking
- Your tasks stay private

## License

This project is open source and available for personal and educational use.

---

## Version History

### Version 2.0 (Current)
- ✨ Added **World Clock** feature with multiple time zone support
- 🎨 Restructured UI with **multi-page navigation** (Tasks, Calendar, World Clock, Stats, Settings)
- 📝 Implemented **modal dialogs** for task creation and editing
- 📊 Created dedicated **Statistics page** with visual cards
- ⚙️ Added **Settings page** with theme switcher and data management
- 💾 Implemented **Export/Import** functionality for task backup
- 🔥 Added **Overdue task counter** to statistics
- 🌍 Real-time clock updates for all time zones
- 📱 Improved responsive design for mobile devices

### Version 1.0
- Initial release with task management, calendar view, Kanban board, and Pomodoro timer
