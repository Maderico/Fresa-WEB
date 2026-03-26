"use client"

import { Ban, Vote, ShoppingCart, Music2, ExternalLink, Tv } from "lucide-react"

const sections = [
  {
    id: "baneos",
    title: "BANEOS",
    subtitle: "// SISTEMA DE SANCIONES",
    description: "Consulta el historial de sanciones y baneos del servidor. Mantemos una comunidad segura y libre de hackers.",
    icon: Ban,
    features: ["Lista de baneados", "Historial de sanciones", "Sistema anti-cheat"],
    buttonText: "VER BANEOS",
    buttonLink: "https://bans.fresa.top",
    accentColor: "red",
  },
  {
    id: "votar",
    title: "VOTAR",
    subtitle: "// APOYA AL SERVIDOR",
    description: "Vota diariamente y recibe recompensas exclusivas. Ayuda a que mas jugadores descubran Fresa Network.",
    icon: Vote,
    features: ["Recompensas diarias", "Rangos por votos", "Keys exclusivas"],
    buttonText: "VOTAR AHORA",
    buttonLink: "https://vote.fresa.top",
    accentColor: "green",
  },
  {
    id: "tienda",
    title: "TIENDA",
    subtitle: "// RANGOS Y EXTRAS",
    description: "Obtiene rangos VIP, cosmeticos y beneficios exclusivos para mejorar tu experiencia de juego.",
    icon: ShoppingCart,
    features: ["Rangos Premium", "Cosmeticos unicos", "Kits especiales"],
    buttonText: "IR A LA TIENDA",
    buttonLink: "https://tienda.fresa.top",
    accentColor: "orange",
  },
  {
    id: "tiktok",
    title: "TIKTOK",
    subtitle: "// SIGUENOS",
    description: "Mira nuestros mejores momentos, clips epicos y contenido exclusivo del servidor.",
    icon: Music2,
    features: ["Clips diarios", "Momentos epicos", "Concursos"],
    buttonText: "SEGUIR EN TIKTOK",
    buttonLink: "https://tiktok.com/@fresanetwork",
    accentColor: "pink",
  },
  {
    id: "twitch",
    title: "TWITCH",
    subtitle: "// STREAMS EN VIVO",
    description: "Mira los directos de madericoo jugando en Fresa Network. Streams, eventos y mucha diversion.",
    icon: Tv,
    features: ["Streams en vivo", "Eventos especiales", "Sorteos exclusivos"],
    buttonText: "VER EN TWITCH",
    buttonLink: "https://twitch.tv/madericoo",
    accentColor: "purple",
  },
]

const accentStyles = {
  red: {
    iconBg: "bg-red-500/20",
    iconColor: "text-red-500",
    border: "border-red-500/20 hover:border-red-500/40",
    button: "bg-red-600 hover:bg-red-700",
    dot: "bg-red-500",
  },
  green: {
    iconBg: "bg-green-500/20",
    iconColor: "text-green-500",
    border: "border-green-500/20 hover:border-green-500/40",
    button: "bg-green-600 hover:bg-green-700",
    dot: "bg-green-500",
  },
  orange: {
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
    border: "border-orange-500/20 hover:border-orange-500/40",
    button: "bg-orange-600 hover:bg-orange-700",
    dot: "bg-orange-500",
  },
  pink: {
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-500",
    border: "border-pink-500/20 hover:border-pink-500/40",
    button: "bg-pink-600 hover:bg-pink-700",
    dot: "bg-pink-500",
  },
  purple: {
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-500",
    border: "border-violet-500/20 hover:border-violet-500/40",
    button: "bg-violet-600 hover:bg-violet-700",
    dot: "bg-violet-500",
  },
}

export function SectionsGrid() {
  return (
    <section className="py-16 px-4 bg-black/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">EXPLORA FRESA</h2>
          <p className="text-white/50">// DESCUBRE TODO LO QUE OFRECEMOS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {sections.map((section) => {
            const styles = accentStyles[section.accentColor as keyof typeof accentStyles]
            return (
              <div
                key={section.id}
                id={section.id}
                className={`bg-black/40 rounded-xl border ${styles.border} p-6 flex flex-col transition-all duration-300 hover:bg-black/60`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${styles.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <section.icon className={`w-6 h-6 ${styles.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">{section.title}</h3>
                <p className="text-white/40 text-xs font-mono mb-4">{section.subtitle}</p>

                {/* Description */}
                <p className="text-white/60 text-sm mb-4 flex-1">{section.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 ${styles.dot} rounded-full`} />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <a
                  href={section.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 ${styles.button} text-white font-bold py-3 px-4 rounded-lg transition-all hover:scale-[1.02] text-sm`}
                >
                  {section.buttonText}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
