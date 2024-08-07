document.addEventListener('DOMContentLoaded', function () {
    const authContainer = document.getElementById('auth');
    const registerContainer = document.getElementById('register');
    const notesAppContainer = document.getElementById('notesApp');

    const showLogin = document.getElementById('showLogin');
    const showSignUp = document.getElementById('showSignUp');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const noteForm = document.getElementById('noteForm');
    const notesList = document.getElementById('notesList');
    const logoutButton = document.getElementById('logout');

    let notes = [];

    showSignUp.addEventListener('click', function () {
        authContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function () {
        authContainer.classList.remove('hidden');
        registerContainer.classList.add('hidden');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add authentication logic here

        authContainer.classList.add('hidden');
        notesAppContainer.classList.remove('hidden');
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add registration logic here

        registerContainer.classList.add('hidden');
        notesAppContainer.classList.remove('hidden');
    });

    noteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('noteTitle').value;
        const content = document.getElementById('noteContent').value;

        notes.push({ title, content });
        renderNotes();
        noteForm.reset();
    });

    logoutButton.addEventListener('click', function () {
        notesAppContainer.classList.add('hidden');
        authContainer.classList.remove('hidden');
    });

    function renderNotes() {
        notesList.innerHTML = '';
        notes.forEach(note => {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('note');
            noteDiv.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
            notesList.appendChild(noteDiv);
        });
    }
});
