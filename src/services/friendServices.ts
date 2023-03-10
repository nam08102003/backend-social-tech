import { UserFriend } from '../models/UserFriend';
import ValidationErrors from '../errors/ValidationErrors';
import { Op } from 'sequelize';

export const createFriend = async (payload: any) => {
  const data = await UserFriend.create(payload);

  return data;
};

export const getOneFriendById = async (options: any) => {
  const where = {
    [Op.or]: [] as any
  };

  if (!options?.userId || isNaN(options?.userId))
    throw new ValidationErrors('Id không hợp lệ', 'errors');

  where[Op.or].push({ userId: options?.userId });

  if (options?.friendId) {
    where[Op.or].push({ friendId: options.friendId });
  }

  const user = await UserFriend.findOne({
    where
  });

  if (!user) {
    throw new ValidationErrors('Không tìm thấy tài khoản', 'errors');
  }
  return user;
};

export const getListFriend = async (options: any) => {
  const where = {
    [Op.or]: [] as any
  };

  if (!options?.userId || isNaN(options?.userId))
    throw new ValidationErrors('Id không hợp lệ', 'errors');

  where[Op.or].push({ userId: options?.userId });

  if (options?.status) {
    where[Op.or].push({ status: options.status });
  }

  if (options?.type) {
    where[Op.or].push({ type: options.type });
  }

  const users = await UserFriend.findAll({ where });

  return users;
};

export const updateFriend = async (data: any, friendId: number, userId: number) => {
  if (!friendId || isNaN(friendId) || !userId || isNaN(userId))
    throw new ValidationErrors('Id không hợp lệ', 'errors');

  if (friendId && userId) {
    return await UserFriend.update(data, {
      where: { friendId, userId }
    });
  }
};

export const deleteFriend = async (friendId: number, userId: number) => {
  if (!friendId || isNaN(friendId) || !userId || isNaN(userId))
    throw new ValidationErrors('Id không hợp lệ', 'errors');

  return await UserFriend.destroy({
    where: { friendId, userId }
  });
};
