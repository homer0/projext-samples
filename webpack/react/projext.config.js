module.exports = {
  targets: {
    webapphot: {
      hot: true,
    },
    expresswebappssr: {
      bundle: true,
      excludeModules: ['wootils/node/logger'],
      includeTargets: ['webapp'],
    },
  },
};
