let handler = async(m, { conn }) => {
	conn.sendButton(m.chat, '*Truth Or Dare*', author, ['Truth', '/truth', 'Dare', '/dare'], m)
}
handler.help = ['tod', 'truthordare']
handler.tags = ['fun']

handler.command = /^(tod|truthordare)$/i
handler.limit = true

export default handler