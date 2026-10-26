'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Play } from 'lucide-react'

export function VideoPreview({ src, poster, title, priority = false, showTitle = true }: { src: string; poster: string; title: string; priority?: boolean; showTitle?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  return loaded ? (
    <iframe src={src} title={title} loading="lazy" className="absolute inset-0 h-full w-full border-0" allow="encrypted-media;picture-in-picture;fullscreen" allowFullScreen />
  ) : (
    <>
    <button type="button" onClick={() => setLoaded(true)} className="absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-[-6px] focus-visible:outline-primary" aria-label={`Carregar vídeo: ${title}`}>
      <Image src={poster} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px" className="object-cover" priority={priority} />
      <span className="absolute inset-0 bg-black/20" />
      <span className="absolute inset-0 flex items-center justify-center"><span className="rounded-full bg-primary p-5 text-white border-2 border-white shadow-hard"><Play className="h-8 w-8" fill="currentColor" /></span></span>
      <span className="absolute bottom-4 inset-x-4 rounded-lg bg-black/80 px-3 py-2 text-sm font-bold text-white">{showTitle && title}<span className="block font-normal">Clique para carregar o vídeo</span></span>
    </button>
    <noscript><a href={src} className="absolute inset-x-4 bottom-4 z-10 rounded-lg bg-white text-primary p-4 font-bold underline">Assistir ao vídeo: {title}</a></noscript>
    </>
  )
}
