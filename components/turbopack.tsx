"use client"

import { useState } from "react"

export default function Turbopack() {
  const [buildTime, setBuildTime] = useState(0)
  const [isBuilding, setIsBuilding] = useState(false)
  const [buildType, setBuildType] = useState("webpack")

  const simulateBuild = (type: string) => {
    setIsBuilding(true)
    setBuildType(type)
    setBuildTime(0)

    const buildDuration = type === "turbopack" ? 3000 : 15000 // 3s vs 15s
    const interval = setInterval(() => {
      setBuildTime((prev) => {
        if (prev >= buildDuration) {
          clearInterval(interval)
          setIsBuilding(false)
          return buildDuration
        }
        return prev + 100
      })
    }, 100)
  }

  const formatTime = (ms: number) => {
    return (ms / 1000).toFixed(1) + "s"
  }

  const getProgressPercentage = () => {
    const maxTime = buildType === "turbopack" ? 3000 : 15000
    return Math.min((buildTime / maxTime) * 100, 100)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Turbopack</h2>

      {/* Description Section */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-orange-800 mb-2">What's New in Next.js 15?</h3>
        <div className="text-orange-700 space-y-2">
          <p>
            <strong>Turbopack</strong> brings these performance improvements to Next.js 15:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Up to 10x faster builds compared to Webpack for large applications</li>
            <li>Incremental bundling for lightning-fast rebuilds</li>
            <li>Better tree-shaking and advanced code splitting</li>
            <li>Near-instant Hot Module Replacement (HMR)</li>
            <li>Native TypeScript support without additional configuration</li>
          </ul>
        </div>
      </div>

      {/* What it does Section */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-red-800 mb-2">What does it do?</h3>
        <div className="text-red-700 space-y-2">
          <p>Turbopack allows you to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Build applications significantly faster with Rust-powered bundling</li>
            <li>Experience instant feedback during development with fast HMR</li>
            <li>Handle large codebases efficiently with incremental compilation</li>
            <li>Optimize bundle sizes automatically with smart tree-shaking</li>
            <li>Reduce development time with faster build and reload cycles</li>
          </ul>
        </div>
      </div>

      {/* Demo Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Comparison Demo</h3>

        <div className="space-y-6">
          {/* Build Speed Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Webpack Build
              </h4>
              <button
                onClick={() => simulateBuild("webpack")}
                disabled={isBuilding}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  isBuilding && buildType === "webpack"
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                {isBuilding && buildType === "webpack" ? "Building..." : "Start Webpack Build"}
              </button>
              <div className="mt-3 text-sm text-gray-600">
                <p>Typical build time: ~15-30 seconds</p>
                <p>HMR: ~2-3 seconds</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Turbopack Build
              </h4>
              <button
                onClick={() => simulateBuild("turbopack")}
                disabled={isBuilding}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  isBuilding && buildType === "turbopack"
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {isBuilding && buildType === "turbopack" ? "Building..." : "Start Turbopack Build"}
              </button>
              <div className="mt-3 text-sm text-gray-600">
                <p>Typical build time: ~1-3 seconds</p>
                <p>HMR: ~0.1-0.2 seconds</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {isBuilding && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">
                  {buildType === "turbopack" ? "Turbopack" : "Webpack"} Building...
                </span>
                <span className="text-sm text-gray-600">{formatTime(buildTime)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-100 ${
                    buildType === "turbopack" ? "bg-green-500" : "bg-red-500"
                  }`}
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-gray-500">{getProgressPercentage().toFixed(1)}% complete</div>
            </div>
          )}

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">10x</div>
              <div className="text-sm text-blue-700">Faster Builds</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">700%</div>
              <div className="text-sm text-green-700">HMR Improvement</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">90%</div>
              <div className="text-sm text-purple-700">Less Memory Usage</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                🚀 <span className="ml-2">Speed Improvements</span>
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rust-powered bundling engine</li>
                <li>• Incremental compilation</li>
                <li>• Parallel processing</li>
                <li>• Optimized dependency resolution</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                🔥 <span className="ml-2">Developer Experience</span>
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Instant Hot Module Replacement</li>
                <li>• Better error messages</li>
                <li>• Native TypeScript support</li>
                <li>• Improved debugging tools</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                📦 <span className="ml-2">Bundle Optimization</span>
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Advanced tree-shaking</li>
                <li>• Smart code splitting</li>
                <li>• Automatic chunk optimization</li>
                <li>• Reduced bundle sizes</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                ⚡ <span className="ml-2">How to Enable</span>
              </h4>
              <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                <div># Development</div>
                <div>pnpm dev --turbo</div>
                <div className="mt-2"># Or in package.json</div>
                <div>{"{"}</div>
                <div>&nbsp;&nbsp;"dev": "next dev --turbo"</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
