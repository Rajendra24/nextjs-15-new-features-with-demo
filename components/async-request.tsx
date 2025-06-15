"use client"

import { useState } from "react"

interface Data {
  message: string;
  timestamp: string;
  id: string;
}

export default function AsyncRequest() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const mockData = {
        message: "Data fetched successfully!",
        timestamp: new Date().toISOString(),
        id: Math.random().toString(36).substring(7),
      }
      setData(mockData)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Async Request APIs</h2>

      {/* Description Section */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">What's New in Next.js 15?</h3>
        <div className="text-blue-700 space-y-2">
          <p>
            <strong>Async Request APIs</strong> introduces these new features in Next.js 15:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Server Components can be async by default</li>
            <li>Better request deduplication and caching mechanisms</li>
            <li>Improved streaming support for faster loading</li>
            <li>Enhanced error handling and loading states</li>
            <li>Automatic request optimization and batching</li>
          </ul>
        </div>
      </div>

      {/* What it does Section */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">What does it do?</h3>
        <div className="text-green-700 space-y-2">
          <p>Async Request APIs allows you to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Fetch data on the server-side without extra API routes</li>
            <li>Get automatic loading states and error boundaries</li>
            <li>Achieve better performance with streaming responses</li>
            <li>Use simplified data fetching patterns</li>
            <li>Handle concurrent requests more efficiently</li>
          </ul>
        </div>
      </div>

      {/* Simple Demo Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Simple Demo</h3>

        <div className="space-y-4">
          <button
            onClick={fetchData}
            disabled={loading}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              loading ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {loading ? "Loading..." : "Fetch Data (Async)"}
          </button>

          {loading && (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              <span className="text-gray-600">Fetching data asynchronously...</span>
            </div>
          )}

          {data && !loading && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Fetched Data:</h4>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Message:</strong> {data.message}
                </p>
                <p>
                  <strong>Timestamp:</strong> {data.timestamp}
                </p>
                <p>
                  <strong>ID:</strong> {data.id}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
