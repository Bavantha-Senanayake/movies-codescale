// controllers/reviewController.js

const Review = require('../models/reviewModel');
const Movie = require('../models/movieModel');

// Add a review for a movie
exports.addReview = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    const review = new Review({
      movie: movie._id,
      rating: req.body.rating,
      title: req.body.title,
      content: req.body.content,
    });

    await review.save();

    movie.reviews.push(review._id);

    // Recalculate average rating
    const reviews = await Review.find({ movie: movie._id });
    const averageRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;

    movie.averageRating = averageRating;
    await movie.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
