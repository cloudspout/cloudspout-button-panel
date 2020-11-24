# Button Panel

[![Node.js CI](https://github.com/cloudspout/cloudspout-button-panel/workflows/Node.js%20CI/badge.svg)](https://github.com/cloudspout/cloudspout-button-panel/actions?query=workflow%3A%22Node.js+CI%22)
[![GitHub release)](https://img.shields.io/github/v/release/cloudspout/cloudspout-button-panel)](https://github.com/cloudspout/cloudspout-button-panel/releases)

It provides a simple Grafana 7.x panel that shows only one button - to integrate with any kind of HTTP/REST API:
* Support `GET` and `POST` HTTP verb
    * Adds no new javascript dependencies
    * Uses standard browser APIs and respects CORS
    * Optional text payload for `POST` requests
* Support for custom header parameter or query parameter
* Variable support via `$variableName` in
    * URL
    * parameter name & value
    * Button label
* Support for HTTP Basic Auth
* Custom label text & Grafana template design
    * Customize icon & button colors

## Usage

![Screencast](https://github.com/cloudspout/cloudspout-button-panel/raw/main/img/screencast.gif)

## Configuration

![Screenshot](https://github.com/cloudspout/cloudspout-button-panel/raw/main/src/img/screenshot.png)

### Basic Auth
⚠️ Please note: ⚠️

Due to the Grafana API & security restrictions in modern browsers the following must be considered before using Basic Auth:

![Basic Auth Configuration](https://github.com/cloudspout/cloudspout-button-panel/raw/main/img/authentication.png)

* Neither username nor password are stored encryted in Grafana. 
  The password is there to everyone with access to the dashboard in Grafana! 
* The *server* at the URL _must_ provide proper resposne to the [CORS pre-flight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request). That is:
    * Provide a proper response to the `OPTIONS` request performed by the browser before the actual `GET`/`POST` requiest is issued
    * Provide a [`Access-Control-Allow-Credentials: true`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header 
    * Provide a proper [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) header.
      _No wildcards_ are allowed if credentials are used!

These limitations are inherent and canot be fixed or addressed by the plugin!

Use Basic Auth only if these limitations are acceptable!

## Install

### CLI

Via the [Grafana CLI](https://grafana.com/docs/grafana/latest/administration/cli/):

```BASH
$ grafana-cli --pluginUrl https://github.com/cloudspout/cloudspout-button-panel/releases/download/7.0.23/cloudspout-button-panel.zip \
  plugins install cloudspout-button-panel
```

### Docker

Use [Grafana's environment variable](https://grafana.com/docs/grafana/latest/installation/docker/#build-and-run-a-docker-image-with-pre-installed-plugins) to add this plugin to your installation:

```BASH
$ docker run -p 3000:3000 -it \
  -e "GF_INSTALL_PLUGINS=https://github.com/cloudspout/cloudspout-button-panel/releases/download/7.0.23/cloudspout-button-panel.zip;cloudspout-button-panel" \
  grafana/grafana:7.3.1
```

## License

GPL v3

Icons made by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](https://www.flaticon.com/)
