exports.errorHandler = (error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message || 'A server error occurred',
    },
  });
};

exports.notFoundHandler = (req, res, next) => {
  const error = new Error('404 - Route not found');
  error.status = 404;
  next(error);
};
