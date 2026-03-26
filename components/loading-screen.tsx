"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// Pre-defined particle positions to avoid hydration mismatch
const PARTICLES = [
  { id: 0, left: 15, top: 20, delay: 0.2 },
  { id: 1, left: 85, top: 15, delay: 0.5 },
  { id: 2, left: 10, top: 70, delay: 0.8 },
  { id: 3, left: 90, top: 65, delay: 1.1 },
  { id: 4, left: 25, top: 40, delay: 0.3 },
  { id: 5, left: 75, top: 35, delay: 0.9 },
  { id: 6, left: 50, top: 10, delay: 0.4 },
  { id: 7, left: 50, top: 85, delay: 1.3 },
  { id: 8, left: 5, top: 50, delay: 0.7 },
  { id: 9, left: 95, top: 45, delay: 1.0 },
  { id: 10, left: 30, top: 80, delay: 0.6 },
  { id: 11, left: 70, top: 75, delay: 1.2 },
  { id: 12, left: 20, top: 55, delay: 0.1 },
  { id: 13, left: 80, top: 25, delay: 1.5 },
  { id: 14, left: 40, top: 30, delay: 0.85 },
  { id: 15, left: 60, top: 60, delay: 1.4 },
]

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black">
      {/* Particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative animate-float">
        <div className="animate-pulse-glow">
          <Image
            src="/images/logo.png"
            alt="Fresa Network Logo"
            width={250}
            height={250}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Loading text */}
      <h2 className="mt-8 text-2xl font-bold text-white tracking-wider">
        FRESA NETWORK
      </h2>
      <p className="mt-2 text-red-400 text-sm tracking-widest uppercase">
        Cargando...
      </p>

      {/* Progress bar */}
      <div className="mt-8 w-64 h-2 bg-neutral-800 rounded-full overflow-hidden border border-neutral-700">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="mt-2 text-neutral-400 text-xs">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  )
}
