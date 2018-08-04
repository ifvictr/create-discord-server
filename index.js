#!/usr/bin/env node
const program = require('commander')
const Discord = require('discord.js')
const fs = require('fs')
const setup = require('./setup')
const package = require('./package')

const findSetting = key => program[key] || config[key] // Search in config file if parameter isn't specified in command

program
    .version(package.version)
    .description(package.description)
    .option('-f, --file <name>', 'File containing server configuration')
    .option('-i, --server-id <id>', 'ID of the server to set up')
    .option('-t, --token <string>', 'Token to use when connecting to Discord API')
    .parse(process.argv)

if(!program.file) {
    console.log('`file` parameter is missing')
    process.exit(1)
}
const config = JSON.parse(fs.readFileSync(program.file))

const serverId = findSetting('serverId')
if(!serverId) {
    console.log('No server ID was found')
    process.exit(1)
}
const token = findSetting('token')
if(!token) {
    console.log('No token was found')
    process.exit(1)
}

const client = new Discord.Client()
client.login(token)

client.on('ready', async () => {
    const workingGuild = client.guilds.get(serverId)
    const excludedKeys = ['serverId', 'token']
    const settingsToProcess = Object.keys(config).filter(key => {
        return !excludedKeys.includes(key)
            && (typeof config[key] === 'object' && Object.keys(config[key]).length > 0)
            && typeof setup[key] === 'function' // Check if setting has a handler
    })
    await Promise.all(settingsToProcess.map(key => {
        const setupFn = setup[key]
        const setting = config[key]
        return setupFn(setting, workingGuild)
    }))
    client.destroy()
})