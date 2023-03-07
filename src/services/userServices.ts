import { encryptSync } from '../utils/encrypt';
import { User } from '../models/connection';
import { Op } from 'sequelize';
import { size } from 'lodash';
import ValidationErrors from '../errors/ValidationErrors';
import { compareSync } from '../utils/encrypt';

export const createUser = async (payload: any) => {
  const gender = payload?.gender;

  if (gender.toUpperCase() === 'NỮ') {
    payload.gender = 1;
  } else if (gender.toUpperCase() === 'NAM') {
    payload.gender = 0;
  } else {
    payload.gender = 2;
  }

  payload.fullName = payload?.firstName + ' ' + payload?.lastName;
  payload.password = encryptSync(payload.password);
  const user = await User.create(payload);
  return user;
};

export const getUserById = async (id: number) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] }
  });
  if (!user) {
    throw new ValidationErrors('Không tìm thấy tài khoản', 'errors');
  }
  return user;
};

export const userExists = async (
  options: { email: string | null; mobile?: string | null } = {
    email: null,
    mobile: null
  }
) => {
  if (!options.email) {
    throw new ValidationErrors('Vui lòng nhập email', 'User');
  }
  const where: any = {
    [Op.or]: []
  };
  if (options.email) {
    where[Op.or].push({ email: options.email });
  }
  if (options.mobile) {
    where[Op.or].push({ email: options.mobile });
  }

  const users = await User.findAll({ where: where });
  return users.length > 0;
};

export const validatePassword = async (email: string, password: string) => {
  if (!email && !password) {
    throw new ValidationErrors('Vui lòng nhập emai và password', 'errors');
  }
  const where = {
    [Op.or]: [] as any
  };

  if (email) {
    where[Op.or].push({ email: email });
  }

  const user = await User.findOne({ where });

  return compareSync(password, user.password);
};

export const findOneUser = async (options: any) => {
  if (!options.email && !options.id) {
    throw new ValidationErrors('Please provide email or id ', 'User');
  }
  const where = {
    [Op.or]: [] as any
  };

  if (options.email) {
    where[Op.or].push({ email: options.email });
  }
  if (options.id) {
    where[Op.or].push({ id: options.id });
  }

  const user = await User.findOne({
    where,
    attributes: { exclude: ['password'] }
  });
  return user;
};

export const updateUserById = (data: any, userId: number) => {
  if (!data && !userId) {
    throw new ValidationErrors('Vui lòng nhập dữ liệu cần thay đổi và idUser', 'errors');
  }
  if (userId && isNaN(userId)) {
    throw new ValidationErrors('idUser không hợp lệ', 'errors');
  }
  if (data.id || userId) {
    const id = data.id || userId;

    if (data.password) {
      data.password = encryptSync(data.password);
    }

    return User.update(data, {
      where: { id: id }
    });
  }
};

export const deleteUserById = (userId: number) => {
  if (!userId) {
    throw new ValidationErrors('Please user id to delete', 'User');
  }
  if (userId && isNaN(userId)) {
    throw new ValidationErrors('Invalid user id', 'User');
  }

  return User.destroy({
    where: { id: userId }
  });
};
