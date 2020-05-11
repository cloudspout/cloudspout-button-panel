# Simple Button Panel

Grafana plugin to have a simple button with abilities to call REST APIs with API keys.

## Installation

```
GF_INSTALL_PLUGINS=https://cloudspout.bintray.com/cloudspout-button-panel/cloudspout-button-panel_1.0.5.zip
```

## Build
First, install dependencies:

```BASH
npm install
```

To work with this plugin run:

```BASH
npm run watch
```

This will run linting tools and apply prettier fix.

Use an actual Docker container in parallel to test:

```BASH
docker run -d -p 3000:3000 -v "$(pwd)"/dist:/var/lib/grafana/plugins/cloudspout-button-panel --name=grafana grafana/grafana
```

To build the plugin run:

```BASH
npm run build && npm run zip
```

## License

GPL v3

Icons made by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](https://www.flaticon.com/)
