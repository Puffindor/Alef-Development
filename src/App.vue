<template>
 <the-header @switchPage="switchPage" />
 <main class="container">
  <KeepAlive>
   <component
    v-model="children"
    @personalData="savePersonalData"
    :personalData="personalData"
    :is="currentPage"
   />
  </KeepAlive>
 </main>
</template>

<script setup>
import { ref } from 'vue';

const currentPage = ref('UserForm');
const personalData = ref(null);

//Принимает данные из UserForm чтобы передать в UserPreview
function savePersonalData(value) {
 personalData.value = value;
}

//Переключение страниц
function switchPage(page) {
 currentPage.value = page;
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
* {
 font-family: 'Montserrat', sans-serif;
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 list-style: none;
}
.container {
 width: 100vw;
 display: flex;
 justify-content: center;
}
@media screen and (max-width: 550px) {
 .container {
  padding-bottom: 20px;
 }
}
</style>
