import { v4 as uuidv4 } from 'uuid';

class Task {

    id = '';
    description = '';
    completeOn = null;

    constructor(description) {
        this.id = uuidv4();
        this.description = description;
        this.completeOn = null;
    }

}

export default Task;