const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  devServer: {
    port: 3002,
    open: false,
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app2',
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
