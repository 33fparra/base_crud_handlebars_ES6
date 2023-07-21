import { User } from '../models/user.js';

export const getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await User.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'User deleted' });
};
