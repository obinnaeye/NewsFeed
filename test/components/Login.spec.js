/* global describe, it, expect */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../../src/js/components/Login';
import FontAwesome from '../../src/js/components/FontAwesome';

describe('Login component', () => {
  const shallowWrapper = shallow(<Login />);
  it('should render without throwing an error', () => {
    const button = (<button className="btn2 btn">
      <a href="/auth/google">
        <FontAwesome
          name="fa2 fa fa-google-plus"
        />
        <span> Login with Google</span>
      </a>
    </button>);
    expect(shallowWrapper
      .contains(<span> Login with Google</span>))
      .toBe(true);
    expect(shallowWrapper.contains(<FontAwesome name="fa2 fa fa-google-plus" />))
      .toBe(true);
    expect(shallowWrapper.contains(button)).toBe(true);
  });

  it('should be selectable by class "btn"', () => {
    expect(shallowWrapper.is('.btn')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Login />).find('.btn').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Login />).text()).toEqual(' Login with Google');
  });
});
