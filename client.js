const choo = require('choo')
const html = require('choo/html')
const app = choo()

app.model({
  state: {
    title: 'Choo v4',
    description: 'A Sturdy Framework',
    likes: 0
  },
  reducers: {
    like: (state, data) => Object.assign({}, state, {likes: state.likes + 1})
  }
})

const Home = (state, prev, send) => html`
  <div>
    <h1>${state.title}</h1>
    <p>${state.description}</p>
    <p>Likes: ${state.likes}</p>
    <button onclick=${e => send('like')}>Like</button>
  </div>
`

app.router(['/', Home])

document.body.appendChild(app.start())