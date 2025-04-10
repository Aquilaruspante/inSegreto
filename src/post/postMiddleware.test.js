import { validatePost } from "./postMiddleware";

describe('validatePost function', () => {
    test('it throws with one element missing', () => {
        let gender = '';
        let age = 23;
        let body = 'asd'
        expect(() => validatePost(gender, age, body)).toThrow('All fields must be filled!!!');

        gender = 'Male';
        age = null
        body = 'asd'
        expect(() => validatePost(gender, age, body)).toThrow('All fields must be filled!!!');

        gender = 'Female';
        age = 23;
        body = ''
        expect(() => validatePost(gender, age, body)).toThrow('All fields must be filled!!!');
    });
});