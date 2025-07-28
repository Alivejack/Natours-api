const express = require('express');
const reviewController = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, reviewController.getAllReviews)
  .post(protect, restrictTo('user'), reviewController.createReview);

module.exports = router;
