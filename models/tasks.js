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

    deleteTask( id = '' ) {
        if ( this._list[id] ) {
            delete this._list[id];
        }
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
        //console.log(this._list, 'asd');
        this.listArr.forEach( ( task, index ) => {
            const idx = `${ index + 1}`.green;
            const { description, completeOn } = task;
            const state = ( completeOn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            console.log(`${ idx } ${ description } :: ${ state }`);
        });
    }

    listPendingComplete( complete = true ) {

        let count = 0;
        this.listArr.forEach( task => {

            const { description, completeOn } = task;
            const state = ( completeOn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            
            if ( complete ) {

                if ( completeOn ) {
                    count += 1;
                    console.log(`${ (count + '.').green } ${ description } :: ${ completeOn.green }`);
                }

            } else {
                if ( !completeOn ) {
                    count += 1;
                    console.log(`${ (count + '.').green } ${ description } :: ${ state }`);
                    
                }
            }
        });
        // ? FORMA ALTERNATIVA (POR MEJORAR)
        // if( complete ) {
        //     const taskComplete = this.listArr.filter( task => task.completeOn !== null);
        //     taskComplete.forEach ( ( task, index ) => {
        //         const idx = `${ index + 1}`.green;
        //         const { description, completeOn } = task;
        //         const state = ( completeOn )
        //                         ? 'Completada'.green
        //                         : 'Pendiente'.red;
        //         console.log(`${ idx } ${ description } :: ${ state }`); 
        //     })
            
        // } else {
        //     const taskPending = this.listArr.filter( task => task.completeOn === null);
        //     taskPending.forEach ( ( task, index ) => {
        //         const idx = `${ index + 1}`.green;
        //         const { description, completeOn } = task;
        //         const state = ( completeOn )
        //                         ? 'Completada'.green
        //                         : 'Pendiente'.red;
        //         console.log(`${ idx } ${ description } :: ${ state }`); 
        //     })
        // }
    }

    toggleComplete ( ids = [] ) {
        ids.forEach( id => {
            const task = this._list[id];
            if ( !task.completeOn ) {
                task.completeOn = new Date().toISOString();
            }
        });

        // ? Sacar ids de las tareas que no esten completadas y colocarlas en null
        this.listArr.forEach( task => {

            if ( !ids.includes( task.id ) ) {
                this._list[task.id].completeOn = null;
            }

        })
    }
}

export default Tasks;