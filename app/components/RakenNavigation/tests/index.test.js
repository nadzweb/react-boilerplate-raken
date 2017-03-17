import React from 'react';
import { shallow } from 'enzyme';

import RakenNavigation from '../index';

describe('<RakenNavigation />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <RakenNavigation />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
