// const argv = require('yargs').argv;
// const { table } = require('console');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { writeFile: crearArchivo, getTable, showTable } = require('./multiplicar/multiplicar.js');

// let base = '2';

// let argv2 = process.argv;
// console.log(argv2);

// console.log(argv);

// console.log('BASE: ', argv.base);
// console.log('LIMITE: ', argv.limite);

let command = argv._[0];

switch (command) {
    // case 'list':
    //     console.log('Listar');
    //     break;
    case 'list':
        showTable(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(e => console.log(colors.red(e)));
        break;
    case 'create':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(colors.red(e)));
        break;
    default:
        console.log('Comando no reconocido');
}