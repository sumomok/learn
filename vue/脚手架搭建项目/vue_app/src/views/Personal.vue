<template>
    <div class="personal">
        <label for="name">姓名</label>
        <input type="text" id='name' v-model="name">
        <button @click="handleClick">提交</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        handleClick(){
            this.name = '';
        }
    },
    // 当离开这个路由的时候
    beforeRouteLeave(to,from,next){
        if(this.name) {
            const flag = window.confirm('确定要离开么')
            if(flag){
                next();
            }
        } else {
            next();
        }
    }
}
</script>