import React from 'react';
import { mount } from 'enzyme';

import HomeBody from '../../src/js/components/HomeBody';

describe('HomeBody component', () => {
  it('should exist', () => {
    expect(<HomeBody />).toBeDefined();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<HomeBody />).find('.wrapper').length).toBe(1);
  });

  it('should mount and render a "div" element as the first child', () => {
    const wrapper = mount(<HomeBody />);
    expect(wrapper.children().first().is('div')).toBe(true);
  });

  it('should contain only two elements as direct children', () => {
    const wrapper = mount(<HomeBody />);
    expect(wrapper.children().length).toEqual(2);
  });

  it('should accept props', () => {
    const wrapper = mount(<HomeBody test="props" />);
    expect(wrapper.props().test).toEqual('props');
    wrapper.setProps({ test: 'props2' });
    expect(wrapper.props().test).toEqual('props2');
  });

  it('should render child component', () => {
    expect(mount(<HomeBody />).find('div').length).toBeGreaterThan(0);
    expect(mount(<HomeBody />).find('Login').length).toBe(1);
  });

  it('should be able to render static contents', () => {
    const wrapper = mount(<HomeBody />);
    const text = wrapper.find('h2').text();
    expect(text).toEqual('Hi Mr. News Seeker.');
  });
});
