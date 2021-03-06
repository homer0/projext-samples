# projext - samples

This is a repository of sample projects using projext with different build engines and different configurations.

Since one of the main points of projext is to avoid having large configurations, the idea is not to use the code of these projects as boiler plate but just as reference.

## Build engines

- [webpack](./webpack)
- [Rollup](./rollup)

## Structure

The repository structure looks like this:

```
/
├── [buildEngineName]/
│   ├── basic
│   │   └── package.json
│   ├── [frameworkName]
│   │   └── package.json
│   ├── [frameworkName]
│   │   └── package.json
│   ├── [featureName]
│   │   └── package.json
│   └── [pluginName]
│       └── package.json
└── [buildEngineName]/
    ├── basic
    │   └── package.json
    ├── [frameworkName]
    │   └── package.json
    ├── [pluginName]
    │   └── package.json
    ├── [featureName]
    │   └── package.json
    └── [frameworkName]
        └── package.json
```

The root directory has one folder per build engine.

Inside each build engine folder there would be a `basic` folder for a sample project that doesn't involve the use of frameworks.

Inside each build engine folder there will be 5 different types of projects:

- `basic`: It doesn't involve the use of any framework nor plugin, just samples (plural because the same project may have multiple targets for different purposes) of projext with the build engine.
- `[frameworkName]`: Samples of an specific framework using the build engine on projext.
- `[pluginName]`: Samples of an specific plugin using the build engine on projext.
- `[featureName]`: Samples of an specific feature that it's very specific to be grouped with the `basic` samples.
- `[frameworkname]-[pluginName]`: You get the idea, specific framework + specific plugin.

This is not to be strict but to help users navigate the repository when looking for references.
