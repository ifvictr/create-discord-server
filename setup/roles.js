module.exports = (roles, guild) => {
    return Promise.all(roles.map(role => {
        if (typeof role === 'string') {
            role = { name: role }
        }
        return guild.createRole(role, role.reason)
    }))
}