function videoConfig(id) {
    const video = document.getElementById(id)
    video.oncontextmenu = () => false

    document.querySelector(`[play=${id}]`).onclick = () => video.play()
    document.querySelector(`[pause=${id}]`).onclick = () => video.pause()
    document.querySelector(`[end=${id}]`).onclick = () => video.currentTime = 134.9
    document.querySelector(`[restart=${id}]`).onclick = function () {return video.currentTime = 0, video.play()}
    document.querySelector(`[minVol=${id}]`).onclick = () => video.volume -= 0.1
    document.querySelector(`[maxVol=${id}]`).onclick = () => video.volume += 0.1


    setInterval(() => {
        const percent = (video.currentTime / video.duration) * 100
        const divProgress = document.querySelector(`[progress=${id}] > div`)
        divProgress.style.width = `${percent}%`
        divProgress.innerHTML = `${percent.toFixed()}%` // contagem do progresso

        if (video.currentTime >= video.duration) { //condicao para a barra de progresso resetar
            console.log('Finished');
            video.pause()
            video.currentTime = 0
            video.load()
        } else {

        }
    }, 1)

}
videoConfig('myVideo')