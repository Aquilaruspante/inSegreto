import { resetNewPostForm } from "../post/postmanager.js";

function navigationHandler(hash, dialog) {
    if (hash === '#newPost') {
        dialog.showModal();
    };
};

export function handleHashChange(dialog) {
    window.addEventListener('hashchange', () => {
        const hash = location.hash;
        navigationHandler(hash, dialog);
    });
};

export function handleNewPostFormSubmit(newPostForm) {
    newPostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.hash = 'newPost';
    });
};

export function handleCancelButtnClick(cancelButton, newPostDialog) {
    cancelButton.addEventListener('click', () => {
        resetNewPostForm();
        newPostDialog.close();
        window.location.hash = '';
    });
};
