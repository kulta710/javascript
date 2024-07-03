const startBtn = document.querySelector('#startBtn')
const stopBtn = document.querySelector('#stopBtn')

let mediaRecorder
const recordedChunks = []

startBtn.addEventListener('click', (event) => {
    mediaRecorder.start()
    startBtn.classList.add('is-danger')
    startBtn.innerText = 'Recording'
})

stopBtn.addEventListener('click', (event) => {
    mediaRecorder.stop()
    startBtn.classList.remove('is-danger')
    startBtn.innerText = 'Start'
})

display()

async function display () {
    try {  
        const streamForDisplay = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop'
                }
            }
        })

        const streamForRecording = await navigator.mediaDevices.getUserMedia({
            audio: {
                mandatory: {
                    chromeMediaSource: 'desktop'
                }
            },
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop'
                }
            }
        })

        handleStream(streamForDisplay)

        prepareRecording(streamForRecording)
    } catch (e) {
        handleError(e)
    }
}

function handleStream (stream) {
    const video = document.querySelector('video')
    video.srcObject = stream
    video.onloadedmetadata = (e) => video.play()
}

function handleError (error) {
    console.log(error)
}

function prepareRecording(stream) {    
    const options = {
        mimeType: 'video/webm; codecs=vp9'
    }

    mediaRecorder = new MediaRecorder(stream, options)

    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.onstop = handleStop;
}

function handleDataAvailable(e) {
    console.log('video data available')
    
    recordedChunks.push(e.data)
}

async function handleStop(e) {
    const blob = new Blob(recordedChunks, {
        type: 'video/mp4; codecs=vp9'
    })

    const arrBuf = await blob.arrayBuffer()

    window.electronAPI.saveFile(arrBuf)
}