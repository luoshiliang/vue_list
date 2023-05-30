const actions = {
    addstudent(context,value){
        context.commit('ADDSTUDENT',value)
    },
    delcheck(context,value){
        context.commit('DELCHECK',value)
    },
    editstudent(context,value){
        context.commit('EDITSTUDENT',value)
    },
    deletestudent(context,value){
        context.commit('DELETESTUDENT',value)
    }
}
const mutations = {
    ADDSTUDENT(state,value){
        state.stu.push(value)
    },
    DELCHECK(state,value){
        if(value == []){
            return
        }
        for (let i = 0; i < value.length; i++) {
            let index = state.stu.indexOf(value[i])
            state.stu.splice(index,1)
        }
        
    },
    DELALL(state){
        state.stu = []
    },
    EDITSTUDENT(state,value){
        state.stu[value.index] = value
    },
    DELETESTUDENT(state,value){
        state.stu.splice(value.index,1)
    }
}
const state = {
    stu:[]
}
const getters = {
    onlyBoy(state){
        let num = 0
        state.stu.forEach(item => {
            if(item.only == "独生子女"){
                num += 1
            }
        });
        return num
    },
    city(state){
        let num = 0
        state.stu.forEach(item=>{
            if(item.numAddress == "城市户口"){
                num += 1
            }
        })
        return num
    },
    age(state){
        let num = 0
        state.stu.forEach(item=>{
            if(item.age >= 18){
                num += 1
            }
        })
        return num
    },
    yijiezhong(state){
        let num = 0
        state.stu.forEach(item=>{
            if(item.vaccinate == "已接种"){
                num += 1
            }
        })
        return num
    }
}

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}