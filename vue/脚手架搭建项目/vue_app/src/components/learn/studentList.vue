<template>
    <div>
        <hr />
        <div class="addstudent" v-for="(item,index) in studentListInfo" :key='index'>添加学生：{{item}}</div>
        <hr />
        <ul>
            <li v-for="(item) in student" :key='item.id'>{{item.name}} {{item.age}}</li>
            <!-- <li>{{student}}</li> -->
        </ul>
    </div>
</template>

<script>
    import { mapState,mapGetters } from 'vuex';
    // console.log(mapGetters(['studentListInfo']));
    // console.log(mapState(['student']));
    export default {
        computed:{
            ...mapState('getStudentList',['student']),
            ...mapGetters('getStudentList',['studentListInfo'])
        },
    }
</script>

<style>

</style>