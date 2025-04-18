import { format } from 'date-fns';

export default class Post {
    constructor (gender, age, body, id) {
        this.gender = gender;
        this.age = age;
        this.body = body;
        this.date = format(new Date.now(), 'dd/MM/yyyy');
        this.id = id;
    }
}