require('colors');

const { pause, showMenu } = require('./helpers/messages');

console.clear();

const main = async() => {
    console.log('Hola mundo');

    let opt = '';

    // do {

    // } while( opt !== '0');

    showMenu();

    pause();
}

main();