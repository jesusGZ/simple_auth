
const mongoose = require("mongoose");
class conexion {
  connect(config) {
    mongoose.connect(`mongodb://${config.dbhost}:${config.dbport}/${config.db}?authSource=admin`, {
      user: `${config.user}`, pass: `${config.pass}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      //collection: 'server_Pb',
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, '[Error de conexion a mongo] : ')); // enlaza el track de error a la consola (proceso actual)
    db.once('open', () => {
      console.log('[db] Conectada con éxito'); // si esta todo ok, imprime esto
    });

    // Catch end Node application event
    process.on('SIGINT', function () {
      mongoose.connection.close(function () {
        console.log('Conexión cerrada');
        process.exit(0);
      });
    });
  }

  disconnect() {
    mongoose.connection.close(function () {
      //console.log('Conexión cerrada');
    })
  }

}

module.exports = conexion;