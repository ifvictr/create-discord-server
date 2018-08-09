# [create-discord-server](https://www.npmjs.com/package/create-discord-server)

Set up an entire Discord server from a configuration file.

## Installation

```bash
# Use npm…
$ npm i -g create-discord-server

# …or Yarn
$ yarn global add create-discord-server

# …or npx (for one-off uses)
$ npx create-discord-server [options]
```

## Usage

```bash
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

### Populating the configuration file

Below is a detailed description of all the configurations that can be set. If a key isn't used, it can be omitted.

#### `server` (`object`)

- `afkTimeout` (`number`): Move user into AFK after x seconds (60, 300, 900, 1800, 3600)
- `explicitContentFilter` (`number`): The level of the explicit content filter (0-2)
- `icon` (`string`): Filepath of the server icon
- `name` (`string`): Name of the server
- `region` (`string`): Region of the server
- `splash` (`string`): Filepath of the server splash
- `verificationLevel` (`number`): The level of security in the server (0-4)

#### `channels` (`array`)

Each value needs to be a channel name (`string`) or an object following the below structure:

- `name` (`string`): Name of the channel
- `overwrites` (`array`): Permission overwrites
- `reason` (`string`): Why this channel exists
- `type` (`string`): Type of channel (category, text, voice)

#### `emojis` (`array`)

- `image` (`string`): Filepath of the emoji
- `name` (`string`): Name of the emoji
- `reason` (`string`): Why this emoji exists
- `roles` (`array`): Roles to limit the emoji to

#### `roles` (`array`)

Each value needs to be a role name (`string`) or an object following the below structure:

- `color` (`string`): Hex color of the role
- `hoist` (`boolean`): If this role is pinned in the user listing
- `mentionable` (`boolean`): If the role can be mentioned
- `name` (`string`): Name of the role
- `permissions` (`array`): Permissions of the role
- `position` (`number`): Position of this role

You can also refer to the [example config](example/config.json) to get an idea of how to set up your config.

### Obtaining the server ID

<https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID->

### Obtaining the token

1. Go to <https://discordapp.com/developers/applications/> and click on `Create an application`.
2. After the application is created, click on `Settings > Bot` and you will find the token under the Build-A-Bot section. This will be used for the `token` setting.

### Adding the bot to your server

create-discord-server sets up your server through Discord's API, which is accessible through a Discord bot. The following guide will walk you through how to add it to your server: <https://github.com/jagrosh/MusicBot/wiki/Adding-Your-Bot-To-Your-Server>

### Granting the bot permission

Initially, the bot will only have the permissions of a regular user. You will need to grant the bot additional permissions via a custom role. The Discord team has written instructions on how to do so here: <https://support.discordapp.com/hc/en-us/articles/206029707-How-do-I-set-up-Permissions->. Give the bot permissions based on your use case (e.g. setting up channels = grant permission to manage channels).

After all of the above has been completed, run `create-discord-server` with your token and server ID, and you're finished!

## License

[MIT](LICENSE.txt)