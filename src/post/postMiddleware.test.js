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

        gender = 'Female';
        age = 23;
        body = 'dfsd'
        expect(() => validatePost(gender, age, body)).not.toThrow();
    });

    test('it throws with gender different than Male, Female, Trans or Non-binary', () => {
        let gender = 'Pippo';
        let age = 33;
        let body = 'cocco';
        expect(() => validatePost(gender, age, body)).toThrow('Gender must be chosen among the available choices!!!');
    });

    test('it does not throw with Non-binary', () => {
        let gender = 'Non-binary';
        let age = 33;
        let body = 'cocco';
        expect(() => validatePost(gender, age, body)).not.toThrow();
    })

    test('it throws with age less than 13 or more that 99 but not with age in range', () => {
        let gender = 'Non-binary';
        let age = 3;
        let body = 'cocco';
        expect(() => validatePost(gender, age, body)).toThrow('Age must be between 13 and 99!!!');

        gender = 'Non-binary';
        age = 103;
        body = 'cocco';
        expect(() => validatePost(gender, age, body)).toThrow('Age must be between 13 and 99!!!');

        gender = 'Non-binary';
        age = 43;
        body = 'cocco';
        expect(() => validatePost(gender, age, body)).not.toThrow();
    });
});