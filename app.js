import colors from 'colors';

import { inquirerMenu, pause } from './helpers/inquirer.js';
import Task from './models/task.js';
import Tasks from './models/tasks.js';
console.clear();

const main = async() => {
    let opt = '';

    do {
        // opt = await inquirerMenu();
        const task = new Task('Comprar');
        // const tasks = new Tasks();
        console.log(task);
        await pause();
    } while( opt !== '0');

}

main();