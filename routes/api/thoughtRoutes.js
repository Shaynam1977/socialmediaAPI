const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
