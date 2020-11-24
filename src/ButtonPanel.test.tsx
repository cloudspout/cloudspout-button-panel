import { ButtonPanel } from './ButtonPanel';
import { ButtonPanelOptions } from './types';

class TestProps {
  options: ButtonPanelOptions = {
    url: '',
    type: 'header',
    contentType: '',
    isAuth: false,
    params: [],
    text: '',
    variant: 'primary',
    orientation: '',
  };
}

describe('ButtonPanel', () => {
  let underTest: ButtonPanel;
  let props = new TestProps();

  beforeEach(() => {
    props = new TestProps();
    underTest = new ButtonPanel(props);
  });

  it('should set a proper orientation', () => {
    expect(underTest.getOrientation()).toBe('center');

    props.options.orientation = 'left';
    expect(underTest.getOrientation()).toBe('left');

    props.options.orientation = 'right';
    expect(underTest.getOrientation()).toBe('right');

    props.options.orientation = 'center';
    expect(underTest.getOrientation()).toBe('center');
  });

  it('should send a proper basic auth header', () => {
    let url = new URL('http://example.com');

    props.options.isAuth = true;
    props.options.username = 'username';
    props.options.password = 'password';

    let actual = underTest.prepareFetchOpts(url);
    expect(actual).toBeDefined();
    expect((actual.headers as Headers).get('authorization')).toBe('Basic dXNlcm5hbWU6cGFzc3dvcmQ=');
  });
});
