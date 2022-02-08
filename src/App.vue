<template>
  <div id="app">
    <PlaySpace />
  </div>
</template>

<script>
import PlaySpace from './components/PlaySpace.vue';

export default {
  name: "App",
  components: {
    PlaySpace,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
p {
  margin: 0;
};
</style>
