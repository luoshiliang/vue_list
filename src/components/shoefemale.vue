<template>
    <div class="male">
        <div class="showmale" v-for="(item, index) in maleList" :key="index">
            <div class="shoeImg">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="shoeMsg">
                <span>{{ item.title }}</span>
                <div class="shoeMsgModify" v-show="item.show">
                <input type="text" v-model="priceInp">
                <button @click="determine(item)">确定</button>
                <button @click="cancellation(item)">取消</button>
                </div>
                <div class="shoeMsgFoot">
                    <span>￥{{ item.price }}</span>
                    <button @click="modifyPrice(item)">修改价格</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import a from '../assets/shoeimg/4.webp'
import b from '../assets/shoeimg/5.webp'
import c from '../assets/shoeimg/6.jpg'
export default{
    name:"shoefemale",
    data(){
        return{
            maleList:[
                {
                    imgUrl:a,
                    title:'欧洲站潮牌男鞋百搭新款小...',
                    price:278.00,
                    show:false
                },
                {
                    imgUrl:b,
                    title:'回力男鞋帆布鞋低帮网球...',
                    price:79.00,
                    show:false
                },
                {
                    imgUrl:c,
                    title:'李宁跑步鞋男网面透气男...',
                    price:278.00,
                    show:false
                }
            ],
            priceInp:''
        }
    },
    methods:{
        modifyPrice(item){
            item.show = !item.show
        },
        determine(item){
            item.price = this.priceInp
            this.priceInp = ''
            item.show = false
        },
        cancellation(item){
            item.show = false
        }
    }
}
</script>

<style scoped>
.male{
    margin-top: 5px;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
}
.showmale{
    width: 30%;
    height: 150px;
    border: 1px solid gray;
    display: flex;
    background-color: wheat;
    border-radius: 10px;
}
.shoeImg{
    width: 50%;
    height: 150px;
}
.shoeImg img{
    width: 81%;
    border-radius: 10px;
}
.shoeMsg{
    width: 50%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.shoeMsgFoot{
    display: flex;
    justify-content: space-between;
}
.shoeMsgFoot button{
    margin-right: 10px;
    margin-bottom: 5px;
}
</style>