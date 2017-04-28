import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Select from 'react-select';

describe('SearchBar component', () => {
  /*it('should render without throwing an error', () => {
    
    const button = <button className="btn">
        <a href='/auth/google'>
            <FontAwesome
              name="fa fa-google-plus"
            />
            <span> Login with Google</span>
        </a>
      </button>;
      
    expect(shallow(<Select />).contains(<span> Login with Google</span>)).toBe(true);
    //expect(shallow(<Login />).contains(<FontAwesome name="fa fa-google-plus" />)).toBe(true);
    //expect(shallow(<Login />).contains(button)).toBe(true);
  });*/

  /*it('should be selectable by class "btn"', function() {
    expect(shallow(<Login />).is('.btn')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });
  
  it('should be wrapped in a single "div" element', function() {
    const wrapper = 
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });*/
  
  /*it('should be selectable by class "btn"', function() {
    expect(shallow(<SearchBar />).contains(<Select />)).toBe(true);
  });*/

  it('allows us to set props', () => {
    const wrapper = mount(<Select bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});