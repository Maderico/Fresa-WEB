"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { HeroSection } from "@/components/hero-section"
import { DiscordSection } from "@/components/discord-section"
import { SectionsGrid } from "@/components/sections-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("fresaLoaded")
    if (hasLoaded) {
      setIsLoading(false)
      setShowContent(true)
    }
  }, [])

  const handleLoadComplete = () => {
    setIsLoading(false)
    sessionStorage.setItem("fresaLoaded", "true")
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <main className="min-h-screen bg-black">
      {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}
      
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroSection />
        <DiscordSection />
        <SectionsGrid />
        <Footer />
      </div>
    </main>
  )
}
