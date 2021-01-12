const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar', opts)
    .command('create', 'Crea un archivo con la tabla segun la base y el limite establecidos', opts)
    .help()
    .argv;


module.exports = {
    argv
};