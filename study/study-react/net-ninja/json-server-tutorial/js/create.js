// javascript for create.html

const form = document.querySelector('form')

async function createPost (event) {

  event.preventDefault()

  // As json-server automatically adds an id to the item, we don't need to specify id
  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0
  }

  await fetch('http://localhost:3000/posts', {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('./index.html')
}

form.addEventListener('submit', createPost)