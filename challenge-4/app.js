const videoList = document.querySelector('.list__side-list')
const videoItem = document.querySelectorAll('.list__item')
const addVideoBtn = document.querySelector('.add-video')
const submitVideoBtn = document.querySelector('.video__form-submit')
const videoTitle = document.querySelector('.video__form-title')
const videoDescription = document.querySelector('.video__form-description')

let videoInfo = {
    title: '',
    description: ''
}

let videoNum = 5

const classNameArr = [
    'list__image',
    'list__item-contents',
    'list__item'
]

submitVideoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked');
    videoInfo.title = videoTitle.value
    videoInfo.description = videoDescription.value
    createVideo(videoInfo)
})

videoList.addEventListener('click', (e) => {
    const className = e.target.className
    if (classNameArr.includes(className)) {
        // something needs to happen here
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

function createVideo(videoData) {
    const { title, description } = videoData
    document.querySelector('.video__title').innerHTML = title
    document.querySelector('.video__description').innerHTML = description
}

function chooseVideo(videoData) {
    const { title, description } = videoData
    document.querySelector('.video__title').innerHTML = title
    document.querySelector('.video__description').innerHTML = description
}