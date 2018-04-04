// Read the `README`, each target has an full explanation of their settings.

module.exports = {
  targets: {
    express: {
      excludeModules: ['wootils/node/logger'],
    },
    webappcss: {
      css: {
        modules: true,
        inject: true,
      },
    },
    webappconfig: {
      configuration: {
        enabled: true,
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
