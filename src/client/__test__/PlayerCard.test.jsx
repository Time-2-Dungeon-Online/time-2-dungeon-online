import React from 'react';
// import PlayerCard
import { description, it, expect } from 'jest';
import { shallow } from 'enzyme';

description('PlayerHand unit tests', () => {
  it('Should display the properties correctly', () => {
    const wrapper = shallow(<PlayerCard type="foo" property1="bar" property2={null} />);
    expect(wrapper.find(PlayerCard).toBe(3));
    const wrapper2 = shallow(<PlayerCard type="bar" property1="foo" property2="coo" />);

  })
  it('Should dispatch action when clicked on', () => {
    const wrapper = shallow(<PlayerCard type="foo" property1="bar" property2={null} />);
  })
})