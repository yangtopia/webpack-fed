const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  devServer: {
    static: path.join(__dirname, 'build'),
    port: 3001,
    open: false,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  },
};
