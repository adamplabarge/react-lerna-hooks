## Lerna monorepo with React CRA App and TypeScript Component packages, using Hooks

See link for more info on why this was created.

https://stackoverflow.com/questions/62353453/how-to-resolve-multiple-react-apps-to-same-react-package-path-using-webpack-l

### How to start it?

```bash
$ yarn install
$ yarn bootstrap
```

In one terminal...
```bash
$ cd packages/app
$ yarn start
```


In another terminal...
```bash
$ cd packages/component
$ yarn start
```

CRA seems to have issues running from the root package.json with Lerna