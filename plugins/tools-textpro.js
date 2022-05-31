import fetch from 'node-fetch'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/textpro')))).json()
  if (!effect) throw '*Daftar Efek*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efek *${effect}* tidak ditemukan`
  let [text, text2, ...text3] = txt.replace(effect, '').trimStart().split(split)
  text3 = text3.join(split)
  let url = global.API('xteam', '/textpro/' + effect, { text, text2, text3 }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'textpro.jpg', `*TEXT PRO*\n*Efek:* ${effect}`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['textpro'].map(v => v + ' <efek> <teks>|[teks2]|[teks3]')
handler.tags = ['tools']
handler.command = /^(textpro)$/i

export default handler
