<template>
 <div :class="{ invalid: !isValid }" class="base-input">
  <label class="base-input__label">{{ props.label }}</label>
  <input @blur="validateInput" v-model="model" class="base-input__input" />
 </div>
</template>

<script setup>
import { defineProps, defineModel, ref } from 'vue';
const props = defineProps({
 label: String,
});
const model = defineModel();
const isValid = ref(true);

//Простая валидация на наличие значения
function validateInput() {
 if (model.value) {
  isValid.value = true;
  return;
 }
 isValid.value = false;
}
</script>

<style scoped lang="scss">
.base-input {
 display: flex;
 gap: 5px;
 flex-direction: column;
 border-radius: 4px;
 border: 1px solid #f1f1f1;
 padding: 8px 16px;
 .base-input__label {
  font-size: 13px;
  color: #1111117a;
 }
 .base-input__input {
  font-weight: 400;
  font-size: 14px;
  outline: none;
  border-style: hidden;
  color: #111111;
  background: transparent;
 }
 &.invalid {
  background: #f9e3e3;
  box-shadow: 0px 4px 12px 0px #ffc3c33d;
  box-shadow: 0px 4px 4px 0px #ffc3c30a;
  .base-input__input {
   background: #f9e3e3;
  }
 }
}
</style>
