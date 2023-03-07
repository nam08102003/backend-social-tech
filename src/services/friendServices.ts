import { UserFriend } from '../models/UserFriend';
import ValidationErrors from '../errors/ValidationErrors';

export const createFriend = async (payload: any) => {
  const data = await UserFriend.create(payload);

  return data;
};

export const getOneFriendById = async (id: number) => {};

export const getListFriend = async () => {};

export const updateFriend = async (id: number) => {};

export const deleteFriend = async (id: number) => {};
