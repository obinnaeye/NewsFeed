/* global describe, it, expect */
import React from 'react';
import { mount, shallow } from 'enzyme';
import NewsPage from '../../src/js/pages/NewsPage';
import mockData from '../mocks/mockData.json';

describe('NewsPage component', () => {
  const initialSource = [];
  const sources = mockData.data.articles;
  it('should exist', () => {
    expect(<NewsPage />).toBeDefined();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<NewsPage />).find('NavBar').length).toBe(1);
  });

  it('should mount and render a "NavBar" element as the first child', () => {
    const wrapper = mount(<NewsPage />);
    expect(wrapper.children().first().is('NavBar')).toBe(true);
  });

  it('should contain only three elements as direct children', () => {
    const wrapper = mount(<NewsPage />);
    expect(wrapper.children().length).toEqual(4);
  });

  it('should accept props', () => {
    const wrapper = mount(<NewsPage sources={initialSource} />);
    expect(wrapper.props().sources).toEqual([]);
    wrapper.setProps({ sources });
    expect(wrapper.props().sources).toEqual(sources);
  });

  it('should render child component', () => {
    expect(mount(<NewsPage />).find('NavBar').length).toBe(1);
    expect(mount(<NewsPage />).find('NewsList').length).toBe(1);
    expect(mount(<NewsPage />).find('SourceBar').length).toBe(1);
  });

  it('should be an object and can have instances', () => {
    const wrapper = mount(<NewsPage />);
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(NewsPage);
  });

  it('should have an initial state', () => {
    const wrapper = shallow(<NewsPage />);
    expect(wrapper.state('sources')).toEqual([]);
  });

  it('should be a class', () => {
    const wrapper = shallow(<NewsPage />);
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(NewsPage);
  });
});

