import colors from 'colors';

import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [ 'opt1', 'opt2', 'opt3' ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('========================='.cyan)
    console.log('  Seleccione una opcion  '.cyan);
    console.log('=========================\n'.cyan)

    const opt = await inquirer.prompt( questions );
    return opt;
}

export { inquirerMenu };