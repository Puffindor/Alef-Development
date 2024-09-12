import { createApp } from 'vue';
import App from './App.vue';
import BaseInput from './components/base/BaseInput.vue';
import UserForm from './components/UserForm.vue';
import UserPreview from './components/UserPreview.vue';
import baseButton from './components/base/baseButton.vue';
import TheHeader from './components/base/TheHeader.vue';

const app = createApp(App);
app.component('base-input', BaseInput);
app.component('base-button', baseButton);
app.component('the-header', TheHeader);
app.component('UserForm', UserForm);
app.component('UserPreview', UserPreview);
app.mount('#app');
