import { beforeEach, describe, jest } from '@jest/globals';
import storageLocal from "./localStorage";

beforeEach(() => {
    const store = {};
  
    global.localStorage = {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value;
      }),
    };
  });
  
describe('getPosts method', () => {
  beforeEach(() => {
    storageLocal.savePost('Male', 23, 'porco bikini');
    storageLocal.savePost('Female', 33, 'porco bsdfsdfsdfikini')
  });

  test('getPosts to have been called with "inSegreto-posts', () => {
    storageLocal.getPosts();

    expect(localStorage.getItem).toHaveBeenCalledWith('inSegreto-posts');
  });

  test('getPosts to have length 2', () => {
    expect(storageLocal.getPosts()).toHaveLength(2);
  });
});


describe('savePost method', () => {
  test('savePost to be called with porco bikini', () => {
    const posts = storageLocal.getPosts(); // 👈 QUI
    storageLocal.savePost('Male', 23, 'porco bikini');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'inSegreto-posts',
      JSON.stringify([...posts, { gender: 'Male', age: 23, body: 'porco bikini', id: posts.length }])
    );
  });
  
  test('savePost to be called with porco bsdfsdfsdfikini', () => {
    const posts = storageLocal.getPosts(); // 👈 QUI
    storageLocal.savePost('Female', 33, 'porco bsdfsdfsdfikini');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'inSegreto-posts',
      JSON.stringify([...posts, { gender: 'Female', age: 33, body: 'porco bsdfsdfsdfikini', id: posts.length }])
    );
  });
  
});