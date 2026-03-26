"use client"

import Image from "next/image"
import { ServerStatus } from "./server-status"
import { Navigation } from "./navigation"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Fresa Network Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-12 w-full">
        {/* Logo */}
        <div className="animate-float">
          <Image
            src="/images/logo.png"
            alt="Fresa Network Logo"
            width={180}
            height={180}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
            <span className="text-red-500">FRESA</span>{" "}
            <span className="text-white">NETWORK</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base">El mejor servidor de Minecraft en Espanol</p>
        </div>

        {/* Server Status */}
        <ServerStatus />

        {/* Navigation */}
        <Navigation />

      </div>

      {/* Scroll indicator - positioned outside content div */}
      <a
        href="#discord"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector("#discord")?.scrollIntoView({ behavior: "smooth" })
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer z-20"
      >
        <span className="text-xs uppercase tracking-wider">Descubre mas</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
