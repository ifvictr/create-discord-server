const capitalize = str => str[0].toUpperCase() + str.substring(1)

module.exports = (server, guild) => {
    return Promise.all(Object.keys(server).map(key => {
        const fn = guild[`set${capitalize(key)}`] // Dynamically find the correct method
        if (typeof fn !== 'function') {
            return
        }
        return fn(server[key])
    }))
}