#!/usr/bin/env node
const program = require('commander')
const Discord = require('discord.js')
const fs = require('fs')
const setup = require('./setup')
const package = require('./package')

const findParam = name => program[name] || config[name] // Search in config file if parameter isn't specified in command

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

const serverId = findParam('serverId')
if(!serverId) {
    console.log('No server ID was found')
    process.exit(1)
}
const token = findParam('token')
if(!token) {
    console.log('No token was found')
    process.exit(1)
}

const client = new Discord.Client()
client.login(token)

client.on('ready', () => {
    const workingGuild = client.guilds.get(serverId)
    const excludedParams = ['serverId', 'token']
    Object.keys(config).forEach(key => {
        if(excludedParams.includes(key)) {
            return
        }
        const setupFn = setup[key]
        if(typeof setupFn !== 'function') {
            console.log(`\`${key}\` isn't a valid config option, skipping`)
            return
        }
        setupFn(config[key], workingGuild)
    })
    // TODO: Disconnect client on completion
    // client.destroy()
})