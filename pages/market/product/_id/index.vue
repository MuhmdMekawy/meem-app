<template>
  <div>
  <Loading v-if="product.length === 0" />
  <Popup v-if="showPopup === true" :popup-text="popupText" @closePopup="showPopup =false"/>
  <section  v-if="product.length !== 0" :style="showPopup === true ? 'filter:blur(5px)' : 'filter:blur(0)'" class="product-page">
    <div class="container">
      <Breadcrump page-title="المتجر" />
        <section v-for="item in product" :key="item.id" class="product-info">
          <div class="product-text">
            <h3>{{ item.title }}</h3>
            <h4>اختر نوع الكتاب</h4>
            <form>
              <div class="input-wrap">
                <label for="pdf">كتاب Pdf</label>
                <input id="pdf" type="radio" name="booktype" value="كتاب Pdf">
              </div>
              <div class="input-wrap">
                <label for="printed">كتاب مطبوع</label>
                <input id="printed" type="radio"  name="booktype" value="كتاب مطبوع">
              </div>
            </form>
            <h5> {{ item.price * productCount}} ريال</h5>
            <div class="add-to-cart">
              <button class="main-btn" @click="addTocart(item)">أضف الي السله</button>
              <div class="counter">
                <button :disabled="productCount === 1 ? true : false" @click="productCount--" >-</button>
                <span>{{ productCount }}</span>
                <button :disabled="productCount === 5 ? true : false" @click="productCount++">+</button>
              </div>
            </div>
            <hr>
            <h6>عن المنتج</h6>
            <p>{{ item.description }}</p>
          </div>
          <div class="image-wrap"><img :src="item.thumbnail" alt="img" loading="lazy"></div>
        </section>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'NuxtProduct',
  components: ['Breadcrump', 'Popup'],
  data() {
    return {
      productCount: 1,
      showPopup: false,
      popupText: ''
    }
  },
  computed: {
    getProductId() {
      return Number(this.$route.params.id)
    },
    product() {
      return this.$store.state.products.filter(f => f.id === this.getProductId)
    },
    getCart() {
      return this.$store.state.cartProducts
    },
  },

  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    addTocart(product) {
      const isProductInCart = this.$store.state.cartProducts.some(item => {
        return item.product.product === product
      });

      if (!isProductInCart) {
        this.$store.dispatch('addToCartAction', {product} );
        this.popupText= 'تمت إصافه المنتج بنجاح'
      } else {
        this.popupText= 'هذا المنتج موجود بالفعل ف السله'
      }
      this.showPopup = true;
      // this.$store.state.cartProducts.filter(f=>console.log(f))
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-page{
    background:linear-gradient(185deg, rgba(157, 221, 255, 0.14) 32.33%, rgba(255, 255, 255, 0.27) 90.39%);
    .product-info{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 30px;
      align-items: flex-start;
      .image-wrap{
        width: 50%;
        border-radius: 12px;
        overflow: hidden;
        height: 400px;
      }
      .product-text{
        width: 50%;
        text-align: end;
        h3{
          font-size: 32px;
          font-weight: 500;
          color: #222222;
          margin-bottom: 25px;
          @media (max-width:560px){
            font-size: 20px;
          }
        }
        h4{
          font-size: 16px;
          font-weight: 500;
          margin-bottom:12px ;
        }
        form{
          display: flex;
          flex-direction: row;
          gap: 38px;
          align-items: center;
          margin-bottom: 36px;
          .input-wrap{
            display: flex;
            flex-direction: row-reverse;
            gap: 12px;
            label{
              font-size: 14px;
              font-weight: 400;
              color: #222;
              cursor: pointer;
            }
            input{
              width: 24px;
              height: 24px;
              cursor: pointer;
            }
          }
        }
        h5{
          font-size: 24px;
          font-weight: 500;
          color: #3E3E3E;
          margin-bottom: 40px;
        }
        .add-to-cart{
          display: flex;
          flex-direction: row;
          gap: 62px;
          align-items: center;
          justify-content: space-between;
          .main-btn{
            padding: 14px 28px;
            border-radius: 40px;
            background: #FFC107;
            color: #222222;
            font-size: 14px;
            font-weight: 500;
            transition: 0.6s;
            &:hover{
              background: #A9CDFF;
            }
          }
          .counter{
            display: flex;
            gap: 24px;
            align-items: center;
            button{
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid #A9CDFF;
              background: #fff;
              font-size: 28px;
              font-weight: 500;
            }
            span{
              font-size: 16px;
              font-weight: 500;
              color: #000;
            }
          }
        }
        h6{
          font-size: 20px;
          font-weight: 500;
          color: #222;
          margin-bottom: 30px;
        }
        p{
          font-size: 16px;
          font-weight: 400;
          color: #000;
        }
      }
      @media (max-width : 991px){
        flex-direction: column;
        .image-wrap, .product-text{
          width: 100%;
        }
        .product-text{
          .add-to-cart{
            gap: 20px;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
</style>
