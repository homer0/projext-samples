const { Jimpex } = require('jimpex');
const useJimpex = require('projext-plugin-webpack/jimpex');

// Define the Jimpex app
class DevApp extends Jimpex {
  boot() {

  }
}

// Create the app
const port = 2509;
const app = new DevApp(true, {
  configuration: {
    default: {
      port,
    },
  },
});

useJimpex(app, 'webapp', 'expresswebapp');

app.start();
