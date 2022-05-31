import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  let res = await fetch(global.API('zahir', '/api/wikipedia', { search: text }, 'apikey'))
  let json = await res.json()
  if (!json.result) throw 'Fitur mengalami error!'
  let capt = `${json.title}\n\n${json.result}`
  m.reply(capt)
  else throw json
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

export default handler
