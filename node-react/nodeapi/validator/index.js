exports.createPostValidator = (req, res, next) => {
  //title validation
  req.check("title", "Write a title").notEmpty();
  req.check("title", "Enter words between 4 to 150 characters").isLength({
    min: 4,
    max: 150
  });
  //body validation
  req.check("body", "Write a body").notEmpty();
  req.check("body", "Enter words between 4 to 2000 characters").isLength({
    min: 4,
    max: 2000
  });
  //check for errors
  const errors = req.validationErrors();
  if(errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({error: firstError});
  }
  //proceed to next middleware
  next();
};