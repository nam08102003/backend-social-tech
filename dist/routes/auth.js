"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const router = (0, express_1.Router)();
router.post('/login', authControllers_1.loginUser);
router.post('/register', authControllers_1.registerUser);
router.post('/logout', authControllers_1.logoutUser);
exports.default = router;
//# sourceMappingURL=auth.js.map