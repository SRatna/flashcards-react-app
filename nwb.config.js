var StatsPlugin = require('stats-webpack-plugin');
module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      plugins: [
        new StatsPlugin('stats.json', {
          chunkModules: true,
          exclude: [/node_modules[\\\/]react/]
        })
      ]
    }
  }
};
