import React from 'react';
import renderer from 'react-test-renderer';

import About from './About';

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
});