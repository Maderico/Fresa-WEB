"use client"

import useSWR from "swr"
import { Users, Wifi, WifiOff, Copy, Check } from "lucide-react"
import { useState } from "react"

interface ServerStatus {
  online: boolean
  players?: {
    online: number
    max: number
  }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function ServerStatus() {
  const [copiedJava, setCopiedJava] = useState(false)
  const [copiedBedrock, setCopiedBedrock] = useState(false)

  const { data: javaStatus, isLoading: javaLoading } = useSWR<ServerStatus>(
    "https://api.mcsrvstat.us/3/fresa.top",
    fetcher,
    { refreshInterval: 30000 }
  )

  const { data: bedrockStatus, isLoading: bedrockLoading } = useSWR<ServerStatus>(
    "https://api.mcsrvstat.us/bedrock/3/fresa.top:19132",
    fetcher,
    { refreshInterval: 30000 }
  )

  const copyToClipboard = (text: string, type: "java" | "bedrock") => {
    navigator.clipboard.writeText(text)
    if (type === "java") {
      setCopiedJava(true)
      setTimeout(() => setCopiedJava(false), 2000)
    } else {
      setCopiedBedrock(true)
      setTimeout(() => setCopiedBedrock(false), 2000)
    }
  }

  const isLoading = javaLoading || bedrockLoading
  const totalPlayers = (javaStatus?.players?.online || 0) + (bedrockStatus?.players?.online || 0)
  const isOnline = javaStatus?.online || bedrockStatus?.online

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10">
        <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-white/70 text-sm">Cargando...</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      {/* Server Status Badge */}
      <div className="flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10">
        {isOnline ? (
          <Wifi className="w-4 h-4 text-green-500" />
        ) : (
          <WifiOff className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm font-medium ${isOnline ? "text-green-500" : "text-red-500"}`}>
          {isOnline ? "ONLINE" : "OFFLINE"}
        </span>
        {isOnline && (
          <>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-red-400" />
              <span className="text-white text-sm font-semibold">{totalPlayers}</span>
              <span className="text-white/50 text-sm">jugadores</span>
            </div>
          </>
        )}
      </div>

      {/* IP Button */}
      <button
        onClick={() => copyToClipboard("fresa.top", "java")}
        className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-full px-4 py-2.5 transition-all group"
      >
        <code className="text-red-400 text-sm font-mono">fresa.top</code>
        {copiedJava ? (
          <Check className="w-3.5 h-3.5 text-green-500" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-red-400/60 group-hover:text-red-400" />
        )}
      </button>
    </div>
  )
}
