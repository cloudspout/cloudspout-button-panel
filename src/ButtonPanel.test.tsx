import { ButtonPanel } from './ButtonPanel';
import { ButtonPanelOptions } from './types';

describe('ButtonPanel', () => {
    
    let underTest : ButtonPanel;
    let props: any;

    beforeEach(() => {
        let options : ButtonPanelOptions = {
            url: '',
            type: '',
            contentType: '',
            isAuth: false,
            params: [],
            text: '',
            variant: 'primary',
            orientation: '',

        };
        props = {
            options
         };
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

  });
  