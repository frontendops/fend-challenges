const videoList = document.querySelector('.list__side-list')
const videoItem = document.querySelectorAll('.list__item')
const addVideoBtn = document.querySelector('.add-video')

let videoNum = 5

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

addVideoBtn.addEventListener('click', () => {
    // seperate functions for creating each element
    let video = document.createElement("div")
    let image = document.createElement("img")
    let content = document.createElement("div")
    content.innerHTML = `Video ${videoNum}`
    content.classList.add("list__item-contents")
    image.classList.add("list__image")
    image.src = "https://picsum.photos/150/75?random"
    video.appendChild(image)
    video.classList.add("list__item")
    videoList.appendChild(video)
    video.appendChild(content)
    videoNum++
})