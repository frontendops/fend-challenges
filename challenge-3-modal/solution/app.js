const modalTriggers = document.querySelectorAll('.modal__trigger')
const modal = document.querySelector('.modal__overlay')

const state = {
    modalShown: false
}

for (const trigger of modalTriggers) {
    trigger.addEventListener('click', () => {
        state.modalShown ? modal.classList.remove('shown') : modal.classList.add('shown')
        state.modalShown = !state.modalShown
        console.log(state.modalShown);
    })
}