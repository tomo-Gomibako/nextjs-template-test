const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  staticDirs: ['../public'],
  core: {
    builder: 'webpack5'
  },
  addons: ['@storybook/preset-typescript'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src')
    }
    return config
  }
}
