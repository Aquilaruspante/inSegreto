import storage from './storage';
import Post from './post';

describe('getPosts method', () => {
    beforeEach(async () => {
        await storage.addPost('Male', 17, 'Lecco gatti');
        await storage.addPost('Female', 23, 'Bacio chiappe');
    })

    test('getPosts returns an array with 2 posts', () => {
        expect(storage.getPosts()).toHaveLength(2);
    })

    test('getPost second element to be secondPost', () => {
        const post = storage.getPosts()[1];
        console.log(post);

        expect(post.gender).toBe('Female');
        expect(post.age).toBe(23);
        expect(post.body).toBe('Bacio chiappe');
        expect(post.id).toBe(1);
    })
})

