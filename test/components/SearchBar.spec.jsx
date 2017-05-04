import React from 'react';
import { shallow, mount, render } from 'enzyme';
jest.Mock('../../src/js/components/SearchBar');
import SearchBar from '../../src/js/components/SearchBar';
console.log(SearchBar);

describe('SearchBar component', () => {
  xit('should render without throwing an error', () => {
    const sort = <span>
          <select onChange={this.props.sortAction}>
            {this.props.sorts}
          </select>
        </span>;
    expect(shallow(<SearchBar />).contains('.search-box')).toBe(true);
    // expect(shallow(<Login />).contains(<FontAwesome name="fa fa-google-plus" />)).toBe(true);
    // expect(shallow(<Login />).contains(button)).toBe(true);
  });

  xit('should be selectable by class "search-box"', function() {
    expect(shallow(<Login />).is('.search-box')).toBe(true);
  });

  xit('should mount in a full DOM', function() {
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });

  xit('should be wrapped in a single "div" element', function() {
    const wrapper = 
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });

  xit('should be selectable by class "btn"', function() {
    expect(shallow(<SearchBar />).contains(<Select />)).toBe(true);
  });

  xit('allows us to set props', () => {
    const wrapper = mount(<SearchBar bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});
