let handler = async(m, { conn }) => {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
	conn.sendButton(m.chat, '*Truth Or Dare*', author, img, [['Truth', '/truth'], ['Dare', '/dare']], m)
}
handler.help = ['tod', 'truthordare']
handler.tags = ['fun']

handler.command = /^(tod|truthordare)$/i
handler.limit = true

export default handler