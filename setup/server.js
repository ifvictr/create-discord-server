const capitalize = str => str[0].toUpperCase() + str.substring(1)

module.exports = (server, guild) => {
    // Was throwing a `TypeError: Cannot read property 'edit' of undefined`
    // return Promise.all(Object.keys(server).map(key => {
    //     const fn = guild[`set${capitalize(key)}`] // Dynamically find the correct method
    //     if (typeof fn !== 'function') {
    //         return
    //     }
    //     return fn(server[key])
    // }))
    const promises = []

    if (server.afkTimeout) {
        promises.push(guild.setAFKTimeout(server.afkTimeout))
    }
    if (server.explicitContentFilter) {
        promises.push(guild.setExplicitContentFilter(server.explicitContentFilter))
    }
    if (server.icon) {
        promises.push(guild.setIcon(server.icon))
    }
    if (server.name) {
        promises.push(guild.setName(server.name))
    }
    if (server.region) {
        promises.push(guild.setRegion(server.region))
    }
    if (server.splash) {
        promises.push(guild.setSplash(server.splash))
    }
    if (server.verificationLevel) {
        promises.push(guild.setVerificationLevel(server.verificationLevel))
    }

    return Promise.all(promises)
}