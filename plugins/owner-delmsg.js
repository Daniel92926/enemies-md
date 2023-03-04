let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw ` ${usedPrefix}list${which} per vedere la lista`
let msgs = global.db.data.msgs
if (!text in msgs) throw `non registrato`
delete msgs[text]
m.reply(`ok`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler