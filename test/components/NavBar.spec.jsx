import React from 'react';
import { mount } from 'enzyme';

import NavBar from '../../src/js/components/NavBar';

/* eslint-disable no-undef */
describe('NavBar component', () => {
  it('should exist', () => {
    expect(<NavBar />).toBeDefined();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<NavBar />).find('.header').length).toBe(1);
  });

  it('should mount and render a "div" element as the first child', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.children().first().is('div')).toBe(true);
  });

  it('should accept props', () => {
    const wrapper = mount(<NavBar test="props" />);
    expect(wrapper.props().test).toEqual('props');
    wrapper.setProps({ test: 'props2' });
    expect(wrapper.props().test).toEqual('props2');
  });

  it('should render child component', () => {
    expect(mount(<NavBar />).find('.navbar').length).toBeGreaterThan(0);
    expect(mount(<NavBar />).find('Logout').length).toBe(1);
  });
});
