import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import {Main} from './Main';

describe('pages/Main', function () {
  it('renders without problems', () => {
    let item = ReactTestUtils.renderIntoDocument(<Main/>);
    expect(item).toExist();

    let a = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      item, 'a'
    );

    expect(a[0].textContent).toEqual("main");
  });
});