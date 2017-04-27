import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import {Main} from '../../pages/Main/Main';

describe('components/Menu', () => {
  let main = ReactTestUtils.renderIntoDocument(<Main/>);
  let menu = ReactTestUtils.findRenderedDOMComponentWithClass(main, 'menu');

  it('has been rendered', () => {
    expect(menu).toExist();
  });

  it('has correct items length equals 5', () => {
    let items = menu.getElementsByTagName('a');
    expect(items.length).toEqual(5);
  });

});