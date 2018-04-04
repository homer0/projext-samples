module.exports = {
  targets: {
    express: {
      excludeModules: ['wootils/node/logger'],
    },
    webappconfig: {
      configuration: {
        enabled: true,
      },
    },
    webappcss: {
      css: {
        modules: true,
        inject: true,
      },
    },
    webappmodules: {
      includeModules: ['hello'],
    },
  },
  copy: {
    enabled: true,
    items: ['package.json'],
    copyOnBuild: {
      targets: ['jimpexwebapp'],
    },
  },
};
