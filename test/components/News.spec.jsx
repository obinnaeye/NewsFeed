import React from 'react';
import { shallow, mount } from 'enzyme';

import News from '../../src/js/components/News';
/*eslint-disable */
describe('News component', () => {
  it('should exist', () => {
    expect(<News />).toBeDefined();
  });
  
  it('should render a "li" element', () => {
    expect(shallow(<News />).find('li').length).toBe(1);
  });
  
  it('should accept props', () => {
    const wrapper = mount(<News test='props'/>);
    expect(wrapper.props().test).toEqual('props');
    wrapper.setProps({ test: "props2" });
    expect(wrapper.props().test).toEqual('props2');
  });

  it('should mount in a full DOM', () => {
    expect(mount(<News />).find('.flex-item').length).toBe(1);
  });
  
  it('should render child component', () => {
    expect(mount(<News />).find('.fa').length).toBe(1);
    expect(mount(<News />).find('span').length).toBe(2);
  });
});