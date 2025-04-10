function validatePost(gender, age, body) {
    if (!gender || !age || !body) {
        throw new Error('All fields must be filled!!!');
    };
};

export { validatePost };