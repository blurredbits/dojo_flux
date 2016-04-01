import React from 'react';

export default React.createClass({
  render: function(){
    return (
      <div>{this.props.reviews.map(function(review){
        return (<div className='review'>
            <div className='title'>{review.title}</div>
            <div className='score'>{review.score}</div>
          </div>
        )
      })}</div>
    );
  }
});