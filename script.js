// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompleted');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const pendingTasksEl = document.getElementById('pendingTasks');

// Tasks array
let tasks = [];

// App state
let currentList = 'all';
let currentView = 'list'; // list, calendar, kanban
let searchQuery = '';
let filterStatus = 'all'; // all, active, completed, overdue
let draggedTask = null;

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
    updateStats();
    
    // Load theme
    const savedTheme = localStorage.getItem('toodoo-theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
});

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Clear completed tasks
clearCompletedBtn.addEventListener('click', clearCompleted);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const descriptionInput = document.getElementById('taskDescription');
    const dueDateInput = document.getElementById('taskDueDate');
    const listSelect = document.getElementById('taskList-select');
    
    const task = {
        id: Date.now(),
        text: taskText,
        description: descriptionInput ? descriptionInput.value.trim() : '',
        dueDate: dueDateInput ? dueDateInput.value : null,
        completed: false,
        list: listSelect ? listSelect.value : 'misc',
        priority: 'medium',
        createdAt: new Date().toISOString()
    };
    
    tasks.push(task);
    saveTasks();
    renderTasks();
    updateStats();
    
    // Clear inputs and focus
    taskInput.value = '';
    if (descriptionInput) descriptionInput.value = '';
    if (dueDateInput) dueDateInput.value = '';
    taskInput.focus();
}

// Function to toggle task completion
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
        updateStats();
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
    updateStats();
}

// Function to clear all completed tasks
function clearCompleted() {
    const completedCount = tasks.filter(t => t.completed).length;
    
    if (completedCount === 0) {
        alert('No completed tasks to clear!');
        return;
    }
    
    if (confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
        tasks = tasks.filter(t => !t.completed);
        saveTasks();
        renderTasks();
        updateStats();
    }
}

// Function to render all tasks
function renderTasks() {
    const filteredTasks = getFilteredTasks();
    
    if (currentView === 'calendar') {
        renderCalendarView(filteredTasks);
        return;
    }
    
    if (currentView === 'kanban') {
        renderKanbanView(filteredTasks);
        return;
    }
    
    // List view
    taskList.innerHTML = '';
    
    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <p>No tasks yet!</p>
                <p style="font-size: 0.9rem;">Add a task to get started 🚀</p>
            </div>
        `;
        return;
    }
    
    filteredTasks.forEach(task => {
        const taskItem = createTaskElement(task);
        taskList.appendChild(taskItem);
    });
}

// Get filtered tasks based on current filters
function getFilteredTasks() {
    let filtered = tasks;
    
    // Filter by list
    if (currentList !== 'all') {
        filtered = filtered.filter(t => t.list === currentList);
    }
    
    // Filter by search query
    if (searchQuery) {
        filtered = filtered.filter(t => 
            t.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }
    
    // Filter by status
    if (filterStatus === 'active') {
        filtered = filtered.filter(t => !t.completed);
    } else if (filterStatus === 'completed') {
        filtered = filtered.filter(t => t.completed);
    } else if (filterStatus === 'overdue') {
        filtered = filtered.filter(t => !t.completed && isOverdue(t));
    }
    
    return filtered;
}

// Check if task is overdue
function isOverdue(task) {
    if (!task.dueDate) return false;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < now && !task.completed;
}

// Function to create a task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''} ${isOverdue(task) ? 'overdue' : ''}`;
    li.draggable = true;
    li.dataset.taskId = task.id;
    
    // Drag and drop event handlers
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.addEventListener('dragend', handleDragEnd);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));
    
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;
    
    taskContent.appendChild(taskText);
    
    if (task.description) {
        const taskDesc = document.createElement('div');
        taskDesc.className = 'task-description';
        taskDesc.textContent = task.description;
        taskContent.appendChild(taskDesc);
    }
    
    if (task.dueDate) {
        const dueDate = document.createElement('div');
        dueDate.className = 'task-due-date';
        const date = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const taskDate = new Date(task.dueDate);
        taskDate.setHours(0, 0, 0, 0);
        
        let dateText = date.toLocaleDateString();
        if (taskDate.getTime() === today.getTime()) {
            dateText += ' (Today)';
        } else if (isOverdue(task)) {
            dateText += ' (Overdue!)';
        }
        
        dueDate.innerHTML = `📅 ${dateText}`;
        taskContent.appendChild(dueDate);
    }
    
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(task.id));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);
    
    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(taskActions);
    
    return li;
}

