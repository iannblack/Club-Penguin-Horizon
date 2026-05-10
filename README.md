<p align="center">
   <img alt="Club Penguin Horizon" width="600px" src="https://raw.githubusercontent.com/iannblack/Club-Penguin-Horizon/main/yukon-main/CPHorizonLogo.png">
</p>

#

<p align="center">
  <a href="https://discord.gg/UPnWKfh">
    <img
      alt="Discord"
      src="https://img.shields.io/discord/323290581063172096?color=7289DA&label=discord"
    />
  </a>
  <a href="https://github.com/iannblack/Club-Penguin-Horizon/issues">
    <img
      alt="Issue Tracker"
      src="https://img.shields.io/github/issues/iannblack/Club-Penguin-Horizon"
    />
  </a>
  <a href="./LICENSE">
    <img
      alt="License"
      src="https://img.shields.io/github/license/iannblack/Club-Penguin-Horizon"
    />
  </a>
</p>

<p align="center">A modern Club Penguin private server built with Node.js & Phaser 3.</p>

## Features :space_invader:

- :video_game: **Phaser 3 Client**: Fully-featured game client built on Phaser 3.80 with Rspack bundling.
- :electric_plug: **Plugin System**: Extensible server-side plugin architecture with 30+ built-in game plugins.
- :card_index: **Card-Jitsu**: Complete Card-Jitsu implementation with fire, water, snow elements, power cards, and ranking.
- :house: **Igloo System**: 60+ customizable igloo layouts with furniture, flooring, and music inventories.
- :shield: **Chat Filtering**: Multi-layer moderation with Perspective API integration and bad-words filtering.
- :robot: **Discord Bot**: Full Discord integration with admin commands, moderation, and server management.
- :game_die: **Mini-Games**: Sled racing, treasure hunt, mancala, and more.
- :snowflake: **Ninja & Sensei**: Complete ninja progression system with Sensei boss.
- :package: **Comprehensive Data Models**: Users, buddies, igloos, puffles, stamps, postcards, furniture, outfits, and more.
- :lock: **Security**: JWT authentication, bcrypt password hashing, IP rate limiting, and fingerprint tracking.
- :speedboat: **High Performance**: MessagePack binary protocol over Socket.IO, async-first architecture with Redis caching.

## Tech Stack

| Layer | Tech |
|---|---|
| Client | Phaser 3, Rspack, Howler, Socket.IO Client |
| Server | Node.js, Socket.IO, Babel, Sequelize |
| Database | MariaDB / MySQL + Redis |
| Search | Elasticsearch |
| Auth | JWT + bcrypt |
| Moderation | Perspective API + bad-words |
| Process | PM2 |

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MariaDB](https://mariadb.org/) or MySQL
- Redis
- Elasticsearch (optional, for logging)

### Setup

```shell
$ git clone https://github.com/iannblack/Club-Penguin-Horizon
$ cd Club-Penguin-Horizon

# Server
$ cd server
$ npm install
$ cp src/config/config.example.json src/config/config.json  # Edit with your DB credentials
$ pm2 start ecosystem.config.js

# Client
$ cd ../yukon-main
$ npm install
$ npx rspack build  # or npx rspack serve for dev
```

## Game Screenshots

<img alt="Screenshot" width="700px" src="https://user-images.githubusercontent.com/32749673/64743472-05745a00-d4f8-11e9-9eed-f3565dc2e821.png">

<img alt="Screenshot" width="700px" src="https://user-images.githubusercontent.com/32749673/64743711-d8747700-d4f8-11e9-9bab-de08090db34d.png">

<img alt="Screenshot" width="700px" src="https://user-images.githubusercontent.com/32749673/64743891-854ef400-d4f9-11e9-8d78-9d73493eb04d.png">

## Contributing

:heartpulse: Contributions are welcome!

If you have suggestions for how this project can be improved, or want to report a bug, please open an issue. We welcome any and all contributions.

Please note that in this early stage of development we cannot take requests for vanilla Club Penguin features!

## License

MIT Licensed
