let handler = async (m, { conn }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (!(id in conn.tebakkabupaten)) throw false
    let json = conn.tebakkabupaten[id][1]
    conn.sendButton(m.chat, '```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', author, null, [
        ['nyerah', 'menyerah']
    ], m)
}
handler.command = /^hint$/i

handler.limit = true

export default handler