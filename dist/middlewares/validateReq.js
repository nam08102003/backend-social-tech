"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        const valid = error == null;
        if (valid) {
            next();
        }
        else {
            const { details, message } = error;
            const messages = details.map((i) => i.message).join(',');
            res.status(400).json({ error: messages, msg: message });
        }
    };
};
exports.default = validateRequest;
//# sourceMappingURL=validateReq.js.map