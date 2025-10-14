const express = require('express');
const tourController = require('../controllers/tourController');
const { protect, restrictTo } = require('../controllers/authController');
const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

// router.param('id', tourController.checkID);

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-tours')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router
  .route('/monthly-plan/:year')
  .get(
    protect,
    restrictTo('admin', 'lead-guide', 'guide'),
    tourController.monthlyPlan,
  );

router.get(
  '/tours-within/:distance/center/:latlng/unit/:unit',
  tourController.getToursWithin,
);

router.get('/distances/:latlng/unit/:unit', tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    protect,
    restrictTo('admin', 'lead-guide'),
    tourController.uploadTourPhoto,
    tourController.resizeTourImages,
    tourController.updateTour,
  )
  .delete(
    protect,
    restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

module.exports = router;
