import React from 'react';
import { shallow } from 'enzyme';

import RakenNavigation from '../index';

describe('<RakenNavigation />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <RakenNavigation />
    );
    expect(renderedComponent.prop('className')).toBeDefined();
    expect(renderedComponent.find('.raken-nav-wrap')).toBeDefined();
  });
});
