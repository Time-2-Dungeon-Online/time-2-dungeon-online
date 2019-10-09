import React from 'react';
// import CurrentDungeon
import { description, it, expect } from 'jest';
import { shallow } from 'enzyme';

description('CurrentDungeon unit tests', () => {
  it('Should contain at least one requirement', () => {
    const wrapper = shallow(<CurrentDungeon />);
    expect(wrapper.find('.requirement').toBeGreaterThanOrEqual(1));
  })
})