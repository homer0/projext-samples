# projext - samples - webpack - angularjs

This project is really small, as it only includes one target, and it shows you how to easily start an [AngularJS](https://angularjs.org) app using the [webpack](https://webpack.js.org/) [build engine](https://yarnpkg.com/en/package/projext-plugin-webpack) and the [AngularJS plugin for it](https://yarnpkg.com/en/package/projext-plugin-webpack-angularjs).

The app takes advantage of the projext zero configuration feature and it doesn't even have a configuration file nor an HTML template.

projext verifies the code, sees the import of `angular` and assumes is a browser target that uses AngularJS. Then, since the target doesn't have an HTML file, it generates one when building and running; and the plugin, when projext tells it that the HTML will be generated, it uses it's _"smart defaults"_ to add the `ng-app` with a lowerCamelCase version of the `package.json` name property and a `<main />` so you can't start coding right from the JS file.

The app has two components:

1. `main`: It adds the basic styles for the page.
2. `hello`: Shows a _"hello message"_ with the webpack and AngularJS logos.

Something to mention about the `hello` component is that it injects the `$log` service using `ngInject` in order to also send a _"hello message"_ on the `console`.

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
