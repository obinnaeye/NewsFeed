import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../../src/js/components/SearchBar';
/*eslint-disable */
describe('SearchBar component', () => {
  const defaultFun = demo => demo;
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<SearchBar onchange= {defaultFun}/>);
  })

  it('should exist', () => {
    expect(SearchBar).toBeDefined();
  });

  it('should mount in a full DOM', function() {
    expect(wrapper.find('.search-box').length).toBe(1);
  });

  it('should contain child element', () => {
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('should accept props', () => {
    const wrapper2 = mount(<SearchBar test="props" />);
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
