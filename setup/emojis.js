module.exports = (emojis, guild) => {
    return Promise.all(emojis.map(emoji => {
        return guild.createEmoji(
            emoji.image,
            emoji.name,
            emoji.roles,
            emoji.reason
        )
    }))
}