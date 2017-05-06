import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Logout from '../../src/js/components/Logout';
import FontAwesome from '../../src/js/components/FontAwesome';
/*eslint-disable */
describe('Logout component', function() {
  it('should render without throwing an error', function() {
    
    const button = <li><a href="/logout"><FontAwesome name="fa fa-sign-out" /> Logout</a></li>;
      
    expect(shallow(<Logout />).contains(<FontAwesome name="fa fa-sign-out" />)).toBe(true);
    expect(shallow(<Logout />).contains(<a href="/logout"><FontAwesome name="fa fa-sign-out" /> Logout</a>)).toBe(true);
    expect(shallow(<Logout />).contains(button)).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Logout />).find('.fa').length).toBe(1);
    expect(mount(<Logout />).find('.fa-sign-out').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Logout />).text()).toEqual(' Logout');
  });
});