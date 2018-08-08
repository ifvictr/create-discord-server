# [create-discord-server](https://www.npmjs.com/package/create-discord-server)

Set up an entire Discord server from a configuration file.

## Installation

```
# Use npm…
$ npm i -g create-discord-server

# …or Yarn
$ yarn global add create-discord-server

# …or npx (for one-off uses)
$ npx create-discord-server [options]
```

## Usage

```
Usage: create-discord-server [options]

Set up an entire Discord server from a configuration file.

Options:

  -V, --version         output the version number
  -f, --file <name>     File containing server configuration
  -i, --server-id <id>  ID of the server to set up
  -t, --token <string>  Token to use when connecting to Discord API
  -h, --help            output usage information
```

## Setup

### Obtaining the token

1. Go to https://discordapp.com/developers/applications/ and click on `Create an application`.
2. After the application is created, click on `Settings > Bot` and you will find the token under the Build-A-Bot section. This will be used for the `token` setting.

### Adding the bot to your server

create-discord-server sets up your server through Discord's API, which is accessible through a Discord bot. To learn how to add a bot to your server, go to: https://github.com/jagrosh/MusicBot/wiki/Adding-Your-Bot-To-Your-Server.

### Granting the bot permission

Initially, the bot will only have the permissions of a regular user. You will need to grant the bot additional permissions via a custom role. The Discord team has written instructions on how to do so here: https://support.discordapp.com/hc/en-us/articles/206029707-How-do-I-set-up-Permissions-. Give the bot permissions based on your use case (e.g. setting up channels = grant permission to manage channels).

After all the above has been completed, run `create-discord-server` and you're done!

## License

[MIT](LICENSE.txt)
