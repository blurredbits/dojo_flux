import ReviewStore from '../../src/stores/reviewStore.js'
import ActionTypes from '../../src/constants'
import AppDispatcher from '../../src/dispatcher'

describe('Review store', function() {
  describe('#getAll', function() {
    it('returns an array of reviews', function() {
      let subject = ReviewStore.getAll();
      expect(subject).to.be.an('Array');
    })
  })

  describe('#newReview', function() {
    it('creates a new review', function(){

      let review = {
       title: 'Santiago\s Mama',
       score: 10 
      }

      let expectedDispatch = {
        actionType: ActionTypes.CREATE_REVIEW,
        review: review
      }

      AppDispatcher.dispatch(expectedDispatch);

      expect(ReviewStore.getAll().length).to.eq(1);
    })
  })
})