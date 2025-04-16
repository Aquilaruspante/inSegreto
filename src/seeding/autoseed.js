import text from "./text.js";
import storage from "../storage/storage.js";

function createRandomPost() {
    const start = Math.floor(Math.random() * (text.length - 200));
    const postLength = Math.floor(Math.random() * 150) + 50;
    const end = start + postLength;
    
    return text.slice(start, end);
};

function createRandomGender() {
    const randomIndex = Math.floor(Math.random() * 4) + 1;
    switch (randomIndex) {
        case 1:
            return 'Male';
            break;
        case 2:
            return 'Female';
            break;
        case 3:
            return 'Trans';
            break;
        case 4:
            return 'Non-binary';
            break;
    };
};

function autoseed() {
    
}

export { autoseed };