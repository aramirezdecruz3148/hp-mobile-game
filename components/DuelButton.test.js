import React from 'react';
import { shallow } from 'enzyme';
import DuelButton from './DuelButton';

describe('DuelButton component', () => {
  it('renders DuelButton', () => {
    const wrapper = shallow(<DuelButton 
      setDuel={() => { }}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});