async function getData () {
    const url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"

    const header = new Headers()
    header.append("Content-Type", "application/json")

    const request = new Request(url, {
        method: "GET",
        header: header
    })

    try {
        const response = await fetch(request)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.json()

        return result
    } catch (error) {
        console.error(error.message)
    }

    return data
}

function logQuote () {
    getData().then((value) => {
        const index = Math.floor(Math.random()*value.length)
    
        document.getElementById('quote').innerHTML = value[index].content.rendered
    })
}

logQuote()

setInterval(logQuote, 3000)