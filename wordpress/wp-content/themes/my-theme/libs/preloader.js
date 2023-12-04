const preloader = document.getElementById('preloader')


const preloaderOpen = () => {
    preloader.classList.remove('close')
}

const preloaderClose = () => {
    preloader.classList.add('close')
}