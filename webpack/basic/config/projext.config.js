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
    webappcopy: {
      copy: [
        'public/public.css',
        'public/status.html',
        {
          from: 'public/time.html',
          to: 'info/time.html',
        },
      ],
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
