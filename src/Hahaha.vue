<template>
<div>
    你已经看到我了
    <router-link to="xixi"><button>再点我</button></router-link>
</div>
</template>
<script>
export default {
    mounted(){
        this.consoleParams()
    },
    methods:{
        consoleParams(){
            console.log(this.$route.params)
        }
    }
}
</script>

