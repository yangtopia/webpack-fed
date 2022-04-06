const {ModuleFederationPlugin} = require('webpack').container;
const path = require('path');

module.exports = {
    devServer: {
        static: path.join(__dirname, "build"),
        port: 3002,
        open: false
    },
    webpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: 'app2',
                filename: 'remoteEntry.js',
                exposes: {
                    './App': './src/App'
                },
                shared: {
                    react: {singleton: true, eager: true},
                    'react-dom': {
                        singleton: true,
                        eager: true,
                    },
                },
            }),
        ]
    }
}