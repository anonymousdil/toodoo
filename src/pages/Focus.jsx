import { Link } from 'react-router-dom'

function Focus() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">TooDoo</h1>
        <p className="text-white text-lg">Focus Mode</p>
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

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Focus Mode (Coming Soon)
        </h2>
        <p className="text-gray-600">
          This feature will help you concentrate on one task at a time.
        </p>
      </div>
    </div>
  )
}

export default Focus
