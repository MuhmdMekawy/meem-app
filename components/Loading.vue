<template>
  <div class="loading">
    <!-- <h1>Loading</h1> -->
    <img src="../assets/images/laoding.gif" alt="img" loading="lazy">
  </div>
</template>

<script>
  export default {
    name: 'NuxtLoading'
  }
</script>

<style lang="scss" scoped>
.loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
}
</style>
