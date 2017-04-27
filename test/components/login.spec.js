import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Login from '../../src/js/components/login';
import FontAwesome from '../../src/js/components/fontAwesome';

describe('Login component', function() {
  it('should render without throwing an error', function() {
    
    const button = <button className="btn">
        <a href='/auth/google'>
            <FontAwesome
              name="fa fa-google-plus"
            />
            <span> Login with Google</span>
        </a>
      </button>;
      
    expect(shallow(<Login />).contains(<span> Login with Google</span>)).toBe(true);
    expect(shallow(<Login />).contains(<FontAwesome name="fa fa-google-plus" />)).toBe(true);
    expect(shallow(<Login />).contains(button)).toBe(true);
  });

  it('should be selectable by class "btn"', function() {
    expect(shallow(<Login />).is('.btn')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Login />).text()).toEqual(' Login with Google');
  });
});