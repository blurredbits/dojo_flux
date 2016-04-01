import ActionTypes from '../../src/constants'
import ReviewActions from '../../src/actions/reviewActions'
import { sinonSandbox } from '../helpers/sinon'
import AppDispatcher from '../../src/dispatcher'

describe('review actions', function(){
  sinonSandbox()

  describe('#newReview', function(){
    let review = {
      title: 'ex machina',
      score: 9001
    }
    function doAction(){
      ReviewActions.newReview(review)
    }

    beforeEach(function(){
      this.dispatch = this.sinon.stub(AppDispatcher, 'dispatch')
    })

    it('dispatches a create review event', function(){
      doAction() // <- this is symbolic
      expect(this.dispatch).to.have.been.calledWith({
        actionType: ActionTypes.CREATE_REVIEW,
        review: review
      })
    })
  })
});