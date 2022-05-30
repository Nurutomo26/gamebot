let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    if (m.messageStubType === 68) { //Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        this.sendMessage(m.chat, ('*VIRUS DETECTED!!!*\n\n' + require('util').format(log)).padEnd(65536, '\n'), 'extendedTextMessage')
        await this.modifyChat(m.chat, 'clear', { includeStarred: false }).catch(console.log)
        if (isBotAdmin && isAdmin && bot.restrict) {
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Fitur pembatas dinonaktifkan!, bot akan mengeluarkan peserta!')
    }
}

module.exports = handler
