import colors from 'colors';

import { inquirerMenu, pause } from './helpers/inquirer.js';
console.clear();

const main = async() => {
    console.log('Hola mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        await pause();
    } while( opt !== '0');

}

main();