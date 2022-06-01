let handler = async (m, { conn }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (!(id in conn.tebaktebakan)) throw false
    let json = conn.tebaktebakan[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hint$/i

handler.limit = true

export default handler