function TaskItem({ task }) {
  return (
    <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      <input
        type="checkbox"
        checked={task.completed}
        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
        readOnly
      />
      <span
        className={`flex-1 ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {task.text}
      </span>
      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition">
        Delete
      </button>
    </li>
  )
}

export default TaskItem
