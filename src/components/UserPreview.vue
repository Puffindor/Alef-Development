<template>
 <div v-if="props.personalData" class="preview">
  <h2 class="preview__title">Персональные Данные</h2>
  <p class="preview__name-age">
   {{ props.personalData.name }}, {{ props.personalData.age }} лет
  </p>
  <ul v-if="props.personalData.children.length > 0" class="children-list">
   <h3 class="preview__sub-title">Дети</h3>
   <li
    class="children-list__element"
    v-for="child in props.personalData.children"
    :key="child.id"
   >
    <p>{{ child.name }}, {{ child.age }} лет</p>
   </li>
  </ul>
 </div>
 <p class="preview__empty" v-else>Нет данных</p>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['personalData']);
</script>

<style lang="scss" scoped>
.preview__empty {
 margin-top: 20px;
}
.preview__title {
 margin: 30px 0px 20px 0px;
 font-size: 16px;
 font-weight: 500;
}
.preview__name-age {
 font-size: 16px;
 font-weight: 700;
 margin-bottom: 60px;
}
.preview__sub-title {
 font-size: 16px;
 font-weight: 500;
 margin-bottom: 20px;
}
.children-list {
 display: flex;
 flex-direction: column;
 gap: 20px;
 .children-list__element {
  padding: 10px 20px;
  background: #f1f1f1;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
 }
}
</style>
