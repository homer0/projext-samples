const { Jimpex } = require('jimpex');

// Define the Jimpex app
class DevApp extends Jimpex {
  boot() {
    // If this is not defined, Jimpex throws an error.
  }
}

// Define the port for the server.
const port = 2509;
// Instantiate the app.
const app = new DevApp(true, {
  /**
   * This file is only used on production builds, so it's assumed that `webapp` is already built
   * and on the parent directory, so any file request should be redirected to its folder.
   */
  statics: {
    route: '/',
    folder: '../webapp',
  },
  // Send the port.
  configuration: {
    default: {
      port,
    },
  },
});

// Start the app.
app.start();
