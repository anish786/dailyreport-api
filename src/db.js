import mongoose from 'mongoose';
import config from './config';

export default callback => {
  let db = mongoose.connect(config.mongoUrl, {useNewUrlParser:true});
  callback(db);
  console.log("Connected to: ", mongoose.connection.readyState);
}
