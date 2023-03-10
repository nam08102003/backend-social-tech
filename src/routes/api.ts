import { Router } from 'express';
import {
  addFriend,
  getOneFriend,
  getListFriend,
  updateFriend,
  deleteFriend
} from '../controllers/friendController';

const router = Router();

// Route User
router.post('/add-friend', addFriend);
router.get('/get-one-friend', getOneFriend);
router.get('/get-list-friend', getListFriend);
router.put('/update-friend', updateFriend);
router.delete('/delete-friend', deleteFriend);

export default router;
