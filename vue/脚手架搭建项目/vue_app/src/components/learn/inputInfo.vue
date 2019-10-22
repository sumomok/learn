<template>
    <div class="shwoinfo">
        <input type="text" v-model="name">
        <input type="text" v-model="age">
        <button @click="handleClick">处理信息</button>
    </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            name:'',
            age:null,
        }
    },
    methods:{
        // ...mapMutations(['ChangestudentList']),
        //  ...mapActions('getStudentList',['ChangestudentList']),
        handleClick(){
            // this.$store.state.student.push({name:this.name,age:this.age,id:+new Date()});
            // this.$store.commit('getStudentList/ChangestudentList',{
            //     name:this.name,
            //     age:this.age,
            //     id:+new Date(),
            // })
            // console.log(this.ChangestudentList())
            // this.ChangestudentList({name:this.name,age:this.age})
            this.$store.dispatch('getStudentList/ChangestudentList',{
                name:this.name,
                age:this.age,
                id:+new Date(),
            })
        }
    },
}
</script>