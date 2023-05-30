<template>
    <div class="headmsg">
        <div class="headmsgdiv"></div>
        <div class="rolinkdiv">
            <router-link active-class="active" class="rolink" :to="{name:'rlx1'}">推荐</router-link>
            <router-link active-class="active" class="rolink" :to="{name:'rlx2'}">排行</router-link>
            <router-link active-class="active" class="rolink" :to="{name:'rlx3'}">歌单</router-link>
            <router-link active-class="active" class="rolink" :to="{name:'rlx4'}">主播电台</router-link>
            <router-link active-class="active" class="rolink" :to="{name:'rlx5'}">歌手</router-link>
            <router-link active-class="active" class="rolink" :to="{name:'rlx6'}">新碟上架</router-link>
        </div>
        <div class="viewdiv">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'routerlianxi'
}
</script>
<style scoped>
.headmsg {
    width: 100%;
    height: 40px;
    background-color: #c20c0c;
    position: relative;
}
.headmsg .rolinkdiv{
    display: flex;
    list-style: none;
    margin-left: 18%;
}
.headmsg .rolinkdiv .rolink{
    text-decoration:none;
    width: 70px;
    height: 25px;
    border-radius: 15px;
    margin-top: 7px;
    text-align: center;
    line-height: 25px;
    color: white;
    font-size: 10px;
    margin-left: 20px;
}
.headmsg .rolinkdiv .rolink:hover{
    background-color: gray;
    cursor: pointer;
}
.headmsgdiv{
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #c20c0c;
    top: -10px;
    left: 22%;
    right: 0;
    bottom: 0;
    clip-path: polygon(50% 0,100% 100%,0 100%);
}
.viewdiv{
    margin-top: 200px;
    margin-left: 600px;
}
.active{
    background-color: gray;
}
</style>