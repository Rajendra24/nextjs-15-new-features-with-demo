"use client"

import { useState } from "react"
import AsyncRequest from "./async-request"
import CacheSemantics from "./cache-semantics"
import React19Support from "./react19-support"
import NextForm from "./next-form"
import Turbopack from "./turbopack"
import ServerAction from "./server-action"

const tabs = [
  { id: "async-request", name: "Async Request" },
  { id: "cache-semantics", name: "Cache Semantics" },
  { id: "react19-support", name: "React 19 Support" },
  { id: "next-form", name: "Next Form" },
  { id: "turbopack", name: "Turbopack" },
  { id: "server-action", name: "Server Action" },
]

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("async-request")

  const renderTabContent = () => {
    switch (activeTab) {
      case "async-request":
        return <AsyncRequest />
      case "cache-semantics":
        return <CacheSemantics />
      case "react19-support":
        return <React19Support />
      case "next-form":
        return (
          <NextForm />
        )
      case "turbopack":
        return (
         <Turbopack />
        )
      case "server-action":
        return (
          <ServerAction />
        )
      default:
        return <AsyncRequest />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-t-lg font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-blue-500 text-white border-b-2 border-blue-500"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">{renderTabContent()}</div>
    </div>
  )
}
