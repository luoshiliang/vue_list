<template>
    <div class="studentBox">
        <h2>学生管理系统</h2>
        <div class="studentBut">
            <button v-show="addbtn" @click="addStudent">添加学生</button>
            <div v-show="addStuMsg">
            <button @click="onfirmadd">确认添加</button>
            <button @click="canceladd">取消添加</button>
            <input type="text" v-model="studentObj.name" placeholder="学生姓名">
            <input type="text" v-model="studentObj.age" placeholder="学生年龄">
            <input type="text" v-model="studentObj.fraction" placeholder="学生成绩">
            </div>
        </div>
        <div class="student-sort">
            <button @click="ageSort">按年龄排序</button>
            <button @click="fractionSort">按成绩排序</button>
        </div>
        <div class="student-table">
            <table cellspacing="0" >
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>分数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(s,index) in studentList" :key="index">
                        <td>{{ s.name }}</td>
                        <td>{{ s.age }}</td>
                        <td>{{ s.fraction }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'student',
    data(){
        return{
            studentList:[{
                name:"张三",age:18,fraction:88
            }],
            addbtn:true,
            addStuMsg:false,
            studentObj:{
                name:'',
                age:'',
                fraction:''
            }
        }
    },
    methods:{
        //添加
        addStudent(){
            this.addbtn = false
            this.addStuMsg = true
        },
        onfirmadd(){
            this.studentList.push(this.studentObj)
            this.studentObj = {
                name:'',
                age:'',
                fraction:''
            }
        },
        canceladd(){
            this.addbtn = true
            this.addStuMsg = false
        },
        ageSort(){
            this.studentList = this.studentList.sort((a,b)=>{
                return a.age-b.age
            })
        },
        fractionSort(){
            this.studentList = this.studentList.sort((a,b)=>{
                return a.fraction-b.fraction
            })
        }
    }
}
</script>
<style scoped>
.studentBox{
    width: 800px;
    height: auto;
    border-radius: 10px;
    border: 0.2px solid black;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.studentBox h2{
    margin-left: 35px;
}
.studentBox .studentBut{
    width: 100%;
    height: 30px;
    display: flex;
    margin-left: 30px;
}
.studentBox .studentBut button{
    margin-left: 5px;
    text-align: center;
    height: 30px;
}
.studentBox .studentBut input{
    margin-left: 5px;
}
.studentBox .student-sort{
    margin-top: 10px;
    margin-left: 30px;
    height: 30px;
}
.studentBox .student-sort button{
    height: 30px;
    margin-left: 2px;
}
.student-table{
    margin-top: 20px;
    margin-left: 30px;
}
table {

    border-collapse: collapse;
    width: 500px;
    height: 40px;
}
td, th {
    border: 1px solid black;
    text-align: center;
}
</style>