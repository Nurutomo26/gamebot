import fetch from 'node-fetch'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json').json()
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.susunkata[id][0])
        throw false
    }
    let json = await susunkata()
    let caption = `
Soal: ${json.soal}
Tipe: ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.susunkata[id] = [
        await conn.sendButton(m.chat, caption, author, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['Main Lagi', '/susunkata']
            ], conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

export default handler

const buttons = [
    ['Bantuan', '/hint'],
    ['Menyerah', 'menyerah']
]