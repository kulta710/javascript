// javascript for index.html

const container = document.querySelector('.blogs')
const searchForm = document.querySelector('.search')

async function renderPosts (term) {
  // _order=desc is not working -> at @0.17.4 version it is working 
  let url = 'http://localhost:3000/posts?_sort=likes&_order=desc'
  if (term) {
    url += `&q=${term}`
  }

  const response = await fetch(url)
  const posts = await response.json()

  let template = ''
  posts.forEach(post => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="./details.html?id=${post.id}">read more...</a>
      </div>
    `
    
    container.innerHTML = template
  })
}

searchForm.addEventListener('submit', (event) => {
  
  event.preventDefault()

  renderPosts(searchForm.term.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts())