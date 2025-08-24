import { validationResult } from 'express-validator';

export const getMe = async (req, res) => {
  res.json({ user: req.user });
};

export const updateMe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, phoneNumber } = req.body;
  if (name !== undefined) req.user.name = name;
  if (phoneNumber !== undefined) req.user.phoneNumber = phoneNumber;
  await req.user.save();
  res.json({ user: req.user });
};
