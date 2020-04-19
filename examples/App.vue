<template>
  <div id="app">
    <button @click="dialogDragShow=!dialogDragShow">openDialog</button>
    <dialog-move :dialogShow.sync="dialogDragShow"></dialog-move>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      dialogDragShow: false
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
