<template>
    <q-inner-loading :visible="loading">
        <q-spinner size="90px" color="green"/>
    </q-inner-loading>
</template>

<script>
export default {
    name:'loading',
    props:{
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>