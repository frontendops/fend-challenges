const videoList = document.querySelector('.list__side-list')
const videoItem = document.querySelectorAll('.list__item')
const classNameArr = [
    'list__image',
    'list__item-contents',
    'list__item'
]

videoList.addEventListener('click', (e) => {
    const className = e.target.className
    if (classNameArr.includes(className)) {
        console.log('clicked on valid emelent')
    }
})