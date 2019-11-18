import React from 'react';
import { shallow } from 'enzyme';
import StartGame from './StartGame';

describe('StartGame component', () => {
  it('renders StartGame', () => {
    const wrapper = shallow(<StartGame 
      setGame={() => { }}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});