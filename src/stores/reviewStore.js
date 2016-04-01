import AppDispatcher from '../dispatcher'
import ActionTypes from '../constants'
import ReviewStore from '../stores/reviewStore'

let _reviews = [];

export default {
  getAll(){
    return _reviews
  },

  newReview(review){
    _reviews.push(review)
  }
}

AppDispatcher.register(function(action) {
  if ( action.actionType == ActionTypes.CREATE_REVIEW ) {
    ReviewStore.newReview(action.review);
    // ReviewStore.emitChange();
  }
});