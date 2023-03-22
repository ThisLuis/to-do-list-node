require('colors');

const showMenu = () => {
    console.clear();
    console.log('========================='.cyan)
    console.log('  Seleccione una opcion  '.cyan);
    console.log('=========================\n'.cyan)

    console.log(`${ '1.'.green } Crear tarea`.bold);
    console.log(`${ '2.'.green } Listar tareas`.bold);
    console.log(`${ '3.'.green } Listar tareas completadas`.bold);
    console.log(`${ '4.'.green } Listar tareas pendientes`.bold);
    console.log(`${ '5.'.green } Completar tarea`.bold);
    console.log(`${ '6.'.green } Borrar tarea`.bold);
    console.log(`${ '0.'.green } Salir\n`.bold);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opcion: ', ( opt ) => {
        readline.close();
    });

}

const pause = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${ 'ENTER'.green } para continuar \n`, ( opt ) => {
        readline.close();
    });
}

module.exports = {
    pause,
    showMenu,
}