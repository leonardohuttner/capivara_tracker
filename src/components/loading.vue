<template>
    <q-inner-loading class="load" :showing="loading">
        <q-spinner size="90px" color="green"/>
        <p>{{this.message}}</p>
    </q-inner-loading>
</template>

<script>
export default {
    name:'loading',
    props:{
        loading: {
            type: Boolean,
            default: false
        },
        message: {
            type:String,
            default: ''
        }
    }
}
</script>

<style>
load{
    position: relative;
}
</style>