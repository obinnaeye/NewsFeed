import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsList from '../../src/js/components/NewsList';
import mockData from '../../mocks/mockData.json';

jest.dontMock('../../src/js/components/NewsList');
/* eslint-disable no-undef */
describe('NewsList component', () => {
  const news = mockData.data.articles;
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NewsList />);
  });

  it('allows us to set props', () => {
    expect(wrapper.node.props.news).toEqual([]);
    wrapper.setProps({ news });
    expect(wrapper.node.props.news).toEqual(news);
  });

  it('should exist', () => {
    expect(NewsList).toBeDefined();
  });

  it('should render one "ul" element', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should mount in a full DOM', () => {
    expect(wrapper.find('.flex-container').length).toBe(1);
  });
});
