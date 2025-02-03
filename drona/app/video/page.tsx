import VideoComponent from "@/components/VideoComponent"

export default function VideoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#E5E7E6] p-4">
      <h1 className="text-3xl font-bold text-[#0065FA] mb-8">Video</h1>
      <VideoComponent />
    </main>
  )
}

