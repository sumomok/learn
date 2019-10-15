<template>
    <button @click="handleClick"></button>
</template>
<script>
export default {
    methods:{
        handleClick(){
            document.cookie = 'login=true'
        }
    }
}
</script>