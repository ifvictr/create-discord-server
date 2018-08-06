module.exports = (emojis, guild, spinner) => {
    return Promise.all(emojis.map(async emoji => {
        try {
            const createdEmoji = await guild.createEmoji(
                emoji.image,
                emoji.name,
                emoji.roles,
                emoji.reason
            )
            spinner.succeed(`Created ${createdEmoji.name} emoji`)
        }
        catch (e) {
            spinner.fail(`Failed to create ${emoji.name} emoji`)
        }
    }))
}