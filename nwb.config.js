const StatsPlugin = require('stats-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      plugins: [
        new StatsPlugin('stats.json', {
          chunkModules: true,
          exclude: [/node_modules[\\\/]react/]
        }),
        new ManifestPlugin({
          fileName: 'asset-manifest.json',
        })
      ]
    }
  }
};
