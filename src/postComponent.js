import storage from "./storage.js";

class postComponent {
    constructor (gender, age, body) {
        this.postCard = document.createElement('div');
        this.postCard.setAttribute('class', 'post-card');

        this.header = document.createElement('div');
        this.header.setAttribute('class', 'post-header');

        this.genderField = document.createElement('div');
        this.genderField.setAttribute('class', 'post-gender');
        this.genderField.innerText = gender;

        this.ageField = document.createElement('div');
        this.ageField.setAttribute('class', 'post-age');
        this.ageField.innerText = age;

        this.header.appendChild(this.gender);
        this.header.appendChild(this.age);

        this.body = document.createElement('div');
        this.body.setAttribute('class', 'post-body');
        this.body.innerText = post.body;

        this.postCard.appendChild(header);
        this.postCard.appendChild(body);
    };

    getPostComponent() {
        return this.postCard;
    };
};

export default postComponent;