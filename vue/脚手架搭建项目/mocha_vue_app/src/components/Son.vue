<template>
    <div>
        <h4 class="name">姓名：{{name}}</h4>
        <h4 class="age">年龄：{{age}}</h4>
        <button @click="handleClick">显示</button>
        <button @click="change">改变年龄</button>
    </div>
</template>
<script>
export default {
    props:['name','age','show','fn'],
    methods:{
        handleClick(){
            // this.show = !this.show;
            this.$emit('show');
        },
        change(){
            this.fn();
        }

    }
}
</script>