<template>
 <div class="form">
  <h1 class="form__title">Персональные Данные</h1>
  <form class="form__inputs">
   <base-input v-model="name" label="Имя" />
   <base-input type="number" v-model="age" label="Возраст" />
   <div class="btn-wrapper">
    <p>Дети (макс. 5)</p>

    <base-button
     v-if="children.length < 5"
     @click.prevent="addChild"
     class="outline"
    >
     <img src="@/assets/plus.svg" alt="plus-icon" /> Добавить
     ребенка</base-button
    >
   </div>
  </form>
  <ul v-if="children.length > 0" class="children-list">
   <li class="children-list__element" v-for="child in children" :key="child.id">
    <base-input v-model="children[children.indexOf(child)].name" label="Имя" />
    <base-input
     type="number"
     v-model="children[children.indexOf(child)].age"
     label="Возраст"
    />

    <base-button class="flat" @click="deleteChild(child.id)"
     >Удалить</base-button
    >
   </li>
  </ul>
  <p class="children-list__empty" v-else>Детей нет</p>
  <div class="btn-wrapper save-btn">
   <base-button :disabled="!isValid" class="full" @click="savePersonalData"
    >Сохранить</base-button
   >
  </div>
 </div>
</template>

<script setup>
import { ref, defineEmits, computed } from 'vue';
const emit = defineEmits(['personalData']);
const children = ref([]);
const name = ref(null);
const age = ref(null);

// Валидация на наличие значения во всех полях
const isValid = computed(() => {
 if (name.value && age.value) {
  for (let child of children.value) {
   if (!child.name || !child.age) {
    return false;
   }
  }
  return true;
 }
 return false;
});

//Сохраняет введенные данные если пройдена валидация
function savePersonalData() {
 if (isValid.value) {
  emit('personalData', {
   name: name.value,
   age: age.value,
   children: children.value,
  });
 }
}

//Удаляет запись из списка детей
function deleteChild(id) {
 children.value = children.value.filter((child) => child.id !== id);
}

//Добавляет пустую запись в список детей, с уникальным id
function addChild() {
 if (children.value.length < 5) {
  children.value.push({
   id: Date.now(),
   name: '',
   age: null,
  });
 }
}
</script>

<style lang="scss" scoped>
.children-list__empty {
 margin: 20px 0px;
}
.children-list {
 margin-top: 11px;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 5px;
 width: 100%;

 .children-list__element {
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 1fr max-content;
  list-style: none;
  width: 100%;
 }
}
.btn-wrapper {
 font-weight: 600;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 23px;
}
.form {
 margin-top: 30px;
 flex-direction: column;
 width: 40%;
 display: flex;
 align-items: center;
 .form__title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
 }
 .form__inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
 }
 .save-btn {
  width: 100%;
  margin-top: 30px;
 }
 .children-list__btn-full {
  padding: 10px 20px;
  background: #01a7fd;
  color: white;
 }
}
@media screen and (max-width: 1250px) {
 .form {
  width: 70%;
 }
}
@media screen and (max-width: 720px) {
 .form {
  width: 90%;
 }
}
@media screen and (max-width: 550px) {
 .btn-wrapper {
  gap: 10px;
 }
 .children-list {
  gap: 10px;
  .children-list__element {
   display: flex;
   flex-direction: column;
   border-radius: 5px;
   background-color: #fbfbfb;
   padding: 10px;
  }
 }
}
</style>
