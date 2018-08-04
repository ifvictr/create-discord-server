module.exports = async (emojis, guild, cb) => {
    await Promise.all(emojis.map(emoji => {
        return guild.createEmoji(
            emoji.image,
            emoji.name,
            emoji.roles,
            emoji.reason
        )
    }))
    cb()
}