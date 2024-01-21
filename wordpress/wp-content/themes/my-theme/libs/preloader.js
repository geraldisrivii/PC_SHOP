const preloader = document.querySelector('.preloader')


const preloaderOpen = () => {
    preloader.classList.add('preloader--active')
}

const preloaderClose = () => {
    preloader.classList.remove('preloader--active')
}

preloaderOpen()