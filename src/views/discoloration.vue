<template>
    <div class="changColor">
        <div class="pinlunH">
            <h2>评论区</h2>
        </div>
        <div class="colorInp">
            请选择文字颜色:
            <input type="radio" name="color" id="red" v-model="color" value="red"><label class="lab1" for="red">red</label>
            <input type="radio" name="color" id="blue" v-model="color" value="blue"><label class="lab2" for="blue">blue</label>
            <input type="radio" name="color" id="yellow" v-model="color" value="yellow"><label class="lab3" for="yellow">yellow</label>
            <input type="radio" name="color" id="green" v-model="color" value="green"><label class="lab4" for="green">green</label>
            <input type="radio" name="color" id="skyblue" v-model="color" value="skyblue"><label class="lab5" for="skyblue">skyblue</label>
        </div>
        <div class="pinul">
            <ul>
                <li ref="ColorLi" v-for="(p,index) in pintext" :key="index"><span :style="{color:p.color}">{{p.name}}</span><span @click="deleSpan(index)">X</span></li>
            </ul>
        </div>
        <div class="plus">
            <textarea name="context" id="context" cols="60" rows="5" v-model="contextL"></textarea>
            <button @click="plustext">发表</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'discoloration',
    data(){
        return {
            contextL:'',
            pintext:[],
            color:''
        }
    },
    methods:{
        plustext(){
            this.pintext.push({name:this.contextL,color:this.color})
        },
        deleSpan(index){
            this.pintext.splice(index,1)
        }
    }
}

</script>

<style scoped>
.pinul ul li{
    width: 400px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    list-style: none;
}
.changColor {
    width: 500px;
    height: 600px;
    border: 1px solid black;
    border-radius: 10px;
    margin: auto;
    position: relative;
    user-select:none
}
.colorInp{
    margin-left: 20px;
}
.lab1{
    background-color: red;
}
.lab2{
    background-color: blue;
}
.lab3{
    background-color: yellow;
}
.lab4{
    background-color: green;
}
.lab5{
    background-color: skyblue;
}
.plus{
    display: flex;
    position: absolute;
    top: 500px;
    left: 20px;
}
.plus button{
    display: block;
}
</style>