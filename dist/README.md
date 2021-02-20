# Button Panel
[![Node.js CI](https://github.com/cloudspout/cloudspout-button-panel/workflows/Node.js%20CI/badge.svg)](https://github.com/cloudspout/cloudspout-button-panel/actions?query=workflow%3A%22Node.js+CI%22)
[![GitHub release)](https://img.shields.io/github/v/release/cloudspout/cloudspout-button-panel)](https://github.com/cloudspout/cloudspout-button-panel/releases)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

It provides a simple Grafana 7.x panel that shows only one button - to integrate with any kind of HTTP/REST API:
* Support `GET` and `POST` HTTP verb
    * Adds no new javascript dependencies
    * Uses standard browser APIs and respects CORS
    * Optional text payload for `POST` requests via syntax-highlighiting editor
* Support for custom header parameter or query parameter
* Variable support via `$variableName` in
    * URL
    * Header/Query parameter name & value
    * POST body payload
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/raulsperoni"><img src="https://avatars1.githubusercontent.com/u/8474238?v=4?s=100" width="100px;" alt=""/><br /><sub><b>raúl</b></sub></a><br /><a href="#ideas-raulsperoni" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/cloudspout/cloudspout-button-panel/commits?author=raulsperoni" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Jorgevillada"><img src="https://avatars.githubusercontent.com/u/8599697?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jorge Villada</b></sub></a><br /><a href="https://github.com/cloudspout/cloudspout-button-panel/issues?q=author%3AJorgevillada" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT

Icons made by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](https://www.flaticon.com/).

`ButtonPayloadEditor` highly influenced from [gapitio/gapit-htmlgraphics-panel](https://github.com/gapitio/gapit-htmlgraphics-panel).
