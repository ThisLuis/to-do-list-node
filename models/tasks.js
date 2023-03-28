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

    fullList( ){
        let task = '';
        let id = 1;
        //console.log(this._list, 'asd');
        this.listArr.forEach( ( task, index ) => {
            const idx = `${ index + 1}`.green;
            const { description, completeOn } = task;
            const state = ( completeOn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            console.log(`${ idx } ${ description } :: ${ state }`);
        });

        // 1: En verde
        // Completado: Verde
        // Pendiente: Rojo

        // 1. Alma :: Completada | Pendiente
        // 2. Mente :: Completada | Pendiente
        // 3. Realidad :: Completada | Pendiente
    }
}

export default Tasks;