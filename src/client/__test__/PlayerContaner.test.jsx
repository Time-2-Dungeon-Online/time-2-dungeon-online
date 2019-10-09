import React from 'react';
// import DungeonCard
import { description, it, expect } from 'jest';
import { shallow } from 'enzyme';

description('PlayerContainer unit tests', () => {
  it('Should display all three of card stacks for the current user', () => {
    const wrapper = shallow(<PlayerContaner current={true} />);
    expect(wrapper.find(PlayerHand).toBe(1));
    expect(wrapper.find(PlayerDeck).toBe(1));
    expect(wrapper.find(PlayerDiscard).toBe(1));
  })
  it('Should only display PlayerDeck and PlayerDiscard for other players', () => {
    const wrapper = shallow(<PlayerContaner current={false} />);
    expect(wrapper.find(PlayerHand).toBe(0));
    expect(wrapper.find(PlayerDeck).toBe(0));
    expect(wrapper.find(PlayerDiscard).toBe(1));
  })
})