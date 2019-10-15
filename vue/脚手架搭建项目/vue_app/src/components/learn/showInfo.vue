<template>
    <div class="inputinfo">
        <label for="name">姓名</label>
        <input type="text" id="name">
        <label for="age">年龄</label>
        <input type="text" id="age">
        <button @click="handleClikc"></button>
    </div>
</template>

<script>
import { MapStore } from 'vuex'
console.log(MapStore)
export default {
    // methods:{
    //     handleClick(){

    //     }
    // }
}
</script>