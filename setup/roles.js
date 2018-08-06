const chalk = require('chalk')

module.exports = (roles, guild, spinner) => {
    return Promise.all(roles.map(async role => {
        try {
            if (typeof role === 'string') {
                role = { name: role }
            }
            const createdRole = await guild.createRole(role, role.reason)
            spinner.succeed(`Created ${chalk.bgHex(createdRole.hexColor)(createdRole.name)} role`)
        }
        catch (e) {
            spinner.fail(`Failed to create ${role.name} role`)
        }
    }))
}