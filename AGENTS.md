# Prenda Icons

Shared startup instructions. Edit `AGENTS.md`; `CLAUDE.md` imports it.

## Purpose and map

Published React/MUI icon library, `@prenda-school/prenda-icons`, extracted from
the older Spark design system. Consumed by `prenda-ds` and multiple apps.

- `src/*.tsx`: named icons; `src/custom/` and `src/utils/`: supporting source.
- `src/index.ts`: public exports; `tsup.config.js`: CJS/ESM/declaration builds.
- `docs/`: separate documentation-site package with its own `package.json`.
- Root README: installation and icon workflow; `.github/workflows/`: library
  checks/publishing. Check `peerDependencies` for supported MUI/React majors.

## Development and checks

From root: `nvm use`, `npm install`. Private package consumers authenticate using
`NPM_TOKEN` as described in README and `.npmrc`.

- `npm run type-check` and `npm run build`: library validation.
- `npm run format-lint`: **rewrites** `src/`; use `npx biome check src/` for a
  read-only check when dependencies are installed.
- No automated test script is defined. Render the changed icon in a compatible
  consumer/docs view to verify geometry, sizing, colors, and prop forwarding.
- Documentation commands run from `docs/`. Its `deploy` script publishes the
  site; there is no root `deploy` script.

Publishing: `.github/workflows/deploy-library.yml` runs `npm publish` to GitHub
Packages on every push to `main`, so bump `version` in the same PR as the change
or the publish step fails on the existing version. Current peers span MUI 6, 7,
and 9; guide-app still consumes 1.1 while discover, learn-app, marketplace, and
`prenda-ds` are on 2.x. `prenda-ds`'s lockfile links to this folder as
`../prenda-icons`, so keep the two repos as siblings when building prenda-ds.

Follow neighboring SVG/MUI component conventions and update `src/index.ts` for
new exports. Treat icon names as a public API; check consumers before renaming.
Build from source rather than hand-editing `dist/`. Inspect existing edits and
package archives before working, and do not include unrelated artifacts. Keep
this guide current when build, export, or publishing structure changes.
