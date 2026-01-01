# TooDoo
The Ultimate To-Do List website

## Features

✨ **Interactive Task Management**
- Add new tasks quickly with keyboard shortcuts (Enter key) or button click
- Mark tasks as complete/incomplete with checkbox toggles
- Delete individual tasks
- Bulk delete all completed tasks

📊 **Real-time Statistics**
- Total task count
- Completed task count
- Pending task count

💾 **Persistent Storage**
- All tasks are automatically saved to browser localStorage
- Tasks persist across browser sessions and page refreshes

🎨 **Modern UI**
- Clean, responsive design that works on all devices
- Beautiful gradient background
- Smooth animations and transitions
- Hover effects for better user experience

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

### Usage

1. **Add a Task**: Type your task in the input field and press Enter or click "Add Task"
2. **Complete a Task**: Click the checkbox next to the task
3. **Delete a Task**: Click the "Delete" button next to the task
4. **Clear Completed Tasks**: Click "Clear Completed" to remove all finished tasks at once

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and animations
- `script.js` - Interactive functionality and localStorage management

## Browser Compatibility

Works with all modern browsers that support:
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- ES6 JavaScript
- localStorage API

## License

This project is open source and available for personal and educational use.
