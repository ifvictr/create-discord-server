module.exports = (channels, guild) => {
    channels.forEach(channel => {
        if(typeof channel === "string") {
            channel = { name: channel }
        }
        guild.createChannel(
            channel.name,
            channel.type,
            channel.overwrites,
            channel.reason
        )
    })
}