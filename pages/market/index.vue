<template>
  <div>
    <loading v-if="products.length === 0" />
    <section v-if="products.length !== 0" class="market-page">
      <div class="container">
        <Breadcrump :page-title="pageName" />
        <div class="head">
          <h3>{{ pageName }}</h3>
          <div class="input-wrap">
            <input type="text" placeholder="البحث">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0_145_1514)">
                  <path d="M15.8044 15.854L11.8251 11.8747C12.9095 10.5484 13.4427 8.8561 13.3143 7.14775C13.1859 5.4394 12.4059 3.84573 11.1355 2.69639C9.86504 1.54705 8.20146 0.92997 6.48883 0.972792C4.77619 1.01561 3.14553 1.71506 1.93414 2.92645C0.722748 4.13784 0.0233032 5.7685 -0.019518 7.48114C-0.0623393 9.19377 0.55474 10.8573 1.70408 12.1278C2.85342 13.3982 4.44709 14.1782 6.15544 14.3066C7.86379 14.435 9.55613 13.9018 10.8824 12.8174L14.8617 16.7967C14.9875 16.9181 15.1559 16.9853 15.3307 16.9838C15.5055 16.9823 15.6727 16.9122 15.7963 16.7886C15.9199 16.665 15.99 16.4978 15.9915 16.323C15.993 16.1482 15.9258 15.9798 15.8044 15.854ZM6.6664 12.992C5.61157 12.992 4.58042 12.6792 3.70336 12.0932C2.8263 11.5072 2.14271 10.6742 1.73904 9.69969C1.33537 8.72515 1.22976 7.65279 1.43554 6.61823C1.64133 5.58366 2.14928 4.63335 2.89516 3.88747C3.64104 3.14159 4.59135 2.63364 5.62592 2.42785C6.66048 2.22207 7.73284 2.32768 8.70738 2.73135C9.68192 3.13502 10.5149 3.8186 11.1009 4.69567C11.6869 5.57273 11.9997 6.60387 11.9997 7.65871C11.9981 9.07271 11.4357 10.4283 10.4359 11.4282C9.43603 12.428 8.0804 12.9905 6.6664 12.992Z" fill="#777777"/>
                </g>
                <defs>
                  <clipPath id="clip0_145_1514">
                    <rect width="16" height="16" fill="white" transform="translate(-0.00012207 0.977539)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div class="content">
          <div v-for="product in products" :key="product.id" class="product-item">
            <div class="badge ">{{product.price}}</div>
            <div class="image-wrap"><img :src="product.thumbnail" alt="img" loading="lazy"></div>
            <div class="text">
              <h3>{{product.title}}</h3>
              <h6> <span> {{product.price}} </span>ريال</h6>
              <nuxt-link :to="'market/product/' + product.id">شراء المنتج</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default{
    name: 'NuxtMarket',
    components: ['Breadcrump' , 'Loading'],
    data() {
      return {
        pageName: 'المتجر',
      }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
  },
  }
</script>

<style lang="scss" scoped>
.market-page{
    background:linear-gradient(185deg, rgba(157, 221, 255, 0.14) 32.33%, rgba(255, 255, 255, 0.27) 90.39%);
  .head{
    display: flex;
    gap: 50px;
    margin: 36px 0;
    h3{
      font-size: 32px;
      font-weight: 500;
      color: #222;
    }
    .input-wrap{
      width: 500px;
      height: 50px;
      border-radius: 50px;
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid #D9D9D9;
      input{
        padding-inline: 42px;
      }
      button{
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        width: 25px;
      }
    }
  }
  .content{
    display: grid;
    grid-template-columns: repeat(auto-fill , minmax(300px , 1fr));
    gap: 30px;
    justify-content: start;
    align-items: start;
    .product-item{
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #D9D9D9;
      .image-wrap{
        height: 220px;
      }
      .badge{
        position: absolute;
        right: 10px;
        top: 10px;
        background: #fff;
        color: #3E3E3E;
        font-size: 12px;
        font-weight: 400;
        padding: 7px 12px;
      }
      .text{
        text-align: end;
        padding: 16px 16px 25px;
        h3{
          font-size: 20px;
          font-weight: 500;
          color: #3E3E3E;
          margin-bottom: 25px;
        }
        h6{
          font-size: 20px;
          font-weight: 400;
          color: #3E3E3E;
          margin-bottom: 16px;
          span{
            font-weight: 500;
          }
        }
        a{
          width: 100%;
          background: #2A7DE5;
          text-align: center;
          padding: 13px;
          font-size: 16px;
          font-weight: 400;
          display: block;
          color: #fff;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          z-index: 2;
          &::after{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 0%;
            height: 100%;
            background: #222;
            z-index: -1;
            transition: 1s;
          }
          &::before{
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 0%;
            height: 100%;
            background: #222;
            z-index: -1;
            transition: 1s;
          }
          &:hover{
            color: #fff;
            &::after , &::before{
              width: 50%;
            }
          }
        }
      }
    }
  }
  .pagination{
    display: flex;
    margin: 40px 0 20px;
    justify-content: center;
    button{
      width: 40px;
      height: 40px;
      border: 1px solid #2A7DE5;
      color: #2A7DE5;
      font-size: 16px;
      font-weight: 400;
      transition: 0.6s;
      &:first-child{
        border-radius: 0 10px 10px 0;
        overflow: hidden;
      }
      &:last-child{
        border-radius: 10px 0 0 10px;
        overflow: hidden;
      }
      &:hover, .active{
        background: #2A7DE5;
        color: #fff;
      }
    }
  }
}
</style>
