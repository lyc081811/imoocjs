<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
        <span slot="bread">address</span>
      </nav-bread>
      <div class="check-step">
        <ul>
          <li class="cur"><span>Confirm</span> address</li>
          <li class="cur"><span>View your</span> order</li>
          <li class="cur"><span>Make</span> payment</li>
          <li class="cur"><span>Order</span> confirmation</li>
        </ul>
      </div>
      <div class="order-create">
        <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
        <div class="order-create-main">
          <h3>Congratulations! <br>Your order is under processing!</h3>
          <p>
            <span>Order ID：{{this.$route.query.orderId}}</span>
            <span>Order total：{{orderTotal | currency('￥')}}</span>
          </p>
          <div class="order-create-btn-wrap">
            <div class="btn-l-wrap">
              <a href="javascript:;" class="btn btn--m">Cart List</a>
            </div>
            <div class="btn-r-wrap">
              <a href="javascript:;" class="btn btn--m">Goods List</a>
            </div>
          </div>
        </div>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>
<style>
</style>
<script>
import './../assets/css/checkout.css'
import NavHeader from 'src/components/Header.vue'
import NavFooter from 'src/components/Footer.vue'
import NavBread from 'src/components/Bread.vue'
import Modal from 'src/components/Modal.vue'
import axios from 'axios'
export default{
  name: 'OrderSuccess',
  data () {
    return {
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
    this.orderDetail()
  },
  methods: {
    orderDetail () {
      let orderId = this.$route.query.orderId
      if (!orderId) {
        return
      }
      axios.get('/users/orderDetail', {params: {orderId}}).then(res => {
        var data = res.data
        if (data.status === '0') {
          this.orderTotal = data.result[0].orderTotal
        }
      })
    }
  }
}
</script>
