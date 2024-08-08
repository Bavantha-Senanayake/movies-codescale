// routes/reviews.js

const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');

// POST /movies/:id/reviews: Add a review for a movie
router.post('/movies/:id/reviews', reviewController.addReview);

module.exports = router;
