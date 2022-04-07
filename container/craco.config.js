const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  devServer: {
    static: path.join(__dirname, 'build'),
    port: 3000,
    hot: false,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          app1: 'app1@http://localhost:3001/remoteEntry.js',
          app2: 'app2@http://localhost:3002/remoteEntry.js',
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
