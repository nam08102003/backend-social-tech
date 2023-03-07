"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Route User
router.post('/add-friend', userController_1.addFriend);
router.get('/get-one-friend', userController_1.getOneFriend);
router.get('/get-list-friend', userController_1.getListFriend);
router.put('/update-friend', userController_1.updateFriend);
router.delete('/delete-friend', userController_1.deleteFriend);
exports.default = router;
//# sourceMappingURL=api.js.map