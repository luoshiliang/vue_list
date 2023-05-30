<template>
    <div class="home">
        <!-- <h2>Vue2练习案例</h2>
        <div class="bianse">
            <el-button type="primary" @click="discolorationAAA">变色</el-button>
            <el-button type="primary" @click="studentMsg">学生信息系统</el-button>
            <el-button type="primary" @click="personMsg">完善个人信息</el-button>
            <el-button type="primary" @click="shop">简易购物车</el-button>
        </div> -->

        <el-button class="butTitle" @click="drawer = true" type="primary">
            Vue2练习案例
        </el-button>

        <el-drawer class="bianse" title="Vue2练习案例" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
            <el-button type="primary" @click="discolorationAAA">变色</el-button>
            <el-button type="primary" @click="studentMsg">学生信息系统</el-button>
            <el-button type="primary" @click="personMsg">完善个人信息</el-button>
            <el-button type="primary" @click="shop">简易购物车</el-button>
            <el-button type="primary" @click="shoe">鞋子卖场</el-button>
            <el-button type="primary" @click="axioslx">axios</el-button>
            <el-button type="primary" @click="elstudent">el学生管理</el-button>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            drawer: false,
            direction: 'ltr',
        }
    },
    methods: {
        discolorationAAA() {
            this.$router.push({
                name: 'discoloration'
            }).catch(err => { })
        },
        studentMsg() {
            this.$router.push({
                name: 'student'
            }).catch(err => { })
        },
        personMsg() {
            this.$router.push({
                name: 'formMsg'
            }).catch(err => { })
        },
        shop() {
            this.$router.push({
                name: 'shop'
            }).catch(err => { })
        },
        handleClose(done) {
            done()
        },
        shoe(){
            this.$router.push({
                name: 'shoeStore'
            }).catch(err => { })
        },
        axioslx(){
            this.$router.push({
                name: 'axioslx'
            }).catch(err => { })
        },
        elstudent(){
            this.$router.push({
                name: 'elstudent'
            }).catch(err => { })
        }
    }
}
</script>
<style scoped>
.home {
    width: 600px;
    height: 400px;
    border: 1px solid blue;
    border-radius: 10px;
    margin: 100px auto;
    position: relative;
}
.butTitle{
    margin: 20px;
}
h2 {
    position: absolute;
    top: 0;
    left: 35%;
    bottom: 0;
    right: 0;
}

.bianse button {
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
    opacity: 0.5;
}

.bianse button:hover {
    opacity: 1;
}
</style>