<template>
    <div class="box">
        <div class="head">
            <div class="headtitle">网易云音乐</div>
            <div class="headli">
                <div class="roulinkdiv">
                    <router-link class="rolink" active-class="active" :to="{name:'routerlianxi'}">发现音乐</router-link>
                    <router-link class="rolink" active-class="active" :to="{name:'routerlianxi1'}">我的音乐</router-link>
                    <router-link class="rolink" active-class="active" :to="{name:'routerlianxi2'}">关注</router-link>
                    <router-link class="rolink" active-class="active" :to="{name:'routerlianxi3'}">商城</router-link>
                    <router-link class="rolink" active-class="active" :to="{name:'routerlianxi4'}">音乐人</router-link>
                    <router-link class="rolink" active-class="active" :to="{name:'routerlianxi5'}">下载客户端</router-link>
                </div>
            </div>
            <div class="headbtn">
                <input type="text" placeholder="音乐/视频/电台/用户">
                <button>创作者中心</button>
                <a>登录</a>
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default{
    name:'router'
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.box {
    width: 1225px;
    height: 95vh;
}
.on{
    background-color: black;
}
.head {
    width: 100%;
    height: 70px;
    background-color: #242424;
    display: flex;
}

.headtitle{
    margin-left: 100px;
    color: white;
    font-size: 25px;
    line-height: 70px;
}
.headtitle:hover{
    cursor: pointer;
}
.headli .roulinkdiv{
    list-style: none;
    display: flex;
    font-size: 15px;
    user-select: none;
}
.headli .roulinkdiv .rolink{
    text-decoration: none;
    text-align: center;
    width: 100px;
    height: 70px;
    line-height: 70px;
    color: white;
}
.headli .roulinkdiv .rolink:hover{
    background-color: black;
    cursor: pointer;
}
.headbtn{
    margin-left: 50px;
    line-height: 70px;
}
.headbtn input{
    width: 130px;
    height: 35px;
    border-radius: 20px;
    padding-left: 15px;
    border: 1px solid black;
}
.headbtn button{
    margin-left: 10px;
    width: 100px;
    height: 30px;
    background-color: #242424;
    color: gray;
    border-radius: 20px;
    text-align: center;
    border: 1px solid gray;
}
.headbtn button:hover{
    color: white;
    border: 1px solid white;
    cursor: pointer;
}
.headbtn a{
    color: gray;
    margin-left: 10px;
}
.headbtn a:hover{
    color: white;
    cursor: pointer;
    text-decoration:underline
}
.active{
    background-color: black;

}
</style>