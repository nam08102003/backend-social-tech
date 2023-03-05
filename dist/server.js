"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const auth_1 = __importDefault(require("./routes/auth"));
const api_1 = __importDefault(require("./routes/api"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const ValidationErrors_1 = __importDefault(require("./errors/ValidationErrors"));
const connection_1 = require("./models/connection");
dotenv_1.default.config();
const server = (0, express_1.default)();
const port = process.env.PORT || 6868;
if (process.env.NODE_ENV === 'development') {
    server.use('*', errorHandler_1.default);
}
server.use(express_1.default.json());
server.use((0, helmet_1.default)());
server.use(helmet_1.default.crossOriginResourcePolicy({ policy: 'cross-origin' }));
server.use((0, morgan_1.default)('common'));
server.use(body_parser_1.default.json({ limit: '50mb' }));
server.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
server.use((0, cors_1.default)());
server.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'public/assets')));
// FILE STORAGE
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
// const upload = multer({ storage });
// ROUTE API
server.use('/auth', auth_1.default);
server.use('/api', api_1.default);
server.get('/', (req, res) => {
    res.send('Server Social Tech');
});
(0, connection_1.initDB)()
    .then(() => {
    console.log('Connect Database Success!!!');
    server.listen(port, () => {
        console.log('Open port ', port);
    });
})
    .catch((err) => {
    if (err)
        throw new ValidationErrors_1.default('Errors', 'Errors');
});
//# sourceMappingURL=server.js.map