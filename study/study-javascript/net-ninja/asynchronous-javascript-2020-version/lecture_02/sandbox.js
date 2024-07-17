const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  // When we set this event listener, we would receive 4 log messages whose readyState values are from 1 to 4
  console.log(request, request.readyState)

  // There are 5 readystates.
  // 0: { State: UNSENT, Description: Client has been created. open() not called yet. }
  // 1: { State: OPENED, Description: open() has been called. }
  // 2: { State: HEADERS_RECEIVED, Description: send() has been called, and headers and status are available. }
  // 3: { State: LOADING, Description: Downloading, responseText holds partial data. }
  // 4: { State: DONE, Description: The operation is complete }

  if (request.readyState === 4) {
    console.log(request.responseText)
  }
})

// We use [JSONPlaceholder] which is free fake and reliable API for testing and prototyping.
// https://jsonplaceholder.typicode.com/
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()