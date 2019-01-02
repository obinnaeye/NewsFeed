/* global describe, it, expect */
import React from 'react';
import { mount } from 'enzyme';
import Index from '../../src/js/pages/Index';

describe('Index page', () => {
  it('should exist', () => {
    expect(<Index />).toBeDefined();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Index />).find('HomeBody').length).toBe(1);
  });
});
