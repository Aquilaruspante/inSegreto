class postComponent {
    constructor (gender, age, body, date) {
        this.postCard = document.createElement('div');
        this.postCard.setAttribute('class', 'post-card');

        this.header = document.createElement('div');
        this.header.setAttribute('class', 'post-header');

        this.genderField = document.createElement('div');
        this.genderField.setAttribute('class', 'post-gender');
        this.genderField.innerText = gender;

        this.ageField = document.createElement('div');
        this.ageField.setAttribute('class', 'post-age');
        this.ageField.innerText = `${age} years old`;

        this.header.appendChild(this.genderField);
        this.header.appendChild(this.ageField);

        this.body = document.createElement('div');
        this.body.setAttribute('class', 'post-body');
        this.body.innerText = body;

        this.footer = document.createElement('div');
        this.footer.setAttribute('class', 'footer');
        this.footer.innerText = date;

        this.postCard.appendChild(this.header);
        this.postCard.appendChild(this.body);
        this.postCard.appendChild(this.footer);
    };

    getPostComponent() {
        return this.postCard;
    };
};

export default postComponent;