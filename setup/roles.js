module.exports = async (roles, guild, cb) => {
    await Promise.all(roles.map(role => {
        if(typeof role === 'string') {
            role = { name: role }
        }
        return guild.createRole(role, role.reason)
    }))
    cb()
}