import React, { PureComponent } from 'react';
import { Button } from '@grafana/ui';
import { PanelProps } from '@grafana/data';
import { SimpleOptions, PanelState } from 'types';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props, PanelState> {
  constructor(props: any) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      api_call: 'READY',
      response: '',
      resetInterval: undefined,
    };
  }

  render() {
    const { options } = this.props;
    const center = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    const exeucte = () => {
      this.setState({ api_call: 'IN_PROGRESS' });
      console.log(options.method, ' to ', options.url, ' with key as ', options.type);

      const url = new URL(options.url);

      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set('Content-Type', 'application/json');
      requestHeaders.set('Accept', 'application/json');

      const fetchOpts: RequestInit = {
        method: options.method?.value, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: requestHeaders,
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      };

      if (options.type?.value === 'HEADER') {
        requestHeaders.set('X-API-Key', options.key);
      } else if (options.type?.value === 'QUERY') {
        url.searchParams.append('api-key', options.key);
      } else {
        console.error('Unknown api key type', options.type);
      }

      fetch(url.toString(), fetchOpts)
        .then(data => {
          if (data.ok) {
            this.setState({
              api_call: 'SUCCESS',
              response: data.toString(),
            });
            console.log('Requeste successful: ', data);
          } else {
            this.setState({
              api_call: 'ERROR',
              response: data.toString(),
            });
            console.log('Requeste failed: ', data);
          }
        })
        .catch(e => {
          this.setState({
            api_call: 'ERROR',
            response: e.toString(),
          });
          console.error('Request error: ', e);
        })
        .finally(() => {
          /*
          this.state.resetInterval && clearInterval(this.state.resetInterval);
          this.setState({resetInterval: window.setInterval(() => this.init(), 1000)});
          */
        });
    };

    const apiStateIcon = () => {
      switch (this.state.api_call) {
        case 'IN_PROGRESS':
          return 'fa fa-spinner spinning';
        case 'SUCCESS':
          return 'fa fa-check';
        case 'ERROR':
          return 'fa fa-exclamation-triangle';
        case 'READY':
        default:
          return 'fa fa-cog';
      }
    };

    return (
      <div style={center}>
        <Button variant={this.props.options.variant?.value} title={this.state.response} size="lg" icon={apiStateIcon()} onClick={exeucte}>
          {options.text}
        </Button>
      </div>
    );
  }
}
