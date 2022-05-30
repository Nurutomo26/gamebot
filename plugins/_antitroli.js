module.exports = {
    async all(m) {
        if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            m.reply('Bug Troli Detected\n\n' + require('util').format(m.key))
            // await this.clearMessage(m.chat, m.key)
            await this.modifyChat(m.chat, 'clear', { includeStarred: false }).catch(console.log)
            if (isBotAdmin && isAdmin && bot.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            } else if (!bot.restrict) return m.reply('Fitur pembatas dinonaktifkan!, bot akan mengeluarkan peserta!')
        }
    }
}
