import { Request, Response } from 'express';
import { getUserById } from '../services/userServices';
import { createFriend } from '../services/friendServices';
import ValidationErrors from '../errors/ValidationErrors';

export const addFriend = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const userId = data?.userId;
    const friendId = data?.friendId;
    const user = getUserById(userId);
    const friend = getUserById(friendId);

    if (!user || !friend) {
      res.status(400).json({
        success: false,
        message: 'Tài khoản không tồn tại'
      });
    }

    const result = await createFriend(data);

    res.status(200).json({
      success: true,
      message: 'Thêm bạn thành công',
      result
    });
  } catch {
    throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại', 'errors');
  }
};

export const getOneFriend = async (req: Request, res: Response) => {};

export const getListFriend = async (req: Request, res: Response) => {};

export const updateFriend = async (req: Request, res: Response) => {};
export const deleteFriend = async (req: Request, res: Response) => {};