// Drag and drop functions
function handleDragStart(e) {
    draggedTask = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    if (draggedTask !== this) {
        const draggedId = parseInt(draggedTask.dataset.taskId);
        const targetId = parseInt(this.dataset.taskId);
        
        const draggedIndex = tasks.findIndex(t => t.id === draggedId);
        const targetIndex = tasks.findIndex(t => t.id === targetId);
        
        // Swap tasks
        const temp = tasks[draggedIndex];
        tasks.splice(draggedIndex, 1);
        tasks.splice(targetIndex, 0, temp);
        
        saveTasks();
        renderTasks();
    }
    
    return false;
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
}

// Edit task function
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    const newText = prompt('Edit task:', task.text);
    if (newText && newText.trim()) {
        task.text = newText.trim();
    }
    
    const newDesc = prompt('Edit description:', task.description || '');
    if (newDesc !== null) {
        task.description = newDesc.trim();
    }
    
    const newDate = prompt('Edit due date (YYYY-MM-DD):', task.dueDate || '');
    if (newDate !== null) {
        task.dueDate = newDate || null;
    }
    
    saveTasks();
    renderTasks();
    updateStats();
}

// Function to update statistics
function updateStats() {
    const filteredTasks = getFilteredTasks();
    const total = filteredTasks.length;
    const completed = filteredTasks.filter(t => t.completed).length;
    const pending = total - completed;
    
    totalTasksEl.textContent = `Total: ${total}`;
    completedTasksEl.textContent = `Completed: ${completed}`;
    pendingTasksEl.textContent = `Pending: ${pending}`;
    
    // Update progress bar
    const progressBar = document.getElementById('progress-bar');
    if (progressBar && total > 0) {
        const percentage = (completed / total) * 100;
        progressBar.style.width = percentage + '%';
        progressBar.textContent = Math.round(percentage) + '%';
    }
    
    // Disable clear completed button if no completed tasks
    clearCompletedBtn.disabled = completed === 0;
}

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('toodoo-tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('toodoo-tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        // Migrate old tasks without new fields
        tasks = tasks.map(task => ({
            ...task,
            description: task.description || '',
            dueDate: task.dueDate || null,
            list: task.list || 'misc',
            priority: task.priority || 'medium',
            createdAt: task.createdAt || new Date().toISOString()
        }));
    }
}

// Calendar View
function renderCalendarView(filteredTasks) {
    taskList.innerHTML = '<div id="calendar-container" class="calendar-view"></div>';
    const container = document.getElementById('calendar-container');
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let html = `
        <div class="calendar-header">
            <h3>${monthNames[month]} ${year}</h3>
        </div>
        <div class="calendar-grid">
            <div class="calendar-day-name">Sun</div>
            <div class="calendar-day-name">Mon</div>
            <div class="calendar-day-name">Tue</div>
            <div class="calendar-day-name">Wed</div>
            <div class="calendar-day-name">Thu</div>
            <div class="calendar-day-name">Fri</div>
            <div class="calendar-day-name">Sat</div>
    `;
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="calendar-day empty"></div>';
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const tasksOnDay = filteredTasks.filter(t => t.dueDate === dateStr);
        const isToday = day === now.getDate() && month === now.getMonth() && year === now.getFullYear();
        
        html += `<div class="calendar-day ${isToday ? 'today' : ''}">
            <div class="day-number">${day}</div>
            <div class="day-tasks">`;
        
        tasksOnDay.forEach(task => {
            html += `<div class="calendar-task ${task.completed ? 'completed' : ''}" title="${task.text}">
                ${task.text.substring(0, 15)}${task.text.length > 15 ? '...' : ''}
            </div>`;
        });
        
        html += '</div></div>';
    }
    
    html += '</div>';
    container.innerHTML = html;
}

