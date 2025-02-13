# Prenda Design System Icons Remade
This is a collection of icons for the Prenda Design System. They've been moved here from the design-system repo to remove dependencies from @prenda/spark.

To build the icons run `npm run build` in the root of the project. This will generate a `dist` folder with the icons in it.

To add new icons, add them to the `src` folder and run `npm run build` to generate the new icons.

---
## Installation
To install the icons, add a .npmrc file with the following content:

```
@prenda-school:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

You will have to generate a GitHub token and add it as an environment variable named `NPM_TOKEN` to your machine when executing `npm i @prenda-school/prenda-icons`.
---

## Docs
Documentation for the icons can be found [here](https://prenda-school.github.io/prenda-icons/).

In order to release a new version of the documentation, update the package.json to the latest version of @prenda-school/prenda-icons, then run `npm run deploy` to deploy the new version to the website.
