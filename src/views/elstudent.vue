<template>
    <div class="box">
        <div class="stubox">
            <div class="stunum">
                <div class="stunum1">
                    独生子女:<span>{{ only }}</span>
                </div>
                <div class="stunum2">
                    城市户口学生数量:<span>{{ city }}</span>
                </div>
                <div class="stunum3">
                    已成年学生数量:<span>{{ age }}</span>
                </div>
                <div class="stunum4">
                    已接种新冠疫苗人数:<span>{{ yijiezhong }}</span>
                </div>
            </div>
            <div class="studata">
                <div class="stubtn">
                    <el-button type="success" @click="addStudent">新增学生</el-button>
                    <el-button type="success" @click="delcheck">删除选中</el-button>
                    <el-button type="danger" @click="delAll">删除全部</el-button>
                </div>
                <div class="stutab">
                    <el-table ref="multipleTable" :data="stuList" tooltip-effect="dark" style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="50">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="70">
                        </el-table-column>
                        <el-table-column prop="age" label="年龄" width="70">
                        </el-table-column>
                        <el-table-column prop="only" label="是否独生" width="100">
                        </el-table-column>
                        <el-table-column prop="numAddress" label="户口" width="100">
                        </el-table-column>
                        <el-table-column prop="tel" label="手机" width="100">
                        </el-table-column>
                        <el-table-column prop="idCard" label="身份证" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" show-overflow-tooltip width="120">
                        </el-table-column>
                        <el-table-column prop="vaccinate" label="新冠疫苗" width="100">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="mini" type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <formAA></formAA>
        </div>
    </div>
</template>

<script>
import formAA from '@/components/formAA.vue';
export default {
    name: 'elstudent',
    components: {
        formAA
    },
    data() {
        return {
            edi: false,
            multipleSelection: []
        }
    },
    computed: {
        stuList() {
            return this.$store.state.student.stu
        },
        only(){
            return this.$store.getters['student/onlyBoy']
        },
        city(){
            return this.$store.getters['student/city']
        },
        age(){
            return this.$store.getters['student/age']
        },
        yijiezhong(){
            return this.$store.getters['student/yijiezhong']
        }

    },
    methods: {
        handleEdit(index, row) {
            this.$bus.$emit('edit', {index,bol:true})
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.$store.dispatch('student/deletestudent',{index,row})
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        addStudent() {
            this.$bus.$emit('show', true)
        },
        //删除选中
        delcheck() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('student/delcheck',this.multipleSelection)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
        delAll(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('student/DELALL')
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        }
    }
}
</script>

<style scoped>
.box {
    margin: auto;
    width: 1080px;
    height: 88vh;
    border-radius: 10px;
    box-shadow: 0 0 3px 2px #ccc;
    margin-top: 15px;
    padding-top: 30px;
}

.stunum {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
}

.stunum div {
    text-align: center;
    line-height: 70px;
    border-radius: 5px;
    width: 230px;
    height: 70px;
    box-shadow: 0 0 3px 2px #ccc;
}

.studata {
    border-radius: 5px;
    margin: auto;
    margin-top: 30px;
    width: 96%;
    height: 250px;
    box-shadow: 0 0 3px 2px #ccc;
    padding-top: 10px;
}

.stubtn {
    width: 100%;
    height: 20px;
    margin-left: 20px;
}

.stutab {
    padding-top: 10px;
    margin: auto;
    margin-top: 35px;
    width: 96%;
    height: 150px;
    box-shadow: 0 0 3px 2px #ccc;
    border-radius: 5px;
}

.el-table {
    margin: auto;
}
</style>