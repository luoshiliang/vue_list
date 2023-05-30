<template>
    <div class="shopbox">
        <div class="shophead">
            <h2>购物车</h2>
            <div class="shopcom">
                已选商品{{ shopnumA }}件 (不含运费):{{ pricecom }}
                <button>结算</button>
            </div>
        </div>
        <hr>
        <div class="shoptitle">
            <div><input type="checkbox" name="bookAll" id="" v-model="checkAll" @click="checka">全选</div>
            <div class="shoptitle-span">
                <span>商品信息</span>
                <span>单价</span>
                <span>数量</span>
                <span>金额</span>
                <span>操作</span>
            </div>
        </div>
        <div class="shop" v-for="(s, index) in shopList" :key="index">
            <div class="shopInp"><input type="checkbox" name="book" v-model="s.check"></div>
            <div class="shopImg">
                <img :src="s.imgUrl" alt="">
                <span>{{ s.msg }}</span>
            </div>
            <div class="shopPrice">
                {{ s.price }}
            </div>
            <div class="shopNum">
                <button @click="s.num--">-</button><span>{{ s.num }}</span><button @click="s.num++">+</button>
            </div>
            <div class="shopcomput">
                {{ (s.num * s.price).toFixed(2) }}
            </div>
            <div class="shopDele" @click="shopDele(index)">
                删除
            </div>
        </div>
    </div>
</template>
<script>
import a from '../assets/image/tour1.jpg'
import b from '../assets/image/tour2.jpg'
import c from '../assets/image/tour3.jpg'
import d from '../assets/image/tour4.jpg'

export default {
    name: 'shop',
    data() {
        return {
            shopList: [
                {
                    imgUrl: a,
                    msg: '2021新web前端开发视频课程教程入门精通全栈实战项目零基础培训',
                    price: 30,
                    num: 3,
                    check: false
                },
                {
                    imgUrl: b,
                    msg: '现货 你不知道的JavaScript 上卷+中卷+下卷 3册 web前端开发书籍',
                    price: 138.8,
                    num: 3,
                    check: false
                },
                {
                    imgUrl: c,
                    msg: '【高阶全套】web前端开发视频教程jQuery网页设计CSS3/javascript',
                    price: 199,
                    num: 3,
                    check: false
                },
                {
                    imgUrl: d,
                    msg: 'JavaScript高级程序设计(第3版)JS入门到精通书籍JavaScript权指南配套前',
                    price: 200,
                    num: 3,
                    check: false
                }
            ]
        }
    },
    computed: {
    checkAll: {
      set (val) {
        this.shopList.forEach(obj => obj.check = val)
      },
      get () {
        return this.shopList.every(obj => obj.check === true)
      }
    },
    shopnumA(){
        let numa = 0
        this.shopList.forEach(item=>{if(item.check == true){numa += item.num}})
        return numa
    },
    pricecom(){
        let pri = 0
        this.shopList.forEach(item=>{if(item.check == true){pri += (item.num*item.price)}})
        return pri
    }

  },
  methods: {
    checka(){
      this.shopList.forEach(obj => obj.check = !obj.check)
    },
    shopDele(index){
        this.shopList.splice(index,1)
    }
  },
}
</script>

<style scoped>
.shopbox {
    width: 800px;
    height: 1030px;
    background-color: skyblue;
    margin: 30px auto;
    border-radius: 10px;
    border: 1px solid black;
}

.shophead {
    width: 800px;
    height: 70px;
    border-radius: 10px 10px 0 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.shophead h2 {
    margin-left: 20px;
}

.shophead .shopcom {
    margin-right: 20px;
}

.shoptitle {
    width: 800px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
}

.shoptitle input {
    margin-top: 30px;
    margin-left: 30px;
}

.shoptitle-span {
    display: flex;
    width: 670px;
    justify-content: space-around;
    margin-top: 23px;
}

.shop {
    width: 770px;
    margin: 20px auto;
    height: 120px;
    background-color: aqua;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.shop div {
    height: 150px;
}

.shop div:nth-child(2) {
    display: flex;
    justify-content: space-around;
    width: 300px;
    height: 150px;
    font-size: 10px;
}

.shopNum span {
    display: inline-block;
    width: 40px;
    background-color: aliceblue;
    text-align: center;
}

.shopNum button {
    width: 20px;
    height: 20px;
}

.shopImg img {
    width: 50%;
}</style>