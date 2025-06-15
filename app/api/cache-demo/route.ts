import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const cacheType = searchParams.get("type") || "default"

  // Simulate some processing time
  await new Promise((resolve) => setTimeout(resolve, 500))

  const data = {
    timestamp: new Date().toISOString(),
    requestId: Math.random().toString(36).substring(7),
    cached: cacheType === "force-cache",
    cacheType,
  }

  const response = NextResponse.json(data)

  // Set cache headers based on type
  switch (cacheType) {
    case "no-cache":
      response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate")
      break
    case "force-cache":
      response.headers.set("Cache-Control", "public, max-age=3600")
      break
    default:
      response.headers.set("Cache-Control", "public, max-age=60")
  }

  return response
}
