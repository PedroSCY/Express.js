import {v4 as uuidv4} from 'uuid';

export class Id {

    static novo() {
        return uuidv4();
    }
    
}