# Simple Button Panel

A simple panel that shows only one button - to integrate with any kind of HTTP/REST API:

* Support `GET` and `POST` HTTP verb
* Support API key via header `X-API-Key` or query parameter `?api-key`
* Custom label text & Grafana template design

![Screenshot](img/screenshot.png)

## Install

Use [Grafana's environment variable](https://grafana.com/docs/grafana/latest/installation/docker/#build-and-run-a-docker-image-with-pre-installed-plugins) to add this plugin to your installation:

```
GF_INSTALL_PLUGINS="https://github.com/cloudspout/cloudspout-button-panel/releases/download/1.0.2/cloudspout-button-panel.zip;cloudspout-button-panel"
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

To build the plugin run:

```BASH
npm run dist
```

## Deploy

```BASH
GITHUB_TOKEN=... npm run release
```

## License

GPL v3

Icons made by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](https://www.flaticon.com/)
