module.exports = (channels, guild, spinner) => {
    return Promise.all(channels.map(async channel => {
        try {
            if (typeof channel === 'string') {
                channel = { name: channel }
            }
            const createdChannel = await guild.createChannel(
                channel.name,
                channel.type,
                channel.overwrites,
                channel.reason
            )
            spinner.succeed(`Created ${createdChannel.type} channel #${createdChannel.name}`)
        }
        catch (e) {
            spinner.fail(`Failed to create #${channel.name}`)
        }
    }))
}