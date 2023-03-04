import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
🛡️⃟🏴‍☠𝐌ΞИ𝐔🛡️⃟🏴‍☠

┌──⭓ *Gruppo*
│⭔ .link
│⭔ .kick / addio / ban @
│⭔ .kicknum +92
│⭔ .attiva/disabilita benvenuto
│⭔ .attiva/disabilita antilink
│⭔ .attiva/disabilita antilinkhttps
│⭔ .attiva/disabilita detect
│⭔ .attiva/disabilita antielimina
│⭔ .attiva/disabilita antiviewonce
│⭔ .attiva/disabilita antitrava
│⭔ .attiva/disabilita antipaki
│⭔ .attiva/disabilita modoadmin
│⭔ .reimposta
│⭔ .hidetag 
│⭔ .tagall / marcar
│⭔ .promuovi / mettiadmin @
│⭔ .retrocedi / togliadmin @
│⭔ .gruppo aperto / chiuso
│⭔ .setwelcome
│⭔ .setbye
│⭔ .inattivi
│⭔ .ping
│⭔ .menu
└───────⭓

▀▄▀▄▀▄ 🛡️⃟🏴‍☠️ ▄▀▄▀▄▀

┌──⭓ *Media*
│⭔ .attp
│⭔ .ttp
│⭔ .dado
│⭔ .sticker / s
│⭔ .emojimix (emoji+emoji)
│⭔ .play
│⭔ .playdoc  
│⭔ .gtts
│⭔ .whatmusic (audio)
│⭔ .qrcode (testo)
│⭔ .styletext (testo)
│⭔ .tovideo
│⭔ .togif
│⭔ .tomp3
│⭔ .toaudio
└───────⭓

▀▄▀▄▀▄ 🛡️⃟🏴‍☠️ ▄▀▄▀▄▀

┌──⭓ *Speciali*
│⭔ .gay @
│⭔ .puttana @
│⭔ .lesbica @
│⭔ .dox @
│⭔ .topgays
│⭔ .topnazi
│⭔ .calc (1+1)
│⭔ .abdul
│⭔ .drix
│⭔ .roax
│⭔ .poison
│⭔ .maschere
│⭔ .drasy
│⭔ .polter
│⭔ .autoadmin
└───────⭓
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}