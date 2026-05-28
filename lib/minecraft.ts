const API_URL = process.env.NEXT_PUBLIC_MC_API_URL

export type ServerStatus = {
  online: boolean
  players: { online: number; max: number; list: { name: string; id: string }[] }
  version: string
  motd: string
}

export type Player = {
  rank: number
  name: string
  uuid: string
  kills: number
  deaths: number
  playtime: number  // en minutos
  balance?: number
}

export async function getServerStatus(): Promise<ServerStatus> {
  const res = await fetch(`${API_URL}/api/status`, { next: { revalidate: 30 } })
  return res.json()
}

export async function getTopPlayers(): Promise<Player[]> {
  const res = await fetch(`${API_URL}/api/top`, { next: { revalidate: 60 } })
  return res.json()
}

export async function getPlayerStats(name: string): Promise<Player> {
  const res = await fetch(`${API_URL}/api/players/${name}`)
  return res.json()
}

// Avatar de la skin del jugador
export const getPlayerAvatarUrl = (uuid: string) =>
  `https://mc-heads.net/avatar/${uuid}/64`