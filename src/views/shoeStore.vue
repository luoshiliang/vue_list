<template>
    <div class="container">
        <div class="shoeBox">
            <div class="shoetitle">
                <div class="shoetitle-left">鞋子卖场</div>
                <div class="shoetitle-right">
                    <span class="r1" @click="ra" :style="{color:colorra == 1?'darkkhaki':'black'}">
                        全部商品
                    </span>
                    <span class="r2" @click="rb" :style="{color:colorra == 2?'darkkhaki':'black'}">
                        男鞋
                    </span>
                    <span class="r3" @click="rc" :style="{color:colorra == 3?'darkkhaki':'black'}">
                        女鞋
                    </span>
                </div>
            </div>
            <div class="shoeShow">
                <div class="showtop" v-show="male">
                    <shoemale></shoemale>
                </div>
                <div class="showbottom" v-show="female">
                    <shoefemale></shoefemale>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import shoemale from '@/components/shoemale.vue';
import shoefemale from '@/components/shoefemale.vue';
export default{
    name:'shoeStore',
    data(){
        return{
            male:true,
            female:true,
            colorra:1
        }
    },
    components:{
        shoemale,
        shoefemale
    },
    methods:{
        ra(){
            this.male = true
            this.female = true
            this.colorra = 1
        },
        rb(){
            this.male = true
            this.female = false
            this.colorra = 2
        },
        rc(){
            this.female = true
            this.male = false
            this.colorra = 3
        }
    }
}

</script>
<style scoped>
.container{
    width: 100%;
    height: 100vh;
    position: relative;
}
.shoeBox{
    width: 100%;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    right: 0;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
}
.shoetitle{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
}
.shoetitle-left{
    color: pink;
    font-size: 20px;
    margin-left: 20px;
}
.shoetitle-right{
    margin-right: 20px;
    font-size: 16px;
}
.shoetitle-right .r1{
    color: darkkhaki;
    margin-right: 5px;
}
.shoetitle-right .r2{
    margin-right: 5px;
}
.shoetitle-right .r3{
    margin-right: 5px;
}
.shoetitle-right span:hover{
    cursor: pointer;
}
</style>