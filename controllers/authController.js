const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');

exports.signup = catchAsync(async (req, res, next) => {
  // this is the nonsecure version of getting data from user
  // const newUser = await User.create(req.body);

  // this is the secure way of getting data from user
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: 'success',
    token,
    date: {
      user: newUser,
    },
  });
});

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  // 1) check if email and password exist

  if (!email || !password) {
    return next(new appError('Please provide email and password !'));
  }

  // 2) check if user exist && password is correct

  // 3) if everything ok, send token to client
  const token = '';
  res.status(200).json({
    status: 'success',
    token,
  });
};
