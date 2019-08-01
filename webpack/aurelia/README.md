# projext - samples - webpack - Aurelia

This project is really small, as it only includes one target, and it shows you how to easily start an [Aurelia](https://aurelia.io) app using the [webpack](https://webpack.js.org/) [build engine](https://yarnpkg.com/en/package/projext-plugin-webpack) and the [Aurelia plugin for it](https://yarnpkg.com/en/package/projext-plugin-webpack-aurelia).

The app takes advantage of the projext zero configuration feature and it doesn't even have a configuration.

There's an index.html file that on most sample projects can be omitted, but in the case of Aurelia, needs to be manually created: You need to add an `aurelia-app` attribute with the name (without extension) of your JS entry file (Similar to the `ng-app` for AngularJS).

> Yes, next version of the plugin will automatically add it for targets without HTML files.

The app has two components:

1. `main`: It adds the basic styles for the page.
2. `hello`: Shows a _"hello message"_ with the webpack and Aurelia logos.

Before testing the app, don't forget to install the dependencies:

```bash
yarn
# or npm i
```

> As you saw above, I'm using `yarn` for running the commands, you can use `npm`/`npx`, it doesn't matter.

Now, you can build the app using this command:

```bash
yarn run build
```

And test it on your browser with this command:

```bash
yarn start
```
