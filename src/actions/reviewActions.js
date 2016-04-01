import AppDispatcher from '../dispatcher'
import ActionTypes from '../constants'

export default{
  newReview: function(review){
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATE_REVIEW,
      review: review
    });
  }
}