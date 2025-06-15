import TabsComponent from "@/components/tabs-wrapper";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Next.js 15 Features Demo</h1>
          <p className="text-lg text-gray-600">Explore the latest features in Next.js 15</p>
        </div>

        <TabsComponent />
      </div>
    </div>
  )
}
