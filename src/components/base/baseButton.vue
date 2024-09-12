<template>
 <button class="btn">
  <slot></slot>
 </button>
</template>

<style lang="scss" scoped>
.btn {
 border-radius: 100px;
 font-size: 14px;
 font-weight: 400;
 display: flex;
 align-items: center;
 border-style: hidden;
 cursor: pointer;
 transition: 100ms;

 &.outline {
  border: 2px solid #01a7fd;
  padding: 10px 20px;
  background: transparent;
  gap: 4px;
  color: #01a7fd;
  &:hover {
   background: #6e41e20a;
  }
  &:active {
   background: #6e41e229;
  }
 }
 &.full {
  padding: 10px 20px;
  background: #01a7fd;
  color: white;
  &:hover {
   background: #0f79af;
  }
  &:active {
   background: #59c79f;
  }
 }
 &.flat {
  padding: 16px 0px;
  color: #01a7fd;
  background: transparent;
  &:hover {
   color: #0f79af;
  }
  &:active {
   color: #59c79f;
  }
 }
 &:disabled {
  pointer-events: none;
  background: #ceecfc;
 }
}
</style>
