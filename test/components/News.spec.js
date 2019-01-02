/* global describe, it, expect, beforeEach */
import React from 'react';
import { shallow, mount } from 'enzyme';
import News from '../../src/js/components/News';

describe('News component', () => {
  let news;
  let wrapper;
  beforeEach(() => {
    news = <News src="sample" href="/" title="News" />;
    wrapper = mount(news);
  });

  it('should exist', () => {
    expect(news).toBeDefined();
  });

  it('should render a "li" element', () => {
    expect(shallow(news).find('li').length).toBe(1);
  });

  it('should accept props', () => {
    expect(wrapper.props().src).toEqual('sample');
    wrapper.setProps({ src: 'Sample News' });
    expect(wrapper.props().src).toEqual('Sample News');
  });

  it('should mount in a full DOM', () => {
    expect(wrapper.find('.flex-item').length).toBe(1);
  });

  it('should render child component', () => {
    expect(wrapper.find('.fa').length).toBe(1);
    expect(wrapper.find('span').length).toBe(2);
  });
});
