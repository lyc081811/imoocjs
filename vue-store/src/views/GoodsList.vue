<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
        <span slot="bread">GoodList</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd @click="params.priceChecked = 'all'"><a href="javascript:void(0)" :class="{'cur': params.priceChecked == 'all'}" @click="setPriceFilter('all')">All</a></dd>
                <dd v-for="(price, index) in priceFilter" :key="index" @click="params.priceChecked = index">
                  <a href="javascript:void(0)" :class="{'cur': params.priceChecked == index}" @click="setPriceFilter(index)">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>
            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList" :key="item.productId" :data="item.productId">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/' + item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">¥{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="#dd7479" v-show="loading">
                    <circle cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                      <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" v-on:close="closePop"></div>
      <modal :mdShow="mdShowErr" @close="closeModal">
        <p slot="message">请先登录</p>
        <div slot="btnGroup">
          <a class="btn btn--m" @click="mdShowErr = false">关闭</a>
        </div>
      </modal>
      <modal :mdShow="mdShow" @close="closeModal">
        <p slot="message">
          <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1304"><path d="M511.704776 959.477474c-246.876714 0-447.716928-200.840214-447.716928-447.708741 0-246.871597 200.840214-447.716928 447.716928-447.716928 246.87876 0 447.717951 200.845331 447.717951 447.716928-0.001023 246.86955-200.839191 447.708741-447.717951 447.708741z m0-850.208838c-221.941811 0-402.50726 180.564425-402.50726 402.506237s180.565449 402.492934 402.50726 402.492933 402.508283-180.551122 402.508284-402.492933S733.645564 109.268636 511.704776 109.268636z" fill="#A5DC86" p-id="1305"></path><path d="M426.658821 707.96416L242.867912 535.865547l39.994899-39.994899 143.568836 141.899824L740.549811 315.566142l39.99183 39.9949s-346.378915 352.399025-353.88282 352.403118z" fill="#A5DC86" p-id="1306"></path></svg>
          <span>加入购物车成功</span>
        </p>
        <div slot="btnGroup">
          <a class="btn btn--m" @click="mdShow = false">继续购物</a>
          <router-link to="/cart" class="btn btn--m">查看购物车</router-link>
        </div>
      </modal>
      <nav-footer></nav-footer>
    </div>
</template>
<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import NavHeader from 'src/components/Header.vue'
import NavFooter from 'src/components/Footer.vue'
import NavBread from 'src/components/Bread.vue'
import Modal from 'src/components/Modal.vue'
import axios from 'axios'
export default{
  data () {
    return {
      goodsList: [],
      params: {
        page: 1,
        pageSize: 8,
        sortFlag: true,
        priceChecked: 'all'
      },
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '500.00'
        },
        {
          startPrice: '500.00',
          endPrice: '1000.00'
        },
        {
          startPrice: '1000.00',
          endPrice: '2000.00'
        }
      ],
      filterBy: false,
      overLayFlag: false,
      busy: true,
      loading: false,
      mdShowErr: false,
      mdShow: false
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  methods: {
    // 获取数据
    getGoodsLIst (flag) {
      this.loading = true
      var params = JSON.parse(JSON.stringify(this.params))
      params.sortFlag = params.sortFlag ? 1 : -1
      axios.get('/goods/list', {params}).then(res => {
        let data = res.data
        if (data.status === '0') {
          if (flag) {
            this.goodsList = this.goodsList.concat(data.result.list)
            if (data.result.count < 8) {
              this.busy = true
            } else {
              this.busy = false
            }
          } else {
            this.goodsList = data.result.list
            this.busy = false
          }
        } else {
          this.goodsList = []
        }
        this.loading = false
      })
    },
    // 排序
    sortGoods () {
      this.params.sortFlag = !this.params.sortFlag
      this.params.page = 1
      this.getGoodsLIst()
    },
    // 加载更多
    loadMore () {
      this.busy = true
      setTimeout(() => {
        this.params.page++
        this.getGoodsLIst(true)
      }, 100)
    },
    // 显示侧边栏
    showFilterPop () {
      this.filterBy = true
      this.overLayFlag = true
    },
    // 关闭侧边栏
    closePop () {
      this.filterBy = false
      this.overLayFlag = false
    },
    // 设置价格排序、选中
    setPriceFilter (index) {
      this.params.priceChecked = index
      this.params.page = 1
      this.closePop()
      this.getGoodsLIst()
    },
    // 添加购物车
    addCart (productId) {
      axios.post('/goods/addCart', {productId})
        .then(res => {
          if (res.data.status === '0') {
            // alert('success')
            this.mdShow = true
          } else {
            this.mdShowErr = true
          }
        })
    },
    closeModal () {
      this.mdShow = false
    }
  },
  created () {
    this.getGoodsLIst()
  }
}
</script>
<style scoped>
.load-more {
  height: 100px;
  text-align: center;
}
</style>
