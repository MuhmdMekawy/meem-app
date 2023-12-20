<template>
  <div class="popup">
    <div class="close-icon" @click="$emit('closePopup')">X</div>
    <div class="image-wrap">
      <img src="../assets/images/verified.gif" alt="img" loading="lazy">
    </div>
    <h4>{{ popupText }}</h4>
  </div>
</template>

<script>
  export default {
  name: 'NuxtPopup',
  props: {
    popupText :{
      type: String,
      default : 'تمت إضافه المنتج بنجاح'
    },
  }
  }
</script>

<style lang="scss" scoped>
.popup{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 999;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0 0 5px #222;
  border-radius: 20px;
  overflow: hidden;
  .close-icon{
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #222;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.6s;
    cursor: pointer;
    &:hover{
      background: #222;
      color: #fff;
    }
  }
  .image-wrap{
    max-width: 100px;
  }
  h4{
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
