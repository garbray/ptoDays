import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../components/search';

configure({ adapter: new Adapter() });

test('Search renders correctly', () => {
  const component = shallow(<Search placeholder="test input" />);
  expect(component).toMatchSnapshot();
});

test('Search should have an input element', () => {
  const component = shallow(<Search placeholder="test input" />);
  expect(1).toEqual(component.find('input').length);
});
