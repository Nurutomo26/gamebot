import util from 'util'
import path from 'path'
import { spawn } from 'child_process'

let handler  = async (m, { conn, text }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 text,
await conn.sendFile(m.chat, global.API('xteam', '/tahta', { text, }, 'APIKEY'), 'tahta.png', 'Nih udah jadi harta tahtamu...', m)
}
handler.help = ['tahta2'].map(v => v + ' <teks>')
handler.tags = ['nulis']

handler.command = /^tahta2$/i
handler.fail = null
handler.limit = true

export default handler
