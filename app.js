import colors from 'colors';

import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { saveDB, readDB } from './helpers/saveFile.js';
import Task from './models/task.js';
import Tasks from './models/tasks.js';
console.clear();

const main = async() => {
    let opt = '';
    let complete = false;
    const tasks = new Tasks();

    const tasksDB = readDB();

    if( tasksDB ) {
        // TODO: Llamar el metodo readTasks
        tasks.loadTasksFromArr( tasksDB );
    }


    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case '1':
                const desc = await readInput('Descripcion: ');
                tasks.createTask( desc );
            break;

            case '2':
                tasks.fullList();
                
            break;

            case '3':
                tasks.listPendingComplete();
            break;

            case '4':
                tasks.listPendingComplete( complete );
            break;
        }

        saveDB( tasks.listArr );
        

        await pause();
    } while( opt !== '0');

}

main();