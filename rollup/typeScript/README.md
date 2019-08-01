# projext - samples - webpack - TypeScript

This project has two simple examples of targets using [TypeScript](https://www.typescriptlang.org/) for type definitions.

There's no configuration file because TypScript files have specific extensions and projext is smart enough that it recognizes them and enables the feature.

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
