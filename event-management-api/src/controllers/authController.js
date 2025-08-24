import User from '../models/User.js';
import { validationResult } from 'express-validator';
import { signToken, setTokenCookie } from '../utils/token.js';

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, password, phoneNumber } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email already registered' });

  const user = await User.create({ name, email, password, phoneNumber });
  const token = signToken({ id: user._id });
  setTokenCookie(res, token);
  res.status(201).json({ user });
};

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = signToken({ id: user._id });
  setTokenCookie(res, token);
  res.json({ user });
};

export const logout = async (_req, res) => {
  res.clearCookie('token', { path: '/' });
  res.json({ message: 'Logged out' });
};
