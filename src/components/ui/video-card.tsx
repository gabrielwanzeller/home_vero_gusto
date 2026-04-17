"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface VideoCardProps {
  iframeUrl: string
  thumb: string
  alt?: string
}

export function VideoCard({ iframeUrl, thumb, alt = "Preview do vídeo" }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={iframeUrl}
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
        allowFullScreen
        autoFocus
      />
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full cursor-pointer group/play"
      aria-label="Reproduzir vídeo"
    >
      <Image
        src={thumb}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover/play:bg-black/40 transition-colors">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform">
          <Play className="w-7 h-7 text-primary fill-primary ml-1" />
        </div>
      </div>
    </button>
  )
}
