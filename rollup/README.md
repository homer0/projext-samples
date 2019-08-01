# projext - samples - Rollup

All the sample projects on this directory use the [projext](https://yarnpkg.com/en/package/projext) [Rollup](https://rollupjs.org/) [build engine](https://yarnpkg.com/en/package/projext-plugin-rollup) for building all kind of different things:

## Basic

This sample project doesn't use any framework, so most of the code would look like taken from a 2007 site. Remember that projext helps you bundle and distribute your project, no matter how ugly the code looks like.

There are a lot of different targets on this project that show you how simple is to implement all projext features:

- `webapp`: A simple browser target, nothing more.
- `nodeapp`: A Node target that just logs a message.
- `express`: A Node [Express](https://expressjs.com) app that renders HTML by importing assets.
- `expresswebapp`: A Node [express](https://expressjs.com) app that serves the `webapp` target.
- `jimpexwebapp`: A Node [jimpex](https://yarnpkg.com/en/package/jimpex) app that serves the `webapp` target.
- `weblib`: A library browser target, with a "playground" to test it on development.
- `webappcss`: A browser target that injects the styles on the HTML rather than having a stylesheet file.
- `webappconfig`: A browser target with dynamic configuration.
- `webappmodules`: A browser target that builds the code of a Node module in order to implement it.
- `webappcopy`: A browser target that copies files during the bundling process and takes advantage of custom plugins.

[Read the project README](./basic).

## AngularJS

A simple web app using the [AngularJS](http://angularjs.org/) [projext Rollup plugin](https://yarnpkg.com/en/package/projext-plugin-rollup-angularjs). Is the exact same app as the `webapp` target from the `basic` project but with AngularJS components.

And taking advantage of projext zero configuration feature, this project doesn't even have a configuration file.

[Read the project README](./angularjs).

## React

This project uses the [React](http://reactjs.org/) [projext webpack plugin](https://yarnpkg.com/en/package/projext-plugin-rollup-react) and 2 targets to show you very common React scenarios:

- `webapp`: Like on the others, a small browser target that shows a message.
- `expresswebappssr`: A Node [express](https://expressjs.com) app that serves the `webapp` target code using server side rendering.

[Read the project README](./react).

## TypeScript

This project has targets that use [TypeScript](https://www.typescriptlang.org/):

- `webapp`: Another ersion of the small browser app that shows a message.
- `nodeapp`: A Node target that just logs a message.

[Read the project README](./typeScript).
