import React from 'react';
import { mount } from 'enzyme';

import FontAwesome from '../../src/js/components/FontAwesome';
/*eslint-disable */
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
    const wrapper = mount(<FontAwesome test="props" />);
    expect(wrapper.props().test).toEqual('props');
    wrapper.setProps({ test: 'props2' });
    expect(wrapper.props().test).toEqual('props2');
  });
});
