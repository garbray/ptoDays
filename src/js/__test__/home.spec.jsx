import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../components/search';

test('Search renders correctly', ()=> {
  const component = renderer.create(<Search placeholder="test input"/>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})
