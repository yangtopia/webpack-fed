const {ModuleFederationPlugin} = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  devServer: {
    port: 3003,
    open: false,
    hot: false,
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app3',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        shared: {
          react: {singleton: true, eager: true, requiredVersion: deps.react},
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
          'shared-zustand': {
            singleton: true,
            eager: true,
            requiredVersion: deps.zustand,
          }
        },
      }),
    ],
  },
};
