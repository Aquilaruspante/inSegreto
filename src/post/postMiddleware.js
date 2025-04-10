function validatePost(gender, age, body) {
    if (!gender || !age || !body) {
        throw new Error('All fields must be filled!!!');
    };

    if (gender !== 'Male' && gender !== 'Female' && gender !== 'Trans' && gender !== 'Non-binary'){
        throw new Error('Gender must be chosen among the available choices!!!');
    };

    if (age < 13 || age > 99) {
        throw new Error('Age must be between 13 and 99!!!');
    };
};

export { validatePost };