import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Login from '../../src/js/components/login';
import FontAwesome from '../../src/js/components/fontAwesome';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    const link = <a href='/auth/google' className="signin">
        <button>
          <FontAwesome
            name="fa fa-google-plus"
          />
          <span> Login with Google</span>
        </button>
      </a>;
      
    expect(shallow(<Login />).contains(<span> Login with Google</span>)).toBe(true);
    expect(shallow(<Login />).contains(<FontAwesome name="fa fa-google-plus" />)).toBe(true);
    expect(shallow(<Login />).contains(link)).toBe(true);
  });

  it('should be selectable by class "Login"', function() {
    expect(shallow(<Login />).is('.Login')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Login />).find('.Login').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Login />).text()).toEqual('Bar');
  });
});