# projext - samples - webpack - react

This project has 3 different targets that show you how easy is to implement [React](http://reactjs.org/) using the [webpack](https://webpack.js.org/) [build engine](https://yarnpkg.com/en/package/projext-plugin-webpack) and the [React plugin for it](https://yarnpkg.com/en/package/projext-plugin-webpack-react).

Since the project configuration was the only configuration file, no extra folder was created and the file is located on `/projext.config.js`.

The project configuration file only has the overwrites needed for specific features because projext takes care of _"completing"_ the rest of the information.

While testing the targets, you can check all information projext is assuming about them by running the `info` command:

```bash
yarn projext info targets/[targetName]
```
> As you saw above, I'm using `yarn` for running the commands, you can use `npm`/`npx`, it doesn't matter.

That will show you all the initial* settings of the target.

> *: Initial because after loading the targets, projext adds a few extra, but those never go on the configuration.

Now, before testing any target, don't forget to install the dependencies:

```bash
yarn
# or npm i
```

## `webapp`

A small web app with only two components:

1. `main`: It adds the basic styles for the page.
2. `hello`: Shows a _"hello message"_ with the webpack and React logos.

If you check the code, you'll see that it checks if the DOM element where the app is going to be render has content in order to use either `render` or `hydrate`, that's because there's another target that uses it for server side rendering, where you need to use `hydrate` instead of `render`.

You can build it using this command:

```bash
yarn run build:webapp
```

And test it on your browser with this command:

```bash
yarn run start:webapp
```

## `webapphot`

This is the exact same app as `webapp` but with [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/).

Since there's no way for projext to truly verify if a target uses HMR or not, we need to enable it using a setting on the configuration file:

```js
targets: {
  webapphot: {
    hot: true,
  },
  ...
}
```

If you check the app entry file, you'll see that it's implementing [`react-hot-loader`](https://yarnpkg.com/en/package/react-hot-loader), and that's all; when you test the app, you'll see that the changes are reflecting without the page being reloaded.

You can build it using this command:

```bash
yarn run build:webapphot
```

And test it on your browser with this command:

```bash
yarn run start:webapphot
```

## `expresswebappssr`

This is a complicated target. It's an [express](https://expressjs.com) app that uses server side rendering (SSR) to serve the `webapp` target code and then hydrates it with the necessary Javascript to make it work.

Let's see which settings we need to update on the project configuration file:

```js
targets: {
  expresswebappssr: {
    bundle: true,
    excludeModules: ['wootils/node/logger'],
    frameworkOptions: {
      ssr: ['webapp'],
    },
  },
  ...
}
```

First, we need to enable the `bundle` flag, because the `webapp` target imports stylesheets and images, and projext zero configuration doesn't know what SSR is and that it should analyze the other target to get the settings for this one, this is a feature of the plugin.

Then we need to use `excludeModules` to tell projext that the [wootils logger](https://homer0.github.io/wootils/manual/logger.html) shouldn't be bundled. The reason is that projext reads the project `package.json` and identifies the name of the dependencies in order to flag them, but `wootils/node/logger` is not on the `package.json`, `wootils` is; and unfortunately, the webpack feature used for this doesn't support `RegExp`s, so we need to help projext and webpack and tell them about this kind of cases.

Finally, we use the `frameworkOptions.ssr` setting to tell the plugin that this target is going to do SSR of `webapp`; the plugin will take care of telling projext and webpack that the code of that target needs to be processed for JSX and assets.

Going back to the target itself, there are two entry files, one for development (`index.js`) and one for production (`index.production.js`). This is because you can't use the dev middleware, which we use to run the Javascript of `webapp` on production, is intended to be used as a development tool.

Because it has two entry files, it also has two build commands. To build it for development you can use this one:

```bash
yarn run build:expresswebappssr
```

and for a production build you can use this:

```bash
yarn run build:expresswebappssr:production
```

If you pay attention to the logs, you'll see that before building for production, it also builds the `webapp` target. This is no projext _"magic"_, the tasks are hooked so the `prebuild:expresswebappssr:production` would build `webapp`.

To run the development build, you can use this command:

```bash
yarn run start:expresswebapp
```

It will be executed with the dev middleware.

And to run the production build you first need to build it for production, then move to the folder where the file is and execute it.

```bash
yarn run build:expresswebappssr:production
cd dist/expresswebappssr
node index.production.js
```

> If you think that was too much work, you should take a look at the [projext runner plugin](https://yarnpkg.com/en/package/projext-plugin-runner). It takes care of managing all that stuff.
