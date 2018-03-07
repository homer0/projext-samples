module.exports = {
  targets: {
    webapp: {
      type: 'browser',
      createFolder: true,
    },
    nodeapp: {
      type: 'node',
      createFolder: true,
    },
    express: {
      type: 'node',
      bundle: true,
      createFolder: true,
    },
    expresswebapp: {
      type: 'node',
      createFolder: true,
    },
    jimpexwebapp: {
      type: 'node',
      createFolder: true,
    },
    weblib: {
      type: 'browser',
      createFolder: true,
      library: true,
      entry: {
        production: 'index.js',
        development: 'playground.js',
      },
      output: {
        default: {
          js: '[target-name].js',
        },
        development: null,
        production: null,
      },
    },
  },
};
