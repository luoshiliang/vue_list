<template>
    <div class="formbox">
        <h2>完善个人信息</h2>
        <div class="formMsg" v-show="formshow">
            <form>
                <ul>
                    <li>
                        <span>姓名:</span>
                        <input type="text" required v-model="form.name">
                    </li>
                    <li>
                        <span>年龄:</span>
                        <input type="text" required v-model="form.age">
                    </li>
                    <li>
                        <span>性别:</span>
                        男<input type="radio" name="sex" v-model="form.sex" value="男">
                        女<input type="radio" name="sex" v-model="form.sex" value="女">
                    </li>
                    <li>
                        <span>婚姻状态:</span>
                        已婚<input type="radio" name="marriage" v-model="form.marriage" value="已婚">未婚<input type="radio"
                            name="marriage" v-model="form.marriage" value="未婚">
                    </li>
                    <li>
                        <span>爱好:</span>
                        音乐<input type="checkbox" name="hobby" value="音乐" v-model="form.hobby">
                        运动<input type="checkbox" name="hobby" value="运动" v-model="form.hobby">
                        旅游<input type="checkbox" name="hobby" value="旅游" v-model="form.hobby">
                        上网<input type="checkbox" name="hobby" value="上网" v-model="form.hobby">
                        代码<input type="checkbox" name="hobby" value="代码" v-model="form.hobby">
                    </li>
                    <li>
                        <span>年底旅游地:</span>
                        <select name="city" v-model="form.city">
                            <option value=""></option>
                            <option value="湖南">湖南</option>
                            <option value="四川">四川</option>
                            <option value="北京">北京</option>
                        </select>
                    </li>
                    <li>
                        <span>喜欢的颜色:</span>
                        <input type="color" name="color" v-model="form.color">
                    </li>
                    <li>
                        <span>自我介绍:</span>
                        <textarea name="per" cols="30" rows="1" v-model="form.per"></textarea>
                    </li>
                    <li>
                        <span>出生日期:</span>
                        <input type="date" name="date" v-model="form.date">
                    </li>
                    <li><input type="submit" value="确认提交" @click.prevent="sub"></li>
                </ul>
            </form>
        </div>
        <div class="msgtab" v-show="tabshow">
            <table border="1" cellspacing="0">
                <tr>
                    <td>年龄</td>
                    <td colspan="2">{{ tablemsg.age }}</td>

                </tr>
                <tr>
                    <td>性别</td>
                    <td>{{ tablemsg.sex }}</td>
                </tr>
                <tr>
                    <td>婚姻</td>
                    <td>{{ tablemsg.marriage }}</td>
                </tr>
                <tr>
                    <td>爱好</td>
                    <td><span v-for="(item, index) in tablemsg.hobby || []" :key="index">{{ item || '无' }}</span></td>
                </tr>
                <tr>
                    <td>年底旅游地</td>
                    <td>{{ tablemsg.city || '不旅游' }}</td>
                </tr>
                <tr>
                    <td>喜欢的颜色</td>
                    <td>{{ tablemsg.color || '没有特别喜欢' }}</td>
                </tr>
                <tr>
                    <td>自我介绍</td>
                    <td>{{ tablemsg.per || '暂无此人自我介绍' }}</td>
                </tr>
                <tr>
                    <td>出生日期</td>
                    <td>{{ tablemsg.date || '不详' }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'formMsg',
    data() {
        return {
            form: {
                name: '',
                age: '',
                sex: '男',
                marriage: '未婚',
                hobby: [],
                city: '',
                color: '',
                date: '',
                per: ''
            },
            formshow: true,
            tabshow: false,
            tablemsg: {}
        }
    },
    methods: {
        sub() {
            this.tablemsg = this.form
            this.formshow = false
            this.tabshow = true
        }
    }
}
</script>

<style scoped>
.formbox {
    width: 500px;
    height: 600px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px auto;
}

.formbox h2 {
    margin-left: 20px;
    margin-top: 10px;
}

.formMsg ul li {
    width: 100%;
    height: 30px;
    list-style: none;
    margin: 10px;
}

.formMsg ul li span {
    margin-right: 20px;
    font-size: 18px;
}

.msgtab table {
    width: 300px;
    height: 400px;
}

.msgtab table tr td {
    width: 100px;
    height: 50px;
}
</style>