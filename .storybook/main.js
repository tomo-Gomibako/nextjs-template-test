const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src')
    }
    return config
  }
}
