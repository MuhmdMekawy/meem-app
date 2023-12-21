<template>
  <div class="market-page">
    <div class="container">
      <h1>الصفحه الرئيسيه تحت الانشاء</h1>
      <nuxt-link to="/market">إذهب للمتجر</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

}
</script>
<style lang="scss">
  h1{
    padding: 90px 0 ;
    text-align: center;
    @media (max-width: 560px){
      font-size: 30px;
    }
    +a{
      // width: 200px;
      padding: 20px 50px;
      background: #0690cf;
      color: #fff;
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      display: block;
      max-width: 250px;
      margin: 0 auto;
      border-radius: 8px;
      border: 2px solid #0690cf;
      &:hover{
        background: #fff;
        color: #0690cf;
        border: 2px solid #0690cf;
      }
    }
  }

</style>
