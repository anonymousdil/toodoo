import { Link } from 'react-router-dom'
import TaskList from '../components/TaskList'

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">TooDoo</h1>
        <p className="text-white text-lg">The Ultimate To-Do List</p>
        <p className="text-white text-2xl mt-8">Hello, Toodoo!</p>
      </header>

      <nav className="flex justify-center gap-4 mb-8">
        <Link
          to="/"
          className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Home
        </Link>
        <Link
          to="/calendar"
          className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Calendar
        </Link>
        <Link
          to="/focus"
          className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Focus
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto">
        <TaskList />
      </div>
    </div>
  )
}

export default Home
