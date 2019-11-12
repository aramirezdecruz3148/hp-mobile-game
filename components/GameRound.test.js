import React from 'react';
import { shallow } from 'enzyme';
import GameRound from './GameRound';

describe('GameRound component', () => {
  it('renders GameRound', () => {
    const wrapper = shallow(<GameRound round={2}/>);
    expect(wrapper).toMatchSnapshot();
  });
});