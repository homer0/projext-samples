import { PLATFORM } from 'aurelia-pal';

export const configure = (aurelia) => {
  aurelia.use.standardConfiguration();
  return aurelia.start()
  .then(() => aurelia.setRoot(PLATFORM.moduleName('components/main/main')));
};
