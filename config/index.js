require('dotenv').config();

class Config{

  service(){
      return{
        port1: process.env.MONGO_LOCAL_PORT,
        port2: process.env.MONGO_EXT_PORT,
        host: process.env.MONGO_EXT_HOST,
      }
  }

  mongo(){
      return {
        dbhost: process.env.MONGO_EXT_DBHOST,
        dbport: process.env.MONGO_EXT_DBPORT,
        user: process.env.MONGO_EXT_USER,
        pass: process.env.MONGO_EXT_PASS,
        db: process.env.MONGO_EXT_DBNAME,
      }
  }

  key(){
        return process.env.KEY;
  }

  mCryptKey() {
    return process.env.KEY
  }
}

module.exports = Config;