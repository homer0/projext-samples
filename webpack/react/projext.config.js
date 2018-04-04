module.exports = {
  targets: {
    webapphot: {
      hot: true,
    },
    expresswebappssr: {
      bundle: true,
      excludeModules: ['wootils/node/logger'],
      frameworkOptions: {
        ssr: ['webapp'],
      },
    },
  },
};
