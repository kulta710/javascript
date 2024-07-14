btnCreate = document.getElementById('btnCreate')
btnRead = document.getElementById('btnRead')
btnDelete = document.getElementById('btnDelete')
inputFileName = document.getElementById('fileName')
areaFileContents = document.getElementById('fileContents')

btnCreate.addEventListener('click', () => {
    let fileName = inputFileName.value
    let contents = areaFileContents.value
    window.electronAPI.writeFile(fileName, contents)
})

btnRead.addEventListener('click', () => {
    let fileName = inputFileName.value
    window.electronAPI.readFile(fileName)

    window.electronAPI.readFileReply((content) => {
        areaFileContents.value = content
    })
})

btnDelete.addEventListener('click', () => {
    let fileName = inputFileName.value
    window.electronAPI.unlink(fileName)

    window.electronAPI.unlinkReply((reply) => {
        if (reply === 'deleted') {
            inputFileName.value = ''
            areaFileContents.value = ''
        }
    })
})