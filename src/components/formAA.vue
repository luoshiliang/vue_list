<template>
    <div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="82px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="tel">
                    <el-input v-model.number="ruleForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="身份证" prop="idCard">
                    <el-input v-model="ruleForm.idCard"></el-input>
                </el-form-item>
                <el-form-item label="是否独生" prop="only">
                    <el-radio-group v-model="ruleForm.only">
                        <el-radio label="独生子女"></el-radio>
                        <el-radio label="非独生子女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="接种新冠" prop="vaccinate">
                    <el-radio-group v-model="ruleForm.vaccinate">
                        <el-radio label="已接种"></el-radio>
                        <el-radio label="未接种"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="户口所在地" prop="numAddress">
                    <el-select v-model="ruleForm.numAddress">
                        <el-option label="农村户口" value="农村户口"></el-option>
                        <el-option label="城市户口" value="城市户口"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitstu">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'from',
    data() {
        return {
            dialogVisible: false,
            ruleForm: {
                name: '',
                age: '',
                address: '',
                tel: '',
                idCard: '',
                only: '非独生子女',
                vaccinate: '已接种',
                numAddress: '农村户口'
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 0, max: 20, message: '长度在 20 个字符之间', trigger: 'blur' }
                ],
                age: [
                    { required: true, message: '年龄不能为空' },
                    { type: 'number', message: '年龄必须为数字值' }
                ],
                address: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '手机号码不能为空' },
                    { type: 'number', message: '手机号码必须为数字值' }
                ],
                idCard: [
                    { required: true, message: '请输入身份证', trigger: 'blur' },
                    { min: 18, max: 18, message: '长度在 18 个字符之间', trigger: 'blur' }
                ],
            },
            index: ''
        }
    },
    methods: {
        submitstu() {
            if (this.ruleForm.name == '') {
                return
            }
            if (this.index.length == 0) {
                this.$store.dispatch('student/addstudent', this.ruleForm)
            } else {
                this.ruleForm.id = Math.floor(Math.random() * 1000)
                this.ruleForm.index = this.index
                this.$store.dispatch('student/editstudent', this.ruleForm)
            }

            this.dialogVisible = false
            this.ruleForm = {
                name: '',
                age: '',
                address: '',
                tel: '',
                idCard: '',
                only: '非独生子女',
                vaccinate: '已接种',
                numAddress: '农村户口'
            }
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        showDialog(data) {
            this.dialogVisible = data
        },
        editstu({ index, bol }) {
            this.index = index
            this.ruleForm = this.$store.state.student.stu[index]
            this.dialogVisible = bol
        }
    },
    mounted() {
        this.$bus.$on('show', this.showDialog)
        this.$bus.$on('edit', this.editstu)
    }
}
</script>

<style scoped></style>