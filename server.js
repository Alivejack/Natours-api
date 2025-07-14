const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT REJECTION! 😢 Shutting Down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const db = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(db).then(() => console.log('DB connection successful! 🔥'));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`app is running on the port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 😢 Shutting Down...');
  server.close(() => {
    process.exit(1);
  });
});

