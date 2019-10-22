import React from 'react';
import { shallow } from 'enzyme';
import OpponentStats from './OpponentStats';

describe('OpponentStats component', () => {
  it('renders OpponentStats', () => {
    const wrapper = shallow(<OpponentStats 
      name="Draco Malfoy" 
      image="https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png/revision/latest/scale-to-width-down/350?cb=20180116013508" 
      health={10}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});