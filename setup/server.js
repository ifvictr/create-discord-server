const capitalize = str => str[0].toUpperCase() + str.substring(1)

module.exports = async (server, guild, spinner) => {
    // Was throwing a `TypeError: Cannot read property 'edit' of undefined`
    // return Promise.all(Object.keys(server).map(key => {
    //     const fn = guild[`set${capitalize(key)}`] // Dynamically find the correct method
    //     if (typeof fn !== 'function') {
    //         return
    //     }
    //     return fn(server[key])
    // }))
    try {
        if (Number.isInteger(server.afkTimeout)) {
            await guild.setAFKTimeout(server.afkTimeout)
            spinner.succeed(`AFK timeout set to ${server.afkTimeout}`)
        }
        if (Number.isInteger(server.explicitContentFilter)) {
            await guild.setExplicitContentFilter(server.explicitContentFilter)
            spinner.succeed(`Explicit content filter set to ${server.explicitContentFilter}`)
        }
        if (server.icon) {
            await guild.setIcon(server.icon)
            spinner.succeed('Server icon set')
        }
        if (server.name) {
            await guild.setName(server.name)
            spinner.succeed(`Server name set to ${server.name}`)
        }
        if (server.region) {
            await guild.setRegion(server.region)
            spinner.succeed(`Server region set to ${server.region}`)
        }
        if (server.splash) {
            await guild.setSplash(server.splash)
            spinner.succeed('Server splash set')
        }
        if (Number.isInteger(server.verificationLevel)) {
            await guild.setVerificationLevel(server.verificationLevel)
            spinner.succeed(`Verification level set to ${server.verificationLevel}`)
        }
    }
    catch (e) {
        spinner.warn(`Caught an exception when configuring the server: ${e.message}`)
    }
}