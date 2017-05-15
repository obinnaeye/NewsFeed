import React from 'react';
import { mount } from 'enzyme';
import HomeHeader from '../../src/js/components/homeHeader';

/* eslint-disable no-undef */
describe('HomeHeader component', () => {
  it('should exist', () => {
    expect(<HomeHeader />).toBeDefined();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<HomeHeader />).find('.navbar-top').length).toBe(1);
  });
});
