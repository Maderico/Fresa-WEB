"use client"

import useSWR from "swr"
import { Users, MessageCircle, Headphones } from "lucide-react"

interface DiscordWidget {
  id: string
  name: string
  instant_invite: string
  presence_count: number
  members: Array<{
    id: string
    username: string
    avatar_url: string
    status: string
  }>
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function DiscordSection() {
  const { data: discordData, isLoading } = useSWR<DiscordWidget>(
    "https://discord.com/api/guilds/1483609934435323966/widget.json",
    fetcher,
    { refreshInterval: 60000 }
  )

  return (
    <section id="discord" className="py-16 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Discord Info Card */}
          <div className="flex-1 bg-gradient-to-br from-[#5865F2]/20 to-black/40 rounded-2xl border border-[#5865F2]/30 p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#5865F2] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Comunidad Discord</h2>
                <p className="text-white/60">Fresa Network</p>
              </div>
            </div>

            {isLoading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#5865F2] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-green-500" />
                      <span className="text-white/60 text-sm">En linea</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{discordData?.presence_count || 0}</p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageCircle className="w-4 h-4 text-[#5865F2]" />
                      <span className="text-white/60 text-sm">Servidor</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{discordData?.name || "Fresa"}</p>
                  </div>
                </div>

                {/* Online Members Preview */}
                <div className="flex-1 mb-6">
                  <p className="text-white/60 text-sm mb-3">Miembros conectados</p>
                  <div className="flex flex-wrap gap-2">
                    {discordData?.members?.slice(0, 8).map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-1.5 border border-white/5"
                      >
                        <div className="relative">
                          <img
                            src={member.avatar_url}
                            alt={member.username}
                            className="w-6 h-6 rounded-full"
                          />
                          <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black ${
                            member.status === "online" ? "bg-green-500" :
                            member.status === "idle" ? "bg-yellow-500" :
                            member.status === "dnd" ? "bg-red-500" : "bg-gray-500"
                          }`} />
                        </div>
                        <span className="text-white/80 text-sm">{member.username}</span>
                      </div>
                    ))}
                    {(discordData?.members?.length || 0) > 8 && (
                      <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 py-1.5 border border-white/5">
                        <span className="text-white/50 text-sm">+{(discordData?.members?.length || 0) - 8} mas</span>
                      </div>
                    )}
                  </div>
                </div>

                <a
                  href={discordData?.instant_invite || "https://discord.gg/fresanetwork"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-[1.02]"
                >
                  <Headphones className="w-5 h-5" />
                  Unirse al Discord
                </a>
              </>
            )}
          </div>

          {/* Discord Widget Embed */}
          <div className="lg:w-[350px] rounded-2xl overflow-hidden border border-[#5865F2]/30">
            <iframe
              src="https://discord.com/widget?id=1483609934435323966&theme=dark"
              width="100%"
              height="500"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="border-0 bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
