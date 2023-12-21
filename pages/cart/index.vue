<template>
  <div>
    <div v-if="getData.length === 0" class="empty-cart badge bg-warning">
      <div class="container">
        <h3>سلتك <span>فارغه</span> من المنتجات </h3>
        <nuxt-link to="/market">للذهاب للمتجر</nuxt-link>
      </div>
    </div>
    <section class="cart-page">
      <div class="container">
        <div class="content">
          <div v-for="item in getData" :key="item.product.product.id" class="product-item">
            <button class="remove-icon" @click="deleteProduct(item.product.product)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </button>
            <div class="image-wrap">
              <img :src="item.product.product.thumbnail" alt="img">
            </div>
            <h3>{{ item.product.product.title }}</h3>
            <h4>العدد: <span> {{ item.product.totalPrice / item.product.product.price }}</span></h4>
            <h4>السعر: <span> {{ item.product.totalPrice }}</span>ريال</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NuxtCart',
  computed: {
    getData() {
      return this.$store.state.cartProducts
    },
  },
  methods: {
    // deleteProduct(product)  {
    //   this.$store.dispatch('removeFromCart' , {product})
    // }
  }
}
</script>

<style lang="scss" scoped>
.empty-cart{
  width: 100%;
  text-align: center;
  padding: 80px 0;
  h3{
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 50px;
    span{
      color: #3887BE;
      font-size: 30px;
    }
  }
  a{
    background:#200E3A;
    padding: 20px 30px;
    border-radius: 8px;
    color: #fff;
    border: 1px solid #200E3A;
    transition: 0.6s;
    &:hover{
      border: 1px solid #fff;
      color: #200E3A;
      background: #fff;
    }
  }
}
.cart-page{

  .content{
    display: grid;
    grid-template-columns: repeat(auto-fill , minmax(300px , 1fr));
    gap: 30px 38px;
    align-items: center;
    justify-content: center;
    .product-item{
      border-radius: 12px;
      // overflow: hidden;
      text-align: end;
      border: 2px solid #2222;
      padding-bottom: 20px;
      position: relative;
      .remove-icon{
        position: absolute;
        right: -10px;
        top: -10px;
        width: 35px;
        height: 35px;
        background: #7D0A0A;
        color: #fff;
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
      }
      .image-wrap{
        height: 350px;
        margin-bottom: 10px;
        border-radius: 12px 12px 0 0;
        overflow: hidden;
      }
      h3{
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
        padding-right:10px ;
        text-align: center;
      }
      h4{
        font-size: 20px;
        font-weight: 400;
        padding-right:10px ;
        margin-bottom: 5px;
        span{
          font-weight: 500;
          color: rgb(162, 14, 14)
        }
      }
    }
  }
}
</style>
