# mdx2-yarn3

This repo tries to highlight a bug with yarn and ESM (included by @mdx-js/loader)

## Node 18

### ESM disabled

When I set `pnpEnableEsmLoader: false` in `.yarnrc.yml`, I have the following error `ERR_MODULE_NOT_FOUND` with also a weird stack trace:

![ERR_MODULE_NOT_FOUND](public/node-18-esm-disabled.png)

### ESM enabled

When I set `pnpEnableEsmLoader: true` in `.yarnrc.yml`, I have the following error `ERR_LOADER_CHAIN_INCOMPLETE`:

![ERR_LOADER_CHAIN_INCOMPLETE](public/node-18-yarn-3-2-1-esm-enabled.png)

After upgrading yarn to the v3.2.2, it works again:

![it compiles with node 18 and yarn v3.2.2](public/node-18-yarn-3-2-2-esm-enabled.png)

## Node 16 & ESM enabled

### Yarn v3.2.2

It compiles properly:

![it compiles with node 16 and yarn v3.2.2](public/node-16-yarn-3-2-2-esm-enabled.png)

## Full outputs

You can check the [CI runs](https://github.com/Ayc0/mdx2-yarn3/runs/7688799378) to output in different Node/yarn versions and with ESM enabled/disabled.
