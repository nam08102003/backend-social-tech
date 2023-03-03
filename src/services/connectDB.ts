import mysql from 'mysql2';

const connectDB = async (url: string) => {
  const connectDB = mysql.createConnection(url);

  connectDB.connect((err) => {
    if (err) throw err;

    console.log('Connect database success!!');
  });
};

export default connectDB;
