const mongoose = require('mongoose');
const { moncrd } = require('../config/cred')

const url = `mongodb+srv://${moncrd.user}:${moncrd.pass}@cluster0.oxhj6pg.mongodb.net/profitex`;


const dbConnect = async () => {
  try {
    const data = await mongoose.connect(url)
    console.log('Db Connected ')
  } catch (err) {
    console.log(err);
  }
}

module.exports = dbConnect;