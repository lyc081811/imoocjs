<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="bread">Order Confirm</span>
    </nav-bread>
    <div class="container">
      <div class="checkout-order">
        <!-- process step -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>Confirm</span> address</li>
            <li class="cur"><span>View your</span> order</li>
            <li><span>Make</span> payment</li>
            <li><span>Order</span> confirmation</li>
          </ul>
        </div>

        <!-- order list -->
        <div class="page-title-normal checkout-title">
          <h2><span>Order content</span></h2>
        </div>
        <div class="item-list-wrap confirm-item-list-wrap">
          <div class="cart-item order-item">
            <div class="cart-item-head">
              <ul>
                <li>Order contents</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="list in goodsList" :key="list.productId" v-if="list.checked === '1'">
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img :src="/static/ + list.productImage" alt="XX">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{list.productName}}</div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{list.salePrice | currency('￥')}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self">
                      <div class="select-self-area">
                        <span class="select-ipt">×{{list.productNum}}</span>
                      </div>
                    </div>
                    <div class="item-stock item-stock-no">In Stock</div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">{{list.salePrice * list.productNum  | currency('￥')}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Price count -->
        <div class="price-count-wrap">
          <div class="price-count">
            <ul>
              <li>
                <span>Item subtotal:</span>
                <span>{{subTotal | currency('￥')}}</span>
              </li>
              <li>
                <span>Shipping:</span>
                <span>{{shipping | currency('￥')}}</span>
              </li>
              <li>
                <span>Discount:</span>
                <span>{{discount | currency('￥')}}</span>
              </li>
              <li>
                <span>Tax:</span>
                <span>{{tax | currency('￥')}}</span>
              </li>
              <li class="order-total-price">
                <span>Order total:</span>
                <span>{{orderTotal | currency('￥')}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="order-foot-wrap">
          <div class="prev-btn-wrap">
            <a class="btn btn--m" onclick="window.history.back(-1)">Previous</a>
          </div>
          <div class="next-btn-wrap">
            <button class="btn btn--m btn--red" @click="payment(orderTotal)">Proceed to payment</button>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import './../assets/css/checkout.css'
import NavHeader from 'src/components/Header.vue'
import NavFooter from 'src/components/Footer.vue'
import NavBread from 'src/components/Bread.vue'
import Modal from 'src/components/Modal.vue'
import axios from 'axios'
export default{
  name: 'OderConfirm',
  data () {
    return {
      goodsList: [],
      subTotal: 0,
      shipping: 100,
      discount: 200,
      tax: 400,
      orderTotal: 0
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/users/cart').then(response => {
        let res = response.data
        this.goodsList = res.result
        this.goodsList.forEach(x => {
          if (x.checked === '1') {
            this.subTotal += x.salePrice * x.productNum
          }
        })
        this.orderTotal = this.subTotal + this.shipping - this.discount + this.tax
      })
    },
    payment () {
      axios.post('/users/payment', {orderTotal: this.orderTotal, addressId: this.$route.query.addressId}).then(res => {
        let data = res.data
        console.log(data)
        if (data.status === '0') {
          this.$router.push({
            path: '/orderSuccess?orderId=' + data.result.orderId
          })
        }
      })
    }
  }
}
</script>
