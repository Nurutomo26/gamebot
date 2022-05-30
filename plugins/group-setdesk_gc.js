let handler = async (m, { conn, args }) => {
 await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  m.reply('Sukses Mengganti Deskripsi Grup!')
}

handler.help = ['setdesk <text>']
handler.tags = ['group']
handler.command = /^setdesk$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

export default handler
