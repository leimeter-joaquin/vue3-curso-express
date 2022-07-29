// Import method provided by the framework to create the app, it takes in an element that will act as a container for the whole app.
import { createApp } from 'vue'
import './style.css'
// Import the element that will act as the container of the whole app
import App from './App.vue'

// Create the app and mount it to a div tag. This div tag can be found in the index.html located in the root of the proyect.
createApp(App).mount('#app')
