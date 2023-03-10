"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const friendController_1 = require("../controllers/friendController");
const router = (0, express_1.Router)();
// Route User
router.post('/add-friend', friendController_1.addFriend);
router.get('/get-one-friend', friendController_1.getOneFriend);
router.get('/get-list-friend', friendController_1.getListFriend);
router.put('/update-friend', friendController_1.updateFriend);
router.delete('/delete-friend', friendController_1.deleteFriend);
exports.default = router;
//# sourceMappingURL=api.js.map