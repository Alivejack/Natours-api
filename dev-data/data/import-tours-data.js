const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(db).then(() => {
  console.log('db connection was successful');
});

// READ JSON FILE

const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}/tours-simple.json`,
    'utf-8',
  ),
);

// IMPORT DATA INTO DB

const improtData = async () => {
  try {
    await Tour.create(tours);
    console.log('DATA SUCCESSFULLY IMPORTED !');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA FROM DB

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('DATA SUCCESSFULLY DELETED !');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  improtData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
