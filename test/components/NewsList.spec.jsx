import React from 'react';
import { shallow, mount, render } from 'enzyme';

import NewsList from '../../src/js/components/NewsList';

describe('NewsList component', () => {
  it('should exist', () => {
    expect(NewsList).toBeDefined();
  });

  it('should render one "ul" element', () => {
    expect(shallow(<NewsList />).find('ul').length).toBe(1);
  });

  it('should accept props', () => {
    const wrapper = mount(<NewsList test='props'/>);
    expect(wrapper.props().test).toEqual('props');
    wrapper.setProps({ test: "props2" });
    expect(wrapper.props().test).toEqual('props2');
  });

  it('should mount in a full DOM', () => {
    expect(mount(<NewsList />).find('.flex-container').length).toBe(1);
  });
});
