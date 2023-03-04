import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `esempio: ${usedPrefix + command} Minecraft`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `🔎 Risultato per: ${text}`
conn.sendButton(m.chat, captionn, author, link, [['prossima immagine', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
