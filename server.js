const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const db = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(db).then(() => console.log('DB connection successful! 🔥'));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app is running on the port ${port}...`);
});