// Kanban View
function renderKanbanView(filteredTasks) {
    taskList.innerHTML = '<div id="kanban-container" class="kanban-view"></div>';
    const container = document.getElementById('kanban-container');
    
    const todoTasks = filteredTasks.filter(t => !t.completed && !t.inProgress);
    const inProgressTasks = filteredTasks.filter(t => !t.completed && t.inProgress);
    const doneTasks = filteredTasks.filter(t => t.completed);
    
    container.innerHTML = `
        <div class="kanban-column">
            <h3>To Do (${todoTasks.length})</h3>
            <div class="kanban-tasks" data-status="todo">
                ${todoTasks.map(t => createKanbanCard(t)).join('')}
            </div>
        </div>
        <div class="kanban-column">
            <h3>In Progress (${inProgressTasks.length})</h3>
            <div class="kanban-tasks" data-status="inprogress">
                ${inProgressTasks.map(t => createKanbanCard(t)).join('')}
            </div>
        </div>
        <div class="kanban-column">
            <h3>Done (${doneTasks.length})</h3>
            <div class="kanban-tasks" data-status="done">
                ${doneTasks.map(t => createKanbanCard(t)).join('')}
            </div>
        </div>
    `;
}

function createKanbanCard(task) {
    return `
        <div class="kanban-card ${isOverdue(task) ? 'overdue' : ''}" data-task-id="${task.id}">
            <div class="kanban-card-title">${task.text}</div>
            ${task.description ? `<div class="kanban-card-desc">${task.description}</div>` : ''}
            ${task.dueDate ? `<div class="kanban-card-date">📅 ${new Date(task.dueDate).toLocaleDateString()}</div>` : ''}
            <div class="kanban-card-actions">
                <button onclick="moveTask(${task.id}, 'left')">←</button>
                <button onclick="moveTask(${task.id}, 'right')">→</button>
            </div>
        </div>
    `;
}

function moveTask(id, direction) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    if (direction === 'left') {
        if (task.completed) {
            task.completed = false;
            task.inProgress = true;
        } else if (task.inProgress) {
            task.inProgress = false;
        }
    } else {
        if (!task.inProgress && !task.completed) {
            task.inProgress = true;
        } else if (task.inProgress) {
            task.inProgress = false;
            task.completed = true;
        }
    }
    
    saveTasks();
    renderTasks();
    updateStats();
}

// Pomodoro Timer
let pomodoroInterval = null;
let pomodoroTimeLeft = 25 * 60; // 25 minutes
let pomodoroRunning = false;

function startPomodoro() {
    if (pomodoroRunning) return;
    
    pomodoroRunning = true;
    const timerDisplay = document.getElementById('pomodoro-timer');
    
    pomodoroInterval = setInterval(() => {
        pomodoroTimeLeft--;
        
        const minutes = Math.floor(pomodoroTimeLeft / 60);
        const seconds = pomodoroTimeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (pomodoroTimeLeft <= 0) {
            clearInterval(pomodoroInterval);
            pomodoroRunning = false;
            pomodoroTimeLeft = 25 * 60;
            alert('Pomodoro session complete! Time for a break.');
            timerDisplay.textContent = '25:00';
        }
    }, 1000);
}

function pausePomodoro() {
    if (!pomodoroRunning) return;
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
}

function resetPomodoro() {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    pomodoroTimeLeft = 25 * 60;
    const timerDisplay = document.getElementById('pomodoro-timer');
    if (timerDisplay) {
        timerDisplay.textContent = '25:00';
    }
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('toodoo-theme', newTheme);
}

// View switching
function switchView(view) {
    currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`)?.classList.add('active');
    renderTasks();
}

// List switching
function switchList(list) {
    currentList = list;
    document.querySelectorAll('.list-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-list="${list}"]`)?.classList.add('active');
    renderTasks();
    updateStats();
}

// Search function
function handleSearch(query) {
    searchQuery = query;
    renderTasks();
}

// Filter function
function handleFilter(status) {
    filterStatus = status;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${status}"]`)?.classList.add('active');
    renderTasks();
}
