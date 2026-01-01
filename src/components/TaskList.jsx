import TaskItem from './TaskItem'
import { useTaskStore } from '../state/taskStore'

function TaskList() {
  const tasks = useTaskStore((state) => state.tasks)

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Tasks</h2>

      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No tasks yet!</p>
          <p className="text-gray-400 text-sm mt-2">
            Add a task to get started 🚀
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList
