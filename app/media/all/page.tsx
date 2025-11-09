"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import mediaData from "../harmony4all_media_images.json"

const PLACEHOLDER =
  "https://static.wixstatic.com/media/e65032_cd33c8b9dc8d4a4b986f7fa5ac06df3e~mv2.jpg/v1/crop/x_337,y_634,w_1319,h_753/fill/w_354,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%204%20All%20logo_G2%20(2).jpg"

type MediaItem = {
  id: number
  title: string
  description: string
  thumbnail: string
  date: string
  category: string
}

const getCategoryFromTitle = (title: string): string => {
  const lowerTitle = title.toLowerCase()

  if (lowerTitle.includes("concert") || lowerTitle.includes("performance") || lowerTitle.includes("recital")) {
    return "Programs"
  }
  if (
    lowerTitle.includes("donation") ||
    lowerTitle.includes("drive") ||
    lowerTitle.includes("senator") ||
    lowerTitle.includes("united nations")
  ) {
    return "Events"
  }
  if (lowerTitle.includes("volunteer") || lowerTitle.includes("community")) {
    return "Volunteers"
  }
  if (lowerTitle.includes("juilliard") || lowerTitle.includes("faculty") || lowerTitle.includes("teacher")) {
    return "Programs"
  }
  if (lowerTitle.includes("award") || lowerTitle.includes("commencement")) {
    return "Events"
  }

  return "Events"
}

const buildMediaItems = (): MediaItem[] =>
  mediaData.map((item, index) => ({
    id: index,
    title: item.title,
    description: item.text,
    thumbnail: item.image_url || PLACEHOLDER,
    date: item.text,
    category: getCategoryFromTitle(item.title),
  }))

const MediaGrid = ({ items }: { items: MediaItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item) => (
        <Card key={item.id} className="border-0 shadow-lg overflow-hidden group flex flex-col h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <Badge className="absolute top-3 left-3 bg-black/70 text-white border border-white/10">{item.category}</Badge>
          </div>

          <div className="flex flex-1 flex-col space-y-3 px-4 py-5">
            <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
            <p className="mt-auto text-xs text-gray-400">{item.date}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default function MediaAllPage() {
  const mediaItems = useMemo(() => buildMediaItems(), [])

  return (
    <div className="min-h-screen bg-white">

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <MediaGrid items={mediaItems} />
        </div>
      </section>
    </div>
  )
}

