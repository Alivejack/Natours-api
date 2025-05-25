const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  // this is the old and nonsecure version of getting data from user
  // const newUser = await User.create(req.body);

  // this is the secure way of getting data from user
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  res.status(201).json({
    status: 'success',
    date: {
      user: newUser,
    },
  });
});
