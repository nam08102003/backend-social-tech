import mysql from 'mysql2/promise';
import { dbConfig } from '../config/config';

const connectDB = async () => {
  const connectDB = mysql.createPool(dbConfig);

  return connectDB;

  // connectDB.connect((err) => {
  //   if (err) throw err;

  //   console.log('Connect database success!!');
  // });
};

export default connectDB;
