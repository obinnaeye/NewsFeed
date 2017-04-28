import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SearchBar from '../../src/js/components/SearchBar';

describe('SearchBar component', () => {
  it('should render without throwing an error', () => {
    
    const sort = <span>
          <select onChange={this.props.sortAction}>
            {this.props.sorts}
          </select>
        </span>;
      
    expect(shallow(<SearchBar />).contains(sort)).toBe(true);
    // expect(shallow(<Login />).contains(<FontAwesome name="fa fa-google-plus" />)).toBe(true);
    // expect(shallow(<Login />).contains(button)).toBe(true);
  });

  it('should be selectable by class "search-box"', function() {
    expect(shallow(<Login />).is('.search-box')).toBe(true);
  });

 /* it('should mount in a full DOM', function() {
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });
  
  it('should be wrapped in a single "div" element', function() {
    const wrapper = 
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });*/
  
  /*it('should be selectable by class "btn"', function() {
    expect(shallow(<SearchBar />).contains(<Select />)).toBe(true);
  });*/

  /*it('allows us to set props', () => {
    const wrapper = mount(<SearchBar bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });*/
});