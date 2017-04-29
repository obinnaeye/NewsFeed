import React from 'react';
import { shallow, mount, render } from 'enzyme';

import NavBar from '../../src/js/components/NavBar';
import Logout from '../../src/js/components/Logout';

describe('NavBar component', () => {
  it('should exist', () => {
    expect(<NavBar />).toBeDefined();
  });
  
  it('should render a "div" element as the wrapper', () => {
    const wrapper = mount(<NavBar />);
    console.log(wrapper.find('nav').parent())
    expect(wrapper.find('nav').length).toEqual(1);
  });
  
  it('should accept props', () => {
    const wrapper = mount(<NavBar test='props'/>);
    expect(wrapper.props().test).toEqual('props');
    wrapper.setProps({ test: "props2" });
    expect(wrapper.props().test).toEqual('props2');
  });

  it('should mount in a full DOM', () => {
    expect(mount(<NavBar />).find('.header').length).toBe(1);
  });
  
  it('should render child component', () => {
    expect(mount(<NavBar />).find('.navbar').length).toBeGreaterThan(0);
    expect(mount(<NavBar />).find('Logout').length).toBe(1);
  });
});