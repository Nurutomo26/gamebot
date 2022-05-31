import fetch from 'node-fetch'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await fetch(global.API('xteam', '/photooxy', {}, 'APIKEY'))
  if (!effect) throw '*Daftar Efek*\n\n' + effects.effectphotooxy((a, b) => a - b) + '\n\n' + efects.effectphotooxy_2((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efek *${effect}* tidak ditemukan`
  let [text, text2, ...text3] = txt.replace(effect, '').trimStart().split(split)
  text3 = text3.join(split)
  let url = global.API('xteam', '/photooxy/' + effect, { text, text2, text3 }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'photooxy.jpg', `*PHOTO OXY*\n*Efek:* ${effect}`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['photooxy'].map(v => v + ' <efek> <teks>|[teks2]|[teks3]')
handler.tags = ['tools']
handler.command = /^(photooxy)$/i

export default handler
