/* global describe, it, expect */
import React from 'react';
import { mount } from 'enzyme';
import FontAwesome from '../../src/js/components/FontAwesome';

describe('FontAwesome component', () => {
  it('should exist', () => {
    expect(<FontAwesome />).toBeDefined();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<FontAwesome />).find('i').length).toBe(1);
  });

  it('should contain no child element', () => {
    const wrapper = mount(<FontAwesome />);
    expect(wrapper.children().length).toEqual(0);
  });

  it('should accept props', () => {
    const wrapper = mount(<FontAwesome className="login" />);
    expect(wrapper.props().className).toEqual('login');
    wrapper.setProps({ className: 'logout' });
    expect(wrapper.props().className).toEqual('logout');
  });
});
