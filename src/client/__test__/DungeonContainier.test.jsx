import React from 'react';
// import DungeonContainer
import { description, it, expect } from 'jest';
import { shallow } from 'enzyme';

description('DungeonContainier unit tests', () => {
  it('Should contain CurrentDungeon and DungeonDeck', () => {
    const wrapper = shallow(<DungeonContainier />);
    expect(wrapper.find(CurrentDungeon).toBe(1));
    expect(wrapper.find(DungeonDeck).toBe(1));
  })
})