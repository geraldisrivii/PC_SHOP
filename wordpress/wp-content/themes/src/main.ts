import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import VueCookies from 'vue-cookies'
import MyDialog from './components/UI/MyDialog.vue'


let app = createApp(App)

// register globally
app.component('my-dialog', MyDialog)


app.use(VueCookies)

app.use(router).use(store).mount('#app')
