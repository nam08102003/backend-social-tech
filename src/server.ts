import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import multer from 'multer';
import routeAuth from './routes/auth';
import routeApi from './routes/api';
import connectDB from './services/connectDB';

dotenv.config();

const port = process.env.PORT || 6868;

const server = express();

server.use(express.json());
server.use(helmet());
server.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
server.use(morgan('common'));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(cors());
server.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// FILE STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// ROUTE API
server.use('/auth', routeAuth);
server.use('/api', routeApi);

server.get('/', (req, res) => {
  res.send('Server Social Tech');
});

connectDB(process.env.DATABASE_URL).then(() => {
  server.listen(port, () => {
    console.log('Open port ', port);
  });
});
