import Post from './post';

test('post gets instantiated correctly', () => {
    const newPost = new Post('Male', 23, 'Scopo gatti');

    expect(newPost.gender).toBe('Male');
    expect(newPost.age).toBe(23);
    expect(newPost.body).toBe('Scopo gatti');
})