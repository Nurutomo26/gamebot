let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
  m.reply('Sukses Mengganti Nama Grup!')
}

handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^setname$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

export default handler
