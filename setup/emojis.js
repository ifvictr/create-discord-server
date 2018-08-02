module.exports = (emojis, guild) => {
    emojis.forEach(emoji => {
        guild.createEmoji(
            emoji.image,
            emoji.name,
            emoji.roles,
            emoji.reason
        )
    })
}