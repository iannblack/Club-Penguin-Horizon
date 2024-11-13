const fs = require('fs');
const path = require('path');

const rspack = require('@rspack/core');

const BannerPlugin = require('./webpack_plugins/BannerPlugin');
const WebpackObfuscator = require('webpack-obfuscator');

const timestamp = +Date.now();

let config = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        yukon: './src/Game.js',
    },
    output: {
        filename: 'yukon.js',
        path: path.resolve(__dirname, 'assets/scripts/client'),
    },
    optimization: {
        minimize: false,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname),
            publicPath: '/',
            watch: {
                ignored: [
                    path.resolve(__dirname, '.git'),
                    path.resolve(__dirname, 'node_modules'),
                ],
            },
        },
        devMiddleware: {
            writeToDisk: true,
        },
        proxy: {
            '/world/login': {
                target: 'http://localhost:6111',
                pathRewrite: { '^/world/login': '' },
                ws: true,
            },

            '/world/blizzard': {
                target: 'http://localhost:6112',
                pathRewrite: { '^/world/blizzard': '' },
                ws: true,
            },

            '/world/sleet': {
                target: 'http://localhost:6113',
                pathRewrite: { '^/world/sleet': '' },
                ws: true,
            },

            '/create/scripts/php': 'http://localhost:80',
        },
        host: '0.0.0.0',
        port: 8080,
        hot: false,
	allowedHosts: 'all',
	    client: {
        overlay: false,  // Esto desactiva el overlay que muestra errores en la UI.
        logging: 'none',  // Esto desactiva todo tipo de logging en la consola.
    },
    },
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@games': path.resolve(__dirname, 'src/scenes/games'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos'),
            '@parties': path.resolve(__dirname, 'src/scenes/parties'),
            '@interface': path.resolve(__dirname, 'src/scenes/interface'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new rspack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            TIMESTAMP: timestamp,
            GIT_HASH: JSON.stringify(() => {
                try {
                    return require('child_process')
                        .execSync('git rev-parse --short HEAD')
                        .toString()
                        .trim();
                } finally {
                    return 'hash';
                }
            }),
        }),
    ],
};

module.exports = (env, argv) => {
    if (argv.mode !== 'production') {
        return config;
    }

    config.output = {
        filename: 'assets/scripts/client/[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    };

    config.optimization.minimize = true;
    config.optimization.minimizer = [
        new rspack.SwcJsMinimizerRspackPlugin({
            format: {
                comments: false,
            },
        }),
    ];

    if (!env.staging) {
        config.plugins.push(
            new rspack.HtmlRspackPlugin({
                filename: 'index.html',
                inject: false,
                template: 'index.ejs',
                templateParameters: {
                    timestamp: timestamp.toString(),
                },
            }),
            // MIT License do not remove
            new BannerPlugin({
                banner: fs.readFileSync('./LICENSE', 'utf-8'),
            }),
            new rspack.DefinePlugin({
                CDN_URL: JSON.stringify('https://cdn.cpjourney.net/'),
            })
        );
    }

    if (env.obfuscate === 'true') {
        config.plugins.push(
            new WebpackObfuscator(
                {
                    rotateStringArray: true,
                    reservedStrings: ['s*'],
                },
                []
            )
        );
    }

    if (env.staging) {
        config.plugins.push(
            new rspack.DefinePlugin({
                STAGING: true,
                CDN_URL: JSON.stringify('https://cpj-staging.cpjourney.net/'),
            }),
            // MIT License do not remove
            new BannerPlugin({
                banner: fs.readFileSync('./LICENSE', 'utf-8'),
            })
        );
    }

    return config;
};
