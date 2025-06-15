"use client"

import { useState, useTransition, use } from "react"

// Simulate a promise for the use() hook demo
const createDataPromise = (delay: number) => {
  return new Promise<{ message: string; timestamp: string; data: any }>((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Data loaded with React 19 use() hook",
        timestamp: new Date().toISOString(),
        data: {
          features: ["use() hook", "Enhanced forms", "Better transitions"],
          version: "React 19",
        },
      })
    }, delay)
  })
}

function DataComponent({ promise }: { promise: Promise<any> }) {
  const data = use(promise)

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <h4 className="font-semibold text-green-800 mb-2">use() Hook Result:</h4>
      <div className="space-y-1 text-sm text-green-700">
        <p>
          <strong>Message:</strong> {data.message}
        </p>
        <p>
          <strong>Timestamp:</strong> {data.timestamp}
        </p>
        <p>
          <strong>Features:</strong> {data.data.features.join(", ")}
        </p>
        <p>
          <strong>Version:</strong> {data.data.version}
        </p>
      </div>
    </div>
  )
}

export default function React19Support() {
  const [dataPromise, setDataPromise] = useState<Promise<any> | null>(null)
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const loadData = () => {
    startTransition(() => {
      setDataPromise(createDataPromise(2000))
    })
  }

  const handleFormAction = async (formData: FormData) => {
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setFormData({ name, email })
    setFormSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">React 19 Support</h2>

      {/* Description Section */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">What's New in Next.js 15?</h3>
        <div className="text-indigo-700 space-y-2">
          <p>
            <strong>React 19 Support</strong> brings these new features to Next.js 15:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>use() hook for promise handling in components</li>
            <li>Enhanced form actions and form state management</li>
            <li>Improved useTransition for better user experience</li>
            <li>Better error boundaries and suspense integration</li>
            <li>Optimized concurrent rendering capabilities</li>
          </ul>
        </div>
      </div>

      {/* What it does Section */}
      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-teal-800 mb-2">What does it do?</h3>
        <div className="text-teal-700 space-y-2">
          <p>React 19 Support allows you to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Handle promises directly in components with use() hook</li>
            <li>Create more interactive forms with enhanced form actions</li>
            <li>Manage loading states better with improved transitions</li>
            <li>Build more responsive UIs with concurrent features</li>
            <li>Simplify async data handling in React components</li>
          </ul>
        </div>
      </div>

      {/* Demo Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">React 19 Features Demo</h3>

        <div className="space-y-6">
          {/* use() Hook Demo */}
          <div className="border border-gray-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">1. use() Hook with Promises</h4>
            <button
              onClick={loadData}
              disabled={isPending}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isPending ? "bg-gray-400 text-white cursor-not-allowed" : "bg-indigo-500 text-white hover:bg-indigo-600"
              }`}
            >
              {isPending ? "Loading with use()..." : "Load Data with use() Hook"}
            </button>

            {dataPromise && (
              <div className="mt-4">
                <DataComponent promise={dataPromise} />
              </div>
            )}
          </div>

          {/* Enhanced Form Actions Demo */}
          <div className="border border-gray-100 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">2. Enhanced Form Actions</h4>
            <form action={handleFormAction} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                Submit with Form Action
              </button>
            </form>

            {formSubmitted && (
              <div className="mt-4 bg-teal-50 border border-teal-200 rounded-lg p-3">
                <p className="text-teal-800">
                  <strong>Form submitted successfully!</strong>
                </p>
                <p className="text-sm text-teal-700 mt-1">
                  Name: {formData.name}, Email: {formData.email}
                </p>
              </div>
            )}
          </div>

          {/* useTransition Demo Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">3. useTransition in Action</h4>
            <p className="text-yellow-700 text-sm">
              The "Load Data" button above uses <code className="bg-yellow-100 px-1 rounded">useTransition</code> to
              provide smooth loading states without blocking the UI. Notice how the button shows loading state while
              keeping the interface responsive.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
