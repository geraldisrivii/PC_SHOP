import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import VueCookies from 'vue-cookies'

// import components from '@/components/UI/index'

let app = createApp(App)

// register globally

// components.forEach(component => {
//     app.component(component.name, component)
// })

app.use(VueCookies)

app.use(router).use(store).mount('#app')
