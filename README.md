# Choo Starter Template

[https://citrine-club.gomix.me/](https://citrine-club.gomix.me/)

This is a simple template to get started with Choo a sturdy framework.

Choo is lightweight and powerful.

There is only a couple of concepts to understand and you can start building complex apps quickly.

The choo framework is a comprehensive framework with state management, router, and view engine all built in one cohesive framework.

## Getting Started

```
npm init -y
npm install choo
npm install budo -g
npm install json -g
json -I -f package.json -e 'this.scripts = {"dev": "budo client.js --live -P")'
touch client.js
npm run dev
```

## Start Choo

```
const choo = require('choo')
const html = require('choo/html')
const app = choo()

app.model({)
app.router(['/', () => html`<h1>Hello Choo</h1>`])

const tree = app.start()
document.body.appendChild(tree)
```

## Router

THe choo router is an array of arrays, each array takes two values, the route pattern and the route view function.

Example:

```
app.router([
  ['/', Home],
  ['/about', About],
  ['/widgets', Widgets],
  ['/widgets/new', WidgetForm],
  ['/widgets/:id', Widget],
  ['/widgets/:id/edit', WidgetForm]
])
```

** Using the :symbol in the router pattern will create params that will be passed to the view function inside the state.location object.

`state.location.params.id`

## View Function

The view function is a function that should return a valid tagged template string of html. The function accepts three arguments:

* state
* prev
* send

state - is the current state of the application
prev - is the prevous state of the application
send - is a function that can dispatch data to the app model

The render function will get called many times by the choo framework when ever there is a change to state.

## Model

The app model is made up of four objects:

- state
- reducers
- effects
- subscriptions

the state object holds the state of your application, when initialized with values, your view functions will get those intial state settings when the first render is run. Everytime state is modified a new render process is invoked.

The only way state can be modified is via the reducers object. The reducers object is a collection of named functions that can be invoked via the send function in a view. The send function can pass the name of the reducer in the first argument and any data in the second.

The reducer function takes two arguments, state and data. State is a view of the current state and the data value is any data passed from the send dispatch call.

The reducer must return a new object which will replace the current state object.

The effect function takes four arguments `state, data, send, done` like a reducer it can be invoked from a send function in the view. The effect has the ability to make async calls or calls that may produce side effects, once those calls have completed you may want to call a reducer function using the send function. Finally, once you are finished with your processing, you need to return the done callback.


