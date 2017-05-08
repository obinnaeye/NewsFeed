import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Login from '../../src/js/components/Login';
import FontAwesome from '../../src/js/components/FontAwesome';
/*eslint-disable */
describe('Login component', () => {
  it('should render without throwing an error', () => {
    
    const button = <button className="btn2 btn">
    <a href="/auth/google">
      <FontAwesome
        name="fa2 fa fa-google-plus"
      />
      <span> Login with Google</span>
    </a>
  </button>;
      
    expect(shallow(<Login />).contains(<span> Login with Google</span>)).toBe(true);
    expect(shallow(<Login />).contains(<FontAwesome name="fa2 fa fa-google-plus" />)).toBe(true);
    expect(shallow(<Login />).contains(button)).toBe(true);
  });

  it('should be selectable by class "btn"', () => {
    expect(shallow(<Login />).is('.btn')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Login />).text()).toEqual(' Login with Google');
  });
});