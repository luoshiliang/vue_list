<template>
    <div class="box">
        <div class="box-img">
            <img src="../assets/image/xue.jpg" alt="">
        </div>
        <div class="blockAAA">
            <el-cascader :props="defaultParams" clearable></el-cascader>
        </div>
    </div>
</template>

<script>
// <!-- :props="props"  -->
import { provinciallevel } from '../api/index.js'

export default {
    name: "axioslx",
    data() {
        return {
            defaultParams: {
                label: "name",
                value: "id",
                children: "children",
                checkStrictly: true,
                multiple: true,
                lazy: true,
                lazyLoad(node, resolve) {
                    const { value } = node;
                    setTimeout(async () => {
                        let arr = await provinciallevel(value)
                        resolve(arr);
                    }, 1000);
                }
            }
        }
    }
}

</script>

<style scoped>
.el-cascader-menu {
    height: 200px;
}
.box {
    position: relative;
    text-align: center;
    width: 400px;
    height: auto;
    margin: 100px auto;
}

.box-img {
    text-align: center;
    width: 200px;
}

.box-img img {
    width: 220px;
    margin-left: 90px;
}

.blockAAA {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>