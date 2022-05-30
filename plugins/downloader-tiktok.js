import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let url = json.result.link_dl1 || json.result.link_dl2 || ''
  if (!url) throw 'Gagal mengambil url download'
  let txt = `- *By:* ${json.result.name}\n- *Caption:*\n${json.result.caption}`
  await conn.sendFile(m.chat, url, 'tiktok.mp4', txt.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

export default handler
