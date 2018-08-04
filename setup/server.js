module.exports = async (server, guild, cb) => {
    // TODO: Refactor to be non-repetitive
    if(server.name) {
        await guild.setName(server.name)
    }
    if(server.icon) {
        await guild.setIcon(server.icon)
    }
    if(server.splash) {
        await guild.setSplash(server.splash)
    }
    if(server.region) {
        await guild.setRegion(server.region)
    }
    if(server.verificationLevel) {
        await guild.setVerificationLevel(server.verificationLevel)
    }
    cb()
}