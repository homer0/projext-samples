module.exports = {
  targets: {
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
  },
  copy: {
    enabled: true,
    items: ['package.json'],
    copyOnBuild: {
      targets: ['jimpexwebapp'],
    },
  },
};
