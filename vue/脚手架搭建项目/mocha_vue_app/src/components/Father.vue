<template>
    <div>
        <son
        :name='name'
        :age='age'
        :show='show'
        @show = 'showInfo'
        :fn = 'changeAge'
        ></son>
        <div class="info" v-if='show'>
            test
        </div>
    </div>
</template>
<script>
    import son from './Son';
export default {
    components:{
        son
    },
    data () {
        return {
            name:'Lihaoran',
            age:18,
            show:false,
        }
    },
    methods:{
        showInfo(){
            this.show = !this.show;
        },
        changeAge () {
            this.age = 16;
        }
    }
}
</script>