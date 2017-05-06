import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../../src/js/components/SearchBar';

describe('SearchBar component', () => {
  it('should exist', () => {
    expect(SearchBar).toBeDefined();
  });

  it('should mount in a full DOM', function() {
    expect(mount(<SearchBar />).find('.search-box').length).toBe(1);
  });

  it('should contain child element', () => {
    const wrapper = mount(<SearchBar />);
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('should accept props', () => {
    const wrapper = mount(<SearchBar test="props" />);
    expect(wrapper.props().test).toEqual('props');
    wrapper.setProps({ test: 'props2' });
    expect(wrapper.props().test).toEqual('props2');
  });

  it('should mount and render a "Select" element as the first child', () => {
    const wrapper = mount(<SearchBar />);
    expect(wrapper.children().first().is('Select')).toBe(true);
  });

  it('should be able to render static contents', () => {
    const wrapper = mount(<SearchBar />);
    const text = wrapper.find('button').text();
    expect(text).toEqual(' Search Headlines ');
  });
});
