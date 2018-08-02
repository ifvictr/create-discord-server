module.exports = (server, guild) => {
    // TODO: Refactor to be non-repetitive
    if(server.name) {
        guild.setName(server.name)
    }
    if(server.icon) {
        guild.setIcon(server.icon)
    }
    if(server.splash) {
        guild.setSplash(server.splash)
    }
    if(server.region) {
        guild.setRegion(server.region)
    }
    if(server.verificationLevel) {
        guild.setVerificationLevel(server.verificationLevel)
    }
}