const buttonOpenModal = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper');

// removendo o invisible da class modalWrapper
buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible');
}

// evento Keydown para captura o click ta tecla ESC 
document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if (isEscKey) {
        modalWrapper.classList.add('invisible');
    }
});