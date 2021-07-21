require('dotenv').config();

class Config{

  service(){
      return{
        port: process.env.PORT,
        host: process.env.HOST,
      }
  }

  mongo(){
      return {
        dbhost: process.env.DB_HOST,
        dbport: process.env.DB_PORT,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        db: process.env.DB_NAME,
      }
  }

  key(){
        return process.env.KEY;
  }

  configToken(){
    return {
        SEED: process.env.SEED,
        expiration: process.env.expiration,
    }
  }
}

module.exports = Config;