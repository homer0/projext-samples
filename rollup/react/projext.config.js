module.exports = {
  targets: {
    expresswebappssr: {
      bundle: true,
      excludeModules: ['wootils/node/logger'],
      includeTargets: ['webapp'],
    },
  },
};
