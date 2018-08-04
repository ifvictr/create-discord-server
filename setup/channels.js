module.exports = async (channels, guild, cb) => {
    await Promise.all(channels.map(channel => {
        if(typeof channel === 'string') {
            channel = { name: channel }
        }
        return guild.createChannel(
            channel.name,
            channel.type,
            channel.overwrites,
            channel.reason
        )
    }))
    cb()
}