import colors from 'colors';

import { inquirerMenu, pause, readInput, listTasksToDelete, confirm, showListCheckList } from './helpers/inquirer.js';
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

            case '5':
                const ids = await showListCheckList( tasks.listArr);
                tasks.toggleComplete( ids );
            break;

            case '6': // TODO: Listado de las tareas que podemos borrar
                const id = await  listTasksToDelete( tasks.listArr );
                if ( id !== '0' ) {
                    const ok = await confirm('¿Estas Seguro?');
                    if ( ok ) {
                        tasks.deleteTask( id );
                        console.log('T6area Borrada');
                    }
                }
            break;
        }

        saveDB( tasks.listArr );
        

        await pause();
    } while( opt !== '0');

}

main();