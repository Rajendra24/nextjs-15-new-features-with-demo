"use client"

import { useState } from "react"

export default function NextForm() {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<any>({})

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setFormErrors({})

    try {
      // Simulate form validation
      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const message = formData.get("message") as string

      // Basic validation
      const errors: any = {}
      if (!name || name.length < 2) {
        errors.name = "Name must be at least 2 characters"
      }
      if (!email || !email.includes("@")) {
        errors.email = "Please enter a valid email"
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors)
        setIsSubmitting(false)
        return
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const submission = {
        id: Date.now(),
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
        status: "success",
      }

      setSubmissions((prev) => [submission, ...prev])
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const clearSubmissions = () => {
    setSubmissions([])
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Next Form</h2>

      {/* Description Section */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">What's New in Next.js 15?</h3>
        <div className="text-emerald-700 space-y-2">
          <p>
            <strong>Next Form</strong> introduces these enhanced features in Next.js 15:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Server Actions integration with forms for seamless data handling</li>
            <li>Built-in form validation and error handling mechanisms</li>
            <li>Progressive enhancement for better user experience</li>
            <li>Automatic form state management and loading states</li>
            <li>Enhanced form security with CSRF protection</li>
          </ul>
        </div>
      </div>

      {/* What it does Section */}
      <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-cyan-800 mb-2">What does it do?</h3>
        <div className="text-cyan-700 space-y-2">
          <p>Next Form allows you to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Handle form submissions directly with Server Actions</li>
            <li>Validate form data both client-side and server-side</li>
            <li>Manage form state automatically without extra libraries</li>
            <li>Provide instant feedback with loading and error states</li>
            <li>Create accessible forms with built-in ARIA support</li>
          </ul>
        </div>
      </div>

      {/* Demo Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Enhanced Form Demo</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your message (optional)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-emerald-500 text-white hover:bg-emerald-600"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit Form"
                )}
              </button>
            </form>
          </div>

          {/* Submissions Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-800">Form Submissions ({submissions.length})</h4>
              {submissions.length > 0 && (
                <button
                  onClick={clearSubmissions}
                  className="text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {submissions.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-gray-500 text-sm">No submissions yet. Fill out the form to see results here.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {submissions.map((submission) => (
                  <div key={submission.id} className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-emerald-600 font-medium">#{submission.id}</span>
                      <span className="text-xs text-gray-500">{new Date(submission.timestamp).toLocaleString()}</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p>
                        <strong>Name:</strong> {submission.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {submission.email}
                      </p>
                      {submission.message && (
                        <p>
                          <strong>Message:</strong> {submission.message}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Form Features Info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Next.js 15 Form Features Demonstrated:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Server Action Integration</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Client-side Validation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Loading States</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Error Handling</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Progressive Enhancement</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Automatic State Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
