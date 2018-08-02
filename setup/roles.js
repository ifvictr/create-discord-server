module.exports = (roles, guild) => {
    roles.forEach(role => {
        if(typeof role === 'string') {
            role = { name: role }
        }
        guild.createRole(role, role.reason)
    })
}