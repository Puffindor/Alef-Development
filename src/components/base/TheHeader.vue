<template>
 <header class="head">
  <img class="head__logo" src="@/assets/logo.svg" alt="logo" />
  <div class="head__button-wrapper">
   <button @click="switchPage('UserForm')" class="head__button">Форма</button>
   <button @click="switchPage('UserPreview')" class="head__button">
    Превью
   </button>
  </div>
 </header>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['switchPage']);

//Переключение страниц через <component/>
function switchPage(page) {
 emit('switchPage', page);
}
</script>

<style lang="scss" scoped>
img {
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;

 margin: auto;
}
.head {
 position: relative;
 display: flex;
 padding: 22px 51px;
 justify-content: center;
 box-shadow: 0px 1px 0px 0px #1111111a;
 .head__button-wrapper {
  display: flex;
  align-items: center;
  gap: 24px;
  .head__button {
   cursor: pointer;
   border-style: hidden;
   background: transparent;
   font-size: 14px;
   font-weight: 400;
  }
 }
 .head__logo {
  width: 175px;
  height: 32px;
 }
}
@media screen and (max-width: 550px) {
 .head {
  justify-content: right;
  .head__logo {
   width: 100px;
   height: 32px;
  }
 }
}
</style>
