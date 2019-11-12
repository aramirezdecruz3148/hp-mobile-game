import React from 'react';
import { shallow } from 'enzyme';
import PlayerStats from './PlayerStats';

describe('PlayerStats component', () => {
  it('renders PlayerStats', () => {
    const wrapper = shallow(<PlayerStats health={8} />);
    expect(wrapper).toMatchSnapshot();
  });
});