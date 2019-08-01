# projext - samples - webpack - basic

This project has a lot of different targets that show you how to implement the out-of-the-box features both [projext](https://yarnpkg.com/en/package/projext) and the [webpack](https://webpack.js.org/) [build engine](https://yarnpkg.com/en/package/projext-plugin-webpack) offer you.

One of the targets have a configuration files, so since there were more than one, all the configuration files are on the `config/` directory.

The project configuration file is `config/projext.config.js` and it only has the overwrites needed for specific features because projext takes care of _"completing"_ the rest of the information.

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

This is a really simple web app that shows you how to load `HTML`, `SCSS` and image files on your Javascript.

You can build it using this command:

```bash
yarn run build:webapp
```

And test it on your browser with this command:

```bash
yarn run start:webapp
```

## `nodeapp`

Tiny Node app that just says `Hello projext!!` and nothing else. Since it doesn't require bundling nor transpiling, if you try to build it, you'll just see a warning saying that there's no need for it.

While the message looks hardcoded, the definition for it comes from an `.env` file on the root directory: `.env.nodeapp`; projext automatically finds the `.env` file and injects the variables on the environment.

You can build it using this command:

```bash
yarn run build:nodeapp
```

And to execute it, just run this command:

```bash
yarn run start:nodeapp
```

Since you are running it on a development environment, the app will be executed from its source directory, instead of moving it to the distribution directory.

If you add `--type production` to the run command, the code will be moved to the distribution directory and then executed.

## `express`

Old school server side rendering! This is an [express](https://expressjs.com) app that imports `HTML`, `SCSS` and images, gets bundled and serves the same exact content as the `webapp` target.

Something worth mentioning about this target is that it has an entry on the configuration file:

```js
targets: {
  express: {
    excludeModules: ['wootils/node/logger'],
  },
  ...
}
```

As you can see, it's using the `excludeModules` setting to tell `projext` that `wootils/node/logger` shouldn't be included on the bundle. The reason is that projext reads the project `package.json` and identifies the name of the dependencies in order to flag them, but `wootils/node/logger` is not on the `package.json`, `wootils` is; and unfortunately, the webpack feature used for this doesn't support `RegExp`s, so we need to help projext and webpack and tell them about this kind of cases.

You can build it using this command:

```bash
yarn run build:express
```

And to execute it, just run this command:

```bash
yarn run start:express
```

## `expresswebapp`

This is an [express](https://expressjs.com) app that uses the [webpack dev middleware](https://yarnpkg.com/en/package/webpack-dev-middleware) to serve the `webapp` target.

Now, this target has two entry files, one for development (`index.js`) and one for production (`index.production.js`). This is because you can't use the dev middleware on production, is intended to be used as a development tool.

Because it has two entry files, it also has two build commands. To build it for development you can use this one:

```bash
yarn run build:expresswebapp
```

and for a production build you can use this:

```bash
yarn run build:expresswebapp:production
```

If you pay attention to the logs, you'll see that before building for production, it also builds the `webapp` target. This is no projext _"magic"_, the tasks are hooked so the `prebuild:expresswebapp:production` would build `webapp`.

To run the development build, you can use this command:

```bash
yarn run start:expresswebapp
```

And it will be executed with the dev middleware, from the source directory.

And finally, to run the production build you first need to build it for production, then move to the folder where the file is and execute it.

```bash
yarn run build:expresswebapp:production
cd dist/expresswebapp
node index.production.js
```

> If you think that was too much work, you should take a look at the [projext runner plugin](https://yarnpkg.com/en/package/projext-plugin-runner). It takes care of managing all that stuff.

## `jimpexwebapp`

Very similar to the `expresswebapp` target, this one uses [jimpex](https://yarnpkg.com/en/package/jimpex) to implement the dev middleware and serve `webapp`.

Something _"special"_ about this target is that it requires a projext feature on the project configuration that is not a target setting:

```js
copy: {
  enabled: true,
  items: ['package.json'],
  copyOnBuild: {
    targets: ['jimpexwebapp'],
  },
},
```

jimpex needs to be executed on a directory with a `package.json`, because it uses the name of the project for logging and some other features, so we need to enable the `copy` feature in order to have the `package.json` on the distribution directory.

The feature, once enabled, only runs when building for production, which is great because we only need it for that scenario. The rest of the options are telling it that it should copy the `package.json` but only when the `jimpexwebapp` target gets built.

> For more information about the copy feature, you can read the [projext documentation](https://homer0.github.io/projext/manual/projectConfiguration.html#-code-copy--code-).

Going back to building the target, yes, like `expresswebapp`, you have two commands:

For development, use this command:

```bash
yarn run build:jimpexwebapp
```

And for production, use this one:

```bash
yarn run build:jimpexwebapp:production
```

For running it, it's almost the same, to run the development build, you can use this command:

```bash
yarn run start:jimpexwebapp
```

And it will be executed with the dev middleware, from the source directory.

But for running the production build, since jimpex needs to be executed on a directory with a `package.json`, we can't go to the target folder, because that would be `dist/jimpexwebapp` and the `package.json` is on `dist/`, so we move to the distribution directory and we execute it from there:

```bash
yarn run build:jimpexwebapp:production
cd dist
node ./jimpexwebapp/index.production.js
```

## `weblib`

This is a small example of how you would build a library for a browser app.

The target has two entry files, but is not like it has them for different environment rules, but because one is the code of the library and what gets build for production (`index.js`) and the other is kind of a playground to test the implementation while developing it (`index.development.js`).

When working with library for browser apps, projext creates an HTML file for you to test your library while coding. But when building for production, it only builds the JS files; so we are basically taking advantage of this by adding a development entry file that requires the production entry, that way we get to simulate how the library would work on an implementation.

Now, the library has only one method that takes a DOM selector and changes its `innerHTML` to `Hello projext!`, nothing much, but enough to test the concept.

You can build it for development using this command:

```bash
yarn run build:weblib
```

And it will build the playground, including the HTML. Nothing you would do on a real project.

But you can build for production with this command:

```bash
yarn run build:weblib:production
```

And you'll only get the the JS file ready to deploy/publish.

To run _"the playground"_ and see how the library would work on an app, you can use this command:

```bash
yarn run start:weblib
```

## `webappcss`

This is exactly the same as `webapp` but with different settings for how it handles styles. Let's start by checking the project configuration settings:

```js
targets: {
  webappcss: {
    css: {
      modules: true,
      inject: true,
    },
  },
  ...
}
```

What those settings are doing is: Enabling CSS Modules and telling projext that it shouldn't create a stylesheet, just inject the CSS code on the `<head />` when the build gets executed.

If you check the code, you'll see that it's using very questionable `RegExp`s to implement the CSS Modules on the HTML; and when you execute it, if you inspect the HTML, you'll see that the styles are not being loaded from a file but that they were injected on a `<style />` tag on the `<head />`.


You can build it using this command:

```bash
yarn run build:webappcss
```

And test it on your browser with this command:

```bash
yarn run start:webappcss
```

## `webappconfig`

Yet another variation of the `webapp` target. This one implements [dynamic browser target configuration](https://homer0.github.io/projext/manual/browserTargetConfiguration.html) and an `.env` file. Let's see how the feature is enabled on the project configuration:

```js
targets: {
  webappconfig: {
    configuration: {
      enabled: true,
    },
  },
  ...
}
```

With just that, projext knows that the target default configuration is on `config/webappconfig/webappconfig.config.js` and if a `CONFIG` environment variable is used when building or running the target, it will be on `config/webappconfig/webappconfig.[VALUE-OF-THE-VARIABLE].config.js`.

If you check the code, you'll see the that configuration is replacing `process.env.CONFIG` and it's only being used to show a different message on the app.

> For more information about the dynamic browser target configuration feature, you can read the [projext documentation](https://homer0.github.io/projext/manual/browserTargetConfiguration.html).

Now, the target also uses an `.env` file for declaring a message that the custom configuration will use. This doesn't need any setting, projext finds the `.env.[target-name]` file automatically and loads its variables.

This target has two build commands and two run commands, ones with the default configuration and the others with a custom one.

You can build the target with the default configuration using this command:

```bash
yarn run build:webappconfig
```

And for building with the custom confirmation use this command:

```bash
yarn run build:webappconfig:custom
```

To run it on the browser with default configuration you can use this command:

```bash
yarn run start:webappconfig
```

And you'll see the message defined on `config/webappconfig/webappconfig.config.js`.

Now, to run with with the custom configuration, you can use this command:

```bash
yarn run start:webappconfig:custom
```

And the message on the browser would change to the one on `config/webappconfig/webappconfig.custom.config.js`.

## `webappmodules`

This target does something specially _"weird"_: It builds a Node module dependency that was not bundled nor transpiled, but that it needs it in order to work.

It's not a very common scenario, but if you are working with private repositories instead of the registry, you can use this to avoid committing huge builds.

Before using this target you should know that in order to simulate a module that needs building, there's a _"dummy module"_ called `hello` on the `utils/` directory that, using the `package.json` script hooks, gets copied to the `node_modules` directory before building and running the target.

The `hello` module is the _"hello component"_ used by all the `webapp`-like targets to show the webpack logo and the message; its main file imports a `scss` stylesheet and the logo, so it needs to be bundled in order to work.

We also added a setting on the project configuration file so projext can identify the module and bring it on the webpack's bundling process:

```js
targets: {
  webappmodules: {
    includeModules: ['hello'],
  },
  ...
}
```

That setting basically says that if the target code is importing anything from `node_modules/hello`, it should be processed by webpack.

Finally, the end result is the same as the other targets, a copy of `webapp`.

You can build it using this command:

```bash
yarn run build:webappmodules
```

And test it on your browser with this command:

```bash
yarn run start:webappmodules
```

## `webappcopy`

This target makes use of two projext features:

First, the `copy` target setting, which allows projext to copy specific files during the bundling process.

The target uses the `copy` two HTML files and a stylesheet:

```js
webappcopy: {
  copy: [
    'public/public.css',
    'public/status.html',
    {
      from: 'public/time.html',
      to: 'info/time.html',
    },
  ],
}
```

That says that `public.css` and `status.html` will end up on the root of the target distribution directory, but `time.html` will be inside an `info` folder.

The other feature this target takes advantage from is "custom plugins". On the project configuration you can define paths for custom plugins you want projext to load, but if you create a `projext.plugin.js` on either the root directory or on `/config`, projext will detect it and load it automatically.

This project has a `/config/projext.plugin.js` that listens for the reducer event of the list of files a target will copy. It first filters that target name so it will only act for `webappcopy`, then, if one of the files to copy is `time.html`, it adds a `transform` function that will inject the current time on the contents of the file when it gets copied.

You should open the file, it's fully documented step by step.

Now, you can build it using this command:

```bash
yarn run build:webappcopy
```

And test it on your browser with this command:

```bash
yarn run start:webappcopy
```

## `webappsplit`

This target is an example of [code splitting](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/).

There's no special configuration for this feature, projext (actually Babel and webpack) will detect the use of `import` as a function and generate an extra chunk.

Now, you can build it using this command:

```bash
yarn run build:webappsplit
```

And test it on your browser with this command:

```bash
yarn run start:webappsplit
```
