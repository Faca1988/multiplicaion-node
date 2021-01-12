// const { table } = require('console');
const fs = require('fs');
const colors = require('colors');


let table = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero y no es valido como base`);
            return;
        } else {
            if (!Number(limit)) {
                reject(`El valor introducido ${limit} no es un numero y no es valido como limite`);
            } else {
                let data = '';

                for (let idx = 1; idx <= limit; idx++) {
                    data += `${base} * ${idx} = ${base * idx}\n`;
                }
                resolve(data);
            }
        }
        // console.log(data);
    });
};

let writeFile = async(base, limit) => {
    let data = await table(base, limit);
    // console.log(data);
    return new Promise((resolve, reject) => {
        fs.writeFile(`tablas/tabla del ${base} al ${limit}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla del ${base} al ${limit}.txt.txt`);
        });
    });
};

let getTable = async(base, limit) => {

    let data = await table(base, limit);

    // return new Promise((resolve, reject) => {
    //     if (!data) {
    //         //throw new Error('No se pudo obtener la tabla de multiplicar');
    //         reject('No se pudo obtener la tabla de multiplicar');
    //     } else {
    //         resolve(data);
    //     }
    // });

    return data;
};


let showTable = async(base, limit) => {


    let data = '================================\n';
    data += colors.yellow(`Tabla del ${base} al ${limit}\n`);
    data += '================================\n';
    data += await getTable(base, limit);

    return data;
};

module.exports = {
    writeFile,
    getTable,
    showTable
};