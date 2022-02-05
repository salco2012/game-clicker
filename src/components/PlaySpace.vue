<template>
  <div class="play-space">
    <div class="balans">{{ balans }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balans: 0,
    };
  },
};
</script>

<style scoped>
.play-space {
  padding-top: 50px;
  background-image: url('../assets/img/backround.jpg');
  min-height: calc(100vh - 50px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.balans {
  margin: 0 auto;
  position: relative;
  height: 40px;
  width: 300px;
  background-color: #0000004d;
  border-radius: 20px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.562);
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.balans::before {
  content: '';
  position: absolute;
  left: -10px;
  top: -5px;
  width: 50px;
  height: 50px;
  background-image: url('../assets/img/gold-coin.png');
  background-size: 50px 50px;
}
</style>
