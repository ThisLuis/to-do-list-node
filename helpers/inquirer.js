import colors from 'colors';

import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
            
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    
    console.log('========================='.cyan)
    console.log('  Seleccione una opcion  '.cyan);
    console.log('=========================\n'.cyan)

    const { option } = await inquirer.prompt( questions );
    //console.log( option)
    return option;
}

const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continur...`,
        }
    ];
    console.log('\n');
    await inquirer.prompt( question);
}

export { inquirerMenu, pause };