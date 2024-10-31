// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
exports.register = async (req, res) => {
  // Registration logic
