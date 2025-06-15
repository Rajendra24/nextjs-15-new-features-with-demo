"use client"

import { useState } from "react"

export default function ServerAction() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Next.js 15", completed: false, createdAt: new Date().toISOString() },
    { id: 2, text: "Try Server Actions", completed: true, createdAt: new Date().toISOString() },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userProfile, setUserProfile] = useState({ name: "", email: "", bio: "" })
  const [profileUpdating, setProfileUpdating] = useState(false)

  // Simulate Server Action for adding todos
  const addTodo = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      // Simulate server processing
      await new Promise((resolve) => setTimeout(resolve, 800))

      const todoText = formData.get("todo") as string
      if (todoText.trim()) {
        const newTodo = {
          id: Date.now(),
          text: todoText,
          completed: false,
          createdAt: new Date().toISOString(),
        }
        setTodos((prev) => [...prev, newTodo])
      }
    } catch (error) {
      console.error("Error adding todo:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Simulate Server Action for toggling todo
  const toggleTodo = async (id: number) => {
    try {
      // Simulate server processing
      await new Promise((resolve) => setTimeout(resolve, 300))

      setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    } catch (error) {
      console.error("Error toggling todo:", error)
    }
  }

  // Simulate Server Action for deleting todo
  const deleteTodo = async (id: number) => {
    try {
      // Simulate server processing
      await new Promise((resolve) => setTimeout(resolve, 300))

      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    } catch (error) {
      console.error("Error deleting todo:", error)
    }
  }

  // Simulate Server Action for updating profile
  const updateProfile = async (formData: FormData) => {
    setProfileUpdating(true)

    try {
      // Simulate server processing
      await new Promise((resolve) => setTimeout(resolve, 1200))

      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const bio = formData.get("bio") as string

      setUserProfile({ name, email, bio })
    } catch (error) {
      console.error("Error updating profile:", error)
    } finally {
      setProfileUpdating(false)
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Actions</h2>

      {/* Description Section */}
      <div className="bg-violet-50 border-l-4 border-violet-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-violet-800 mb-2">What's New in Next.js 15?</h3>
        <div className="text-violet-700 space-y-2">
          <p>
            <strong>Server Actions</strong> introduces these powerful features in Next.js 15:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Direct server-side function calls from client components</li>
            <li>Automatic serialization and error handling</li>
            <li>Built-in form integration with progressive enhancement</li>
            <li>Type-safe server-client communication</li>
            <li>Enhanced security with automatic CSRF protection</li>
          </ul>
        </div>
      </div>

      {/* What it does Section */}
      <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-pink-800 mb-2">What does it do?</h3>
        <div className="text-pink-700 space-y-2">
          <p>Server Actions allows you to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Execute server-side logic directly from client components</li>
            <li>Handle form submissions without creating API routes</li>
            <li>Perform database operations securely on the server</li>
            <li>Manage server state with automatic revalidation</li>
            <li>Create seamless user experiences with progressive enhancement</li>
          </ul>
        </div>
      </div>

      {/* Demo Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Server Actions Demo</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Todo App Demo */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Todo App with Server Actions</h4>

            {/* Add Todo Form */}
            <form action={addTodo} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="todo"
                  placeholder="Add a new todo..."
                  required
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-violet-500 text-white hover:bg-violet-600"
                  }`}
                >
                  {isSubmitting ? "Adding..." : "Add"}
                </button>
              </div>
            </form>

            {/* Todo List */}
            <div className="space-y-2 max-h-64 overflow-y-auto">
              <div className="text-sm text-gray-600 mb-2">Total: {todos.length} todos</div>
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 p-2 border rounded-lg transition-all ${
                    todo.completed ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-4 h-4 text-violet-600 rounded focus:ring-violet-500"
                  />
                  <span className={`flex-1 text-sm ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Update Demo */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Profile Update with Server Actions</h4>

            <form action={updateProfile} className="space-y-3">
              <div>
                <label htmlFor="profile-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="profile-name"
                  name="name"
                  defaultValue={userProfile.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="profile-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="profile-email"
                  name="email"
                  defaultValue={userProfile.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="profile-bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="profile-bio"
                  name="bio"
                  rows={3}
                  defaultValue={userProfile.bio}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Tell us about yourself"
                />
              </div>

              <button
                type="submit"
                disabled={profileUpdating}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  profileUpdating
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                }`}
              >
                {profileUpdating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Updating...</span>
                  </div>
                ) : (
                  "Update Profile"
                )}
              </button>
            </form>

            {/* Profile Display */}
            {(userProfile.name || userProfile.email || userProfile.bio) && (
              <div className="mt-4 bg-pink-50 border border-pink-200 rounded-lg p-3">
                <h5 className="font-medium text-pink-800 mb-2">Current Profile:</h5>
                <div className="space-y-1 text-sm text-pink-700">
                  {userProfile.name && (
                    <p>
                      <strong>Name:</strong> {userProfile.name}
                    </p>
                  )}
                  {userProfile.email && (
                    <p>
                      <strong>Email:</strong> {userProfile.email}
                    </p>
                  )}
                  {userProfile.bio && (
                    <p>
                      <strong>Bio:</strong> {userProfile.bio}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Server Action Benefits */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Server Action Benefits Demonstrated:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">No API Routes Needed</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Type-Safe Communication</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Automatic Error Handling</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Progressive Enhancement</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Built-in Security</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Server-Side Execution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
