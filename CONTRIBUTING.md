# Contributing

## Build
First, install dependencies.
Node 12.x is required

```BASH
yarn install
```

To work with this plugin run:

```BASH
yarn watch
```

This will run linting tools and apply prettier fix.

Use an actual Docker container in parallel to test:

```BASH
$ docker run --rm -p 3000:3000 -v "$(pwd)"/dist:/var/lib/grafana/plugins/cloudspout-button-panel --name=grafana grafana/grafana:7.3.3
```

To build the plugin run:

```BASH
npm run dist
```

## Publish

1. Update `README.md` for the correct, upcomming version.

2. ```BASH
   GITHUB_TOKEN=... GRAFANA_API_KEY=... npm run release
   ```
   or [GitHub action](https://github.com/cloudspout/cloudspout-button-panel/actions?query=workflow%3A%22Node.js+Release%22)

## Distribute


1. Check new release asset with the validator: https://grafana-plugins-web-vgmmyppaka-lz.a.run.app/
2. [Update Grafana's repo.json entry](https://github.com/grafana/grafana-plugin-repository#add-a-plugin-to-repojson)

---

## Resources
* https://developers.grafana.com/ui/latest/index.html
* https://grafana.com/docs/grafana/latest/packages_api/ui/

