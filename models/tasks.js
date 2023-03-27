import Task from './task.js';

class Tasks {

    _list = {};

    get listArr() {
        const list = [];
        // ? Con Object.keys extraemos todas las llaves que tenga el arreglo _list
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push( task );
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArr( tasks = []) {

        tasks.forEach( (task) => {
            this._list[task.id] = task;

        });
    }

    createTask( description = '' ) {
        const task = new Task( description );
        this._list[ task.id ] = task;
    }
}

export default Tasks;