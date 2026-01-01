import { create } from 'zustand'

export const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, text: 'Welcome to TooDoo!', completed: false },
    { id: 2, text: 'Create your first task', completed: false },
  ],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}))
