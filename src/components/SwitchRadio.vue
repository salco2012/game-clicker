<template>
  <div class="switch">
    <input type="checkbox" @change="$emit('change', $event.target.checked)" />
  </div>
</template>

<style lang="scss" scoped>
input[type='checkbox'] {
  position: relative;
  width: 80px;
  height: 40px;
  -webkit-appearance: none;
  background: #c6c6c6;
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  margin: 0;
}
input:checked[type='checkbox'] {
  background: #40e551;
}
input[type='checkbox']::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 20px;
  background-image: url('../assets/img/icon_melody.png');
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  transition: 0.5s;
  box-shadow: 0 1px 5px black;
}
input:checked[type='checkbox']::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 40px;
  border-radius: 20px;
  height: 40px;
  width: 40px;
}
</style>
