"use client"

import { useState } from "react"

interface Data {
    message: string;
    timestamp: string;
    cacheStrategy: string;
    requestId: string;
    cached: boolean;
}


export default function CacheSemantics() {
    const [cacheData, setCacheData] = useState<Data | null>(null)
    const [loading, setLoading] = useState(false)
    const [cacheType, setCacheType] = useState("default")

    const fetchWithCache = async (type: string) => {
        setLoading(true)
        setCacheType(type)

        try {
            // Simulate API call with different cache strategies
            await new Promise((resolve) => setTimeout(resolve, 1500))

            const mockData = {
                message: `Data fetched with ${type} cache strategy`,
                timestamp: new Date().toISOString(),
                cacheStrategy: type,
                requestId: Math.random().toString(36).substring(7),
                cached: type === "force-cache" ? true : false,
            }
            setCacheData(mockData)
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cache Semantics</h2>

            {/* Description Section */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">What's New in Next.js 15?</h3>
                <div className="text-purple-700 space-y-2">
                    <p>
                        <strong>Cache Semantics</strong> introduces these improvements in Next.js 15:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Enhanced fetch() caching with explicit cache control</li>
                        <li>Improved cache invalidation strategies</li>
                        <li>Better cache debugging and monitoring tools</li>
                        <li>Granular cache control per request</li>
                        <li>Optimized cache storage and retrieval</li>
                    </ul>
                </div>
            </div>

            {/* What it does Section */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">What does it do?</h3>
                <div className="text-orange-700 space-y-2">
                    <p>Cache Semantics allows you to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Control caching behavior with precise cache strategies</li>
                        <li>Improve application performance through smart caching</li>
                        <li>Reduce server load with efficient cache management</li>
                        <li>Handle cache invalidation and revalidation automatically</li>
                        <li>Debug cache behavior with better developer tools</li>
                    </ul>
                </div>
            </div>

            {/* Simple Demo Section */}
            <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Cache Strategy Demo</h3>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => fetchWithCache("default")}
                            disabled={loading}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${loading ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                                }`}
                        >
                            Default Cache
                        </button>

                        <button
                            onClick={() => fetchWithCache("no-cache")}
                            disabled={loading}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${loading ? "bg-gray-400 text-white cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"
                                }`}
                        >
                            No Cache
                        </button>

                        <button
                            onClick={() => fetchWithCache("force-cache")}
                            disabled={loading}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${loading ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"
                                }`}
                        >
                            Force Cache
                        </button>
                    </div>

                    {loading && (
                        <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-500"></div>
                            <span className="text-gray-600">Fetching with {cacheType} strategy...</span>
                        </div>
                    )}

                    {cacheData && !loading && (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Cache Result:</h4>
                            <div className="space-y-1 text-sm">
                                <p>
                                    <strong>Message:</strong> {cacheData.message}
                                </p>
                                <p>
                                    <strong>Cache Strategy:</strong>
                                    <span
                                        className={`ml-1 px-2 py-1 rounded text-xs ${cacheData.cacheStrategy === "force-cache"
                                                ? "bg-green-100 text-green-800"
                                                : cacheData.cacheStrategy === "no-cache"
                                                    ? "bg-red-100 text-red-800"
                                                    : "bg-blue-100 text-blue-800"
                                            }`}
                                    >
                                        {cacheData.cacheStrategy}
                                    </span>
                                </p>
                                <p>
                                    <strong>Cached:</strong>
                                    <span className={`ml-1 ${cacheData.cached ? "text-green-600" : "text-red-600"}`}>
                                        {cacheData.cached ? "Yes" : "No"}
                                    </span>
                                </p>
                                <p>
                                    <strong>Timestamp:</strong> {cacheData.timestamp}
                                </p>
                                <p>
                                    <strong>Request ID:</strong> {cacheData.requestId}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
