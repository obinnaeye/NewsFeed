import React from 'react';
import { mount } from 'enzyme';
import SourceBar from '../../src/js/components/SourceBar';

/* eslint-disable no-undef */
describe('SourceBar component', () => {
  const defaultFun = demo => demo;
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<SourceBar onchange={defaultFun} />);
  });

  it('should exist', () => {
    expect(SourceBar).toBeDefined();
  });

  it('should mount in a full DOM', () => {
    expect(wrapper.find('.search-box').length).toBe(1);
  });

  it('should contain child element', () => {
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('should accept props', () => {
    const wrapper2 = mount(<SourceBar test="props" />);
    expect(wrapper2.props().test).toEqual('props');
    wrapper2.setProps({ test: 'props2' });
    expect(wrapper2.props().test).toEqual('props2');
  });

  it('should mount and render a "Select" element as the first child', () => {
    expect(wrapper.children().first().is('Select')).toBe(true);
  });

  it('should be able to render static contents', () => {
    const text = wrapper.find('button').text();
    expect(text).toEqual(' Reload Headlines ');
  });
});
