import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../../src/components/reviewList.js';
import TestUtils from 'react-addons-test-utils';

describe('Review list', function() {
  let reviews = [
    {
      title: 'jurasic park',
      score: 1
    },
    {
      title: 'batman ft superman',
      score: -10
    }
  ];

  beforeEach(function() {
    this.component = TestUtils.renderIntoDocument(
      <ReviewList
        reviews={reviews}
      />
    );
    this.renderDom = (function(){
      return ReactDOM.findDOMNode(this.component);
    }).bind(this);
  });

  it('has a jurasic park movie review', function(){
    expect(this.renderDom().textContent).to.match(/jurasic park/)
  })
})