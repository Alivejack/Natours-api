const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'error',
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(500).json({
    status: 'error',
    data: {
      user,
    },
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'error',
    data: {
      user: null,
    },
  });
};

