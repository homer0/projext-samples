const { Jimpex } = require('jimpex');
const useJimpex = require('projext-plugin-rollup/jimpex');

// Define the Jimpex app
class DevApp extends Jimpex {
  boot() {
    // If this is not defined, Jimpex throws an error.
  }
}

// Define the port for the server.
const port = 2509;
// Instantiate the app and send the port on the configuration.
const app = new DevApp(true, {
  configuration: {
    default: {
      port,
    },
  },
});
/**
 * Implement the dev middleware by telling projext that the target `webapp` will be served by the
 * `jimpexwebapp` target.
 */
useJimpex(app, 'webapp', 'jimpexwebapp');

// Start the app.
app.start();
