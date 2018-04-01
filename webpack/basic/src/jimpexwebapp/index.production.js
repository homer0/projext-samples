const { Jimpex } = require('jimpex');

// Define the Jimpex app
class DevApp extends Jimpex {
  boot() {

  }
}

// Create the app
const port = 2509;
const app = new DevApp(true, {
  statics: {
    route: '/',
    folder: '../webapp',
  },
  configuration: {
    default: {
      port,
    },
  },
});

app.start();
